import CartData from "./CartData";
import ShippingInfo from "./ShippingInfo";

function CheckOut() {
  return (
    <>
      <div className="mx-auto w-11/12 lg:w-[80%] flex items-start gap-6 flex-col md:flex-row">
        <ShippingInfo />
        <CartData/>
      </div>
    </>
  );
}

export default CheckOut;
