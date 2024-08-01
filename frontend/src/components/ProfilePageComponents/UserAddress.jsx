/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

function UserAddress() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const { user } = useSelector((state) => state.user);

  const addressTypeData = [
    {
      name: "default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="w-full px-5">
        <div className="flex w-full items-center justify-between pb-2">
          <h1 className="text-xl font-semibold">My Addressess</h1>
          <button className="inline-block rounded-md bg-black px-8 py-2.5 text-white">
            Add New
          </button>
        </div>
        <br />
        <div className="flex h-[70px] w-full items-center justify-between rounded-md bg-white px-3 pr-10">
          <div className="flex items-center">
            <h5 className="font-semibold">Default</h5>
          </div>
          <div className="flex items-center gap-4">
            <h5 className="font-semibold">ABC, XYZ Street, City</h5>
          </div>
          <div className="flex items-center gap-4">
            <h5 className="font-semibold">1111 2222 333 44</h5>
          </div>
          <div className="flex min-w-[10%] items-center justify-center pl-8">
            <AiOutlineDelete size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
