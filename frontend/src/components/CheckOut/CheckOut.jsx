/* eslint-disable no-unused-vars */
import { useState } from "react";
import CartData from "./CartData";
import ShippingInfo from "./ShippingInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto flex w-11/12 flex-col items-start gap-6 md:flex-row lg:w-[80%]">
        <ShippingInfo
          user={user}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          address1={address1}
          setAddress1={setAddress1}
          address2={address2}
          setAddress2={setAddress2}
          zipCode={zipCode}
          setZipCode={setZipCode}
        />
        <CartData />
      </div>
      <div
        className={`mx-auto my-3 mb-10 mt-10 flex h-[50px] w-[150px] cursor-pointer items-center justify-center rounded-xl bg-black md:w-[280px]`}
        onClick={() => navigate("/payment")}
      >
        <h5 className="text-white">Go to Payment</h5>
      </div>
    </>
  );
}

export default CheckOut;
