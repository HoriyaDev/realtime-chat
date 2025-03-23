import React from "react";
import { IoCall, IoVideocam } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const ChatWindow = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#F9FAFB] text-[#1F2937] flex items-center justify-between p-3 shadow-md">
        {/* Left Side (Profile + Name) */}
        <div className="flex items-center gap-3">
          <img
            src="Profile.jpg"
            className="w-12 h-12 border-2 border-[#3B82F6] rounded-full object-cover"
          />
          <h1 className="text-lg font-semibold">John Doe</h1>
        </div>

        {/* Right Side (Icons) */}
        <div className="flex items-center gap-3">
          <IoCall size={24} className="hover:text-[#60A5FA] cursor-pointer transition" />
          <IoVideocam size={24} className="hover:text-[#60A5FA] cursor-pointer transition" />
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-grow bg-white p-4 overflow-y-auto">
        {/* Messages */}
        <div className="mb-3">
          <p className="bg-[#F3F4F6] text-[#1F2937] px-4 py-2 rounded-lg shadow-md max-w-[75%]">
            Hey! How are you?
          </p>
        </div>
        <div className="flex justify-end mb-3">
          <p className="bg-[#3B82F6] text-white px-4 py-2 rounded-lg shadow-md max-w-[75%]">
            I'm good! What about you?
          </p>
        </div>
      </div>

      {/* Input Field */}
      <div className="flex items-center p-3 bg-[#F9FAFB] shadow-md">
        <input
          type="text"
          className="p-2 w-full border border-[#D1D5DB] rounded-full focus:ring-2 focus:ring-[#3B82F6] outline-none bg-white text-[#1F2937]"
          placeholder="Type a message..."
        />
        <button className="p-3 bg-[#3B82F6] text-white rounded-full ml-3 hover:bg-[#60A5FA] transition">
          <IoMdSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;