import { useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ShopInfo({ isOwner }) {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${server}/shop/logout`, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="w-full space-y-4 p-4 py-5">
      <div className="flex w-full items-center justify-center">
        {seller.avatar ? (
          <img
            src={`${backend_url}/${seller.avatar}`}
            alt="Seller Avatar"
            className="h-32 w-32 rounded-full object-cover"
          />
        ) : (
          <p>
            <CgProfile className="h-32 w-32" />
          </p>
        )}
      </div>
      <p className="text-center text-lg font-semibold pb-6">{seller.name}</p>
      <p className="text-center text-lg font-semibold">{seller.description}</p>
      <h5 className="font-semibold">
        Address:{" "}
        <span className="font-medium text-[#000000a6]">{seller.address}</span>{" "}
      </h5>
      <h5 className="font-semibold">
        Phone Number:{" "}
        <span className="font-medium text-[#000000a6]">
          {seller.phoneNumber}
        </span>{" "}
      </h5>
      <h5 className="font-semibold">
        Total Products: <span className="font-medium text-[#000000a6]">10</span>{" "}
      </h5>
      <h5 className="font-semibold">
        Shop Rating: <span className="font-medium text-[#000000a6]">4/5</span>{" "}
      </h5>
      <h5 className="font-semibold">
        Joined On:{" "}
        <span className="font-medium text-[#000000a6]">
          {seller.createdAt.slice(0, 10)}
        </span>{" "}
      </h5>
      {
        isOwner && (
          <div className="pt-3">
            <div className="bg-black w-full text-white py-3 text-center font-semibold">Edit Shop</div>
          </div>
        )
      }
      {
        isOwner && (
            <button onClick={handleLogout} className="bg-black w-full text-white py-3 text-center font-semibold">Log Out</button>
        )
      }
    </div>
  );
}

export default ShopInfo;
