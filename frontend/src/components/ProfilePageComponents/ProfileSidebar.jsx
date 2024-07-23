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
    <div className="mr-6 w-full rounded-lg bg-white p-4 shadow-sm">
      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span className={`${active === 1 ? "font-semibold text-red-600" : ""}`}>
          Person
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span className={`${active === 2 ? "font-semibold text-red-600" : ""}`}>
          Orders
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span className={`${active === 3 ? "font-semibold text-red-600" : ""}`}>
          Refunds
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => {
          setActive(4);
          navigate("/inbox");
        }}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span className={`${active === 4 ? "font-semibold text-red-600" : ""}`}>
          Inbox
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span className={`${active === 5 ? "font-semibold text-red-600" : ""}`}>
          Track Order
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span className={`${active === 6 ? "font-semibold text-red-600" : ""}`}>
          Payment Methods
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span className={`${active === 7 ? "font-semibold text-red-600" : ""}`}>
          Address
        </span>
      </div>

      <div
        className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition-all`}
        onClick={() => setActive(8)}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
        <span className={`${active === 8 ? "font-semibold text-red-600" : ""}`}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default ProfileSidebar;
