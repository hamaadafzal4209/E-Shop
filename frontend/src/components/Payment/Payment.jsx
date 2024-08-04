import { useEffect, useState } from "react";
import PaymentCartData from "./PaymentCartData";
import PaymentInfo from "./PaymentInfo";
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";
import { clearCartAction } from "../../redux/actions/cart";

function Payment() {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [orderData, setOrderData] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

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

      // Request client secret from backend
      const { data } = await axios.post(
        `${server}/payment/process`,
        paymentData,
        config,
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      // Confirm the payment with Stripe
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

          // Create the order in the backend
          await axios.post(`${server}/order/create-order`, order, config);
          console.log("Order created successfully");

          // Clear local storage and update Redux state
          localStorage.setItem("cartItems", JSON.stringify([]));
          localStorage.setItem("latestOrder", JSON.stringify([]));
          dispatch(clearCartAction());
          console.log("Local storage cleared");

          setOpen(false);
          navigate("/order/success");
          toast.success("Order successful!");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "Cash On Delivery",
    };

    await axios.post(`${server}/order/create-order`, order, config).then(() => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      dispatch(clearCartAction()); // Dispatch the clear cart action
      window.location.reload();
    });
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
