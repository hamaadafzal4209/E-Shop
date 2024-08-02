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

function Payment() {
  const { user } = useSelector((state) => state.user);
  const [orderData, setOrderData] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderdata = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderdata);
  }, []);

  const createOrder = (data, actions) => {
    //
  };

  const onApprove = async (data, actions) => {
    //
  };

  const paypalPaymentHandler = async (paymentInfo) => {
    //
  };

  const paymentData = {
    amount: Math.round(orderData?.totalPrice * 100),
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
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
        onApprove={onApprove}
        createOrder={createOrder}
        paymentHandler={paymentHandler}
        cashOnDeliveryHandler={cashOnDeliveryHandler}
      />
      <PaymentCartData orderData={orderData} />
    </div>
  );
}

export default Payment;
