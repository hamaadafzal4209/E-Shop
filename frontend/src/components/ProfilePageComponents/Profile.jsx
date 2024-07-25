import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNUmber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber || "");
      setZipCode(user.zipCode || "");
      setAddress1(user.address1 || "");
      setAddress2(user.address2 || "");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="relative">
          {user.avatar ? (
            <img
              src={`${backend_url}/${user.avatar}`}
              className="h-32 w-32 rounded-full border-4 border-blue-700 object-cover object-top"
              alt=""
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue-700 bg-gray-200 object-cover">
              <FaUserCircle className="h-24 w-24 text-gray-400" />
            </div>
          )}
          <div className="absolute bottom-1.5 right-1.5 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#E3E9EE] shadow-sm">
            <AiOutlineCamera />
          </div>
        </div>
      </div>
      <div className="section py-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col items-center justify-between gap-2 sm:mb-4 sm:flex-row sm:gap-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="name" className="text-base font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="mt-1 w-full px-2 py-1"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="text-base font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-2 py-1"
              />
            </div>
          </div>
          <div className="mb-2 flex flex-col items-center justify-between gap-2 sm:mb-4 sm:flex-row sm:gap-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="phone" className="text-base font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phonenumber"
                value={phoneNUmber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 w-full px-2 py-1"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="zipcode" className="text-base font-semibold">
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="mt-1 w-full px-2 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="address-1" className="text-base font-semibold">
                Address 1
              </label>
              <input
                type="text"
                id="address-1"
                name="address1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="mt-1 w-full px-2 py-1"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="address-2" className="text-base font-semibold">
                Address 2
              </label>
              <input
                type="text"
                id="address-2"
                name="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="mt-1 w-full px-2 py-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 cursor-pointer rounded-md border-2 border-blue-500 bg-transparent px-14 py-2 text-blue-500 transition duration-300 hover:bg-blue-500 hover:text-white"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
