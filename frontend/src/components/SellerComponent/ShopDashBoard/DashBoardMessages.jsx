function DashBoardMessages() {
  return (
    <div className="no-scrollbar m-3 h-[82vh] w-[90%] overflow-y-scroll rounded bg-white">
      <h1 className="py-4 text-center font-Poppins text-2xl font-semibold">
        All Messages
      </h1>

      {/* all messages list */}
      <MessageList />
    </div>
  );
}

const MessageList = () => {
  return (
    <>
      <div className="flex w-full bg-gray-300 p-2 px-3">
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
          <p className="text-[#000c]">{"You: Yeah, I'm good"}</p>
        </div>
      </div>
    </>
  );
};

export default DashBoardMessages;
