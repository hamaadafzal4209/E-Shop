/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../../../server";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";

function DashBoardMessages() {
  const { seller } = useSelector((state) => state.seller);
  const [conversation, setConversation] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${server}/conversation/get-all-conversation-seller/${seller._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setConversation(res.data.conversations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seller._id]);

  return (
    <div className="no-scrollbar m-3 h-[82vh] w-[90%] overflow-y-scroll rounded bg-white">
      {/* all messages list */}
      {!open && (
        <>
          <h1 className="py-4 text-center font-Poppins text-2xl font-semibold">
            All Messages
          </h1>
          {conversation &&
            conversation.map((item, index) => (
              <MessageList
                key={index}
                data={item}
                index={index}
                setOpen={setOpen}
              />
            ))}
        </>
      )}

      {open && <SellerInbox setOpen={setOpen} />}
    </div>
  );
}

const MessageList = ({ data, index, setOpen }) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`?${id}`);
    setOpen(true);
  };

  return (
    <div
      className={`flex w-full cursor-pointer p-2 px-3 ${
        active === index ? "bg-gray-300" : "bg-transparent"
      }`}
      onClick={() => setActive(index) || handleClick(data._id)}
    >
      <div className="relative">
        <img
          className="h-12 w-12 flex-shrink-0 rounded-full"
          src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png"
          alt="User Avatar"
        />
        <span className="absolute left-8 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
      </div>
      <div className="pl-3">
        <h1 className="text-lg">Hamaad Afzal</h1>
        <p className="text-[#000c]">You: Yeah, Im good</p>
      </div>
    </div>
  );
};

const SellerInbox = ({ setOpen }) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      {/* message header */}
      <div className="flex w-full items-center justify-between bg-slate-200 p-4">
        <div className="flex items-center">
          <img
            src="http://localhost:8000/1722916535316images%20(2).jpeg"
            className="h-12 w-12 rounded-full"
            alt="User Avatar"
          />
          <div className="pl-3">
            <h1 className="text-lg font-semibold">Hamaad Afzal</h1>
            <p>Active now</p>
          </div>
        </div>
        <div>
          <AiOutlineArrowRight
            size={20}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>

      {/* messages */}
      <div className="no-scrollbar h-[55vh] overflow-y-scroll p-4">
        <div className="flex items-center gap-2">
          <img
            src="http://localhost:8000/1722916535316images%20(2).jpeg"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="h-max w-max rounded bg-green-500 px-3 py-2 text-white">
            Hello guys!
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <div className="h-max w-max rounded bg-green-500 px-3 py-2 text-white">
            Hello guys!
          </div>
        </div>
      </div>

      {/* send message input */}
      <form className="relative flex items-center justify-between p-4">
        <input
          type="text"
          placeholder="Enter your message..."
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
        <button
          type="submit"
          className="absolute right-4 cursor-pointer bg-green-600 px-4 py-3 text-white"
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default DashBoardMessages;
