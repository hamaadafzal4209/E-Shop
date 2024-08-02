import { useEffect, useState } from "react";
import PaymentCartData from "./PaymentCartData";
import PaymentInfo from "./PaymentInfo";

function Payment() {
    const [orderData,setOrderData] = useState("");
    useEffect(() => {
        const orderdata = JSON.parse(localStorage.getItem("latestOrder"));
        setOrderData(orderdata);
    },[])
  return (
    <div className="mx-auto flex w-11/12 flex-col items-start gap-6 md:flex-row lg:w-[80%]">
      <PaymentInfo />
      <PaymentCartData orderData={orderData} />
    </div>
  );
}

export default Payment;
