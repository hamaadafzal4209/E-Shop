/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { server } from "../../../server";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import socketIO from "socket.io-client";
const ENDPOINT = "https://localhost:6000";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

function DashBoardMessages() {
  const { user } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);
  const [conversation, setConversation] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);
  const [images, setImages] = useState();
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const resonse = await axios.get(
          `${server}/conversation/get-all-conversation-seller/${seller?._id}`,
          {
            withCredentials: true,
          },
        );

        setConversation(resonse.data.conversations);
      } catch (error) {
        // console.log(error);
      }
    };
    getConversation();
  }, [seller, messages]);

  useEffect(() => {
    if (seller) {
      const sellerId = seller?._id;
      socketId.emit("addUser", sellerId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [seller]);

  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== seller?._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);

    return online ? true : false;
  };

  // get messages
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get(
          `${server}/message/get-all-messages/${currentChat?._id}`,
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [currentChat]);

  // create new message
  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const message = {
      sender: seller._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member.id !== seller._id,
    );

    socketId.emit("sendMessage", {
      senderId: seller._id,
      receiverId,
      text: newMessage,
    });

    try {
      if (newMessage !== "") {
        await axios
          .post(`${server}/message/create-new-message`, message)
          .then((res) => {
            setMessages([...messages, res.data.message]);
            updateLastMessage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateLastMessage = async () => {
    socketId.emit("updateLastMessage", {
      lastMessage: newMessage,
      lastMessageId: seller._id,
    });

    await axios
      .put(`${server}/conversation/update-last-message/${currentChat._id}`, {
        lastMessage: newMessage,
        lastMessageId: seller._id,
      })
      .then((res) => {
        console.log(res.data.conversation);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                setCurrentChat={setCurrentChat}
                me={seller._id}
                setUserData={setUserData}
                userData={userData}
                online={onlineCheck(item)}
                setActiveStatus={setActiveStatus}
              />
            ))}
        </>
      )}

      {open && (
        <SellerInbox
          setOpen={setOpen}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessageHandler={sendMessageHandler}
          messages={messages}
          sellerId={seller._id}
          userData={userData}
          activeStatus={activeStatus}
          scrollRef={scrollRef}
          setMessages={setMessages}
        />
      )}
    </div>
  );
}

const MessageList = ({
  data,
  index,
  setOpen,
  setCurrentChat,
  me,
  setUserData,
  online,
  setActiveStatus,
  isLoading,
}) => {
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
      onClick={() =>
        setActive(index) ||
        handleClick(data._id) ||
        setCurrentChat(data) ||
        setUserData(user) ||
        setActiveStatus(online)
      }
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

const SellerInbox = ({
  scrollRef,
  setOpen,
  newMessage,
  setNewMessage,
  sendMessageHandler,
  messages,
  sellerId,
  userData,
  activeStatus,
}) => {
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
            Hello there!
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <div className="h-max w-max rounded bg-green-500 px-3 py-2 text-white">
            Hi
          </div>
        </div>
      </div>

      {/* send message input */}
      <form className="relative flex items-center justify-between gap-3 p-4">
        <IoImagesOutline size={24} />
        <input
          type="text"
          placeholder="Enter your message..."
          required
          className="w-full rounded-md border border-gray-300 p-2"
        />
        <button
          onClick={sendMessageHandler}
          type="button"
          className="absolute right-4 cursor-pointer bg-green-600 px-4 py-3 text-white"
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default DashBoardMessages;
