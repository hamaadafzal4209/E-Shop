/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PaymentCartData from "./PaymentCartData";
import PaymentInfo from "./PaymentInfo";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";

function Payment() {
  const { user } = useSelector((state) => state.user);
  const [orderData, setOrderData] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const paymentData = {
    amount: Math.round(orderData?.totalPrice * 100),
  };

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user,
    totalPrice: orderData?.totalPrice,
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${server}/payment/process`,
        paymentData,
        config
      );
  
      const client_secret = data.client_secret;
  
      if (!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });
  
      if (result.error) {
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
            type: "Credit Card",
          };
  
          await axios.post(`${server}/order/create-order`, order, config);
          setOpen(false);
          navigate("/order/success");
          toast.success("Order successful!");
          localStorage.setItem("cartItems", JSON.stringify([]));
          localStorage.setItem("latestOrder", JSON.stringify([]));
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto flex w-11/12 flex-col items-start gap-6 md:flex-row lg:w-[80%]">
      <PaymentInfo
        user={user}
        open={open}
        setOpen={setOpen}
        paymentHandler={paymentHandler}
        cashOnDeliveryHandler={cashOnDeliveryHandler}
      />
      <PaymentCartData orderData={orderData} />
    </div>
  );
}

export default Payment;