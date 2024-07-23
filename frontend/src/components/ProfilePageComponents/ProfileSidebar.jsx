import { RxPerson } from "react-icons/rx";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  AiOutlineCreditCard,
  AiOutlineLogin,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ProfileSidebar({ active, setActive }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-4">
      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span className={`${active === 1 ? "text-red-600 font-semibold" : ""}`}>
          Person
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span className={`${active === 2 ? "text-red-600 font-semibold" : ""}`}>
          Orders
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span className={`${active === 3 ? "text-red-600 font-semibold" : ""}`}>
          Refunds
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => {
          setActive(4);
          navigate("/inbox");
        }}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span className={`${active === 4 ? "text-red-600 font-semibold" : ""}`}>
          Inbox
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span className={`${active === 5 ? "text-red-600 font-semibold" : ""}`}>
          Track Order
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span className={`${active === 6 ? "text-red-600 font-semibold" : ""}`}>
          Payment Methods
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span className={`${active === 7 ? "text-red-600 font-semibold" : ""}`}>
          Address
        </span>
      </div>

      <div
        className={`flex items-center gap-3 w-full cursor-pointer rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(8)}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
        <span className={`${active === 8 ? "text-red-600 font-semibold" : ""}`}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default ProfileSidebar;