import PaymentCartData from "./PaymentCartData";
import PaymentInfo from "./PaymentInfo";

function Payment() {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-start gap-6 md:flex-row lg:w-[80%]">
      <PaymentInfo />
      <PaymentCartData />
    </div>
  );
}

export default Payment;
