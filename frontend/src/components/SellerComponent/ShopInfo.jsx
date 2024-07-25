import { useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
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
    <div className="">
      <div>
        <div className="flex flex-col items-center">
          {seller.avatar ? (
            <img
              src={`${backend_url}/${seller.avatar}`}
              alt="Seller Avatar"
              className="h-32 w-32 rounded-full border-4 border-gray-200 object-cover"
            />
          ) : (
            <CgProfile className="h-32 w-32 text-gray-400" />
          )}
          <h2 className="mt-4 text-xl font-bold">{seller.name}</h2>
          <p className="mt-2 text-gray-600">{seller.description}</p>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-gray-700 flex-wrap">
            <span className="font-semibold">Address:</span>
            <span>{seller.address}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Phone Number:</span>
            <span>{seller.phoneNumber}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Total Products:</span>
            <span>10</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Shop Rating:</span>
            <span>4/5</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Joined On:</span>
            <span>{seller.createdAt.slice(0, 10)}</span>
          </div>
        </div>
      </div>
      {isOwner && (
        <div className="mt-6 flex flex-col gap-4">
          <button className="rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700">
            Edit Shop
          </button>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopInfo;