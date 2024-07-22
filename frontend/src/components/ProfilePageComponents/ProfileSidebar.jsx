import { RxPerson } from "react-icons/rx";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineCreditCard, AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import React from "react";

function ProfileSidebar({ active, setActive }) {
    const navigate = useNavigate();
  
    const menuItems = [
        { id: 1, icon: <RxPerson size={20} />, label: "Person" },
        { id: 2, icon: <HiOutlineShoppingBag size={20} />, label: "Orders" },
        { id: 3, icon: <HiOutlineReceiptRefund size={20} />, label: "Refunds" },
        { id: 4, icon: <AiOutlineMessage size={20} />, label: "Inbox", action: () => navigate('/inbox') },
        { id: 5, icon: <MdOutlineTrackChanges size={20} />, label: "Track Order" },
        { id: 6, icon: <AiOutlineCreditCard size={20} />, label: "Payment Methods" },
        { id: 7, icon: <TbAddressBook size={20} />, label: "Address" },
        { id: 8, icon: <AiOutlineLogin size={20} />, label: "Logout" }
    ];

    return (
        <div className="w-full bg-white shadow-sm rounded-lg p-4 space-y-4">
            {menuItems.map((item) => (
                <div
                    key={item.id}
                    className={`flex items-center gap-3 w-full cursor-pointer rounded-md p-4 transition-all 
                    ${active === item.id ? "bg-red-100 text-red-600" : "bg-white text-black hover:bg-gray-100"}`
                    }
                    onClick={() => {
                        setActive(item.id);
                        if (item.action) item.action();
                    }}
                >
                    {React.cloneElement(item.icon, { color: active === item.id ? "red" : "" })}
                    <span className={`${active === item.id ? "text-red-600 font-semibold" : ""}`}>
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ProfileSidebar;