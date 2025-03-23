import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { PiChatCircleTextLight } from 'react-icons/pi';
import { ChatList } from '../navigationComponents/ChatList';
import Profile from '../navigationComponents/Profile';

const Navigation = () => {
  return (
    <TabGroup manual className="flex h-screen transition-all duration-300">
      {/* Sidebar */}
      <TabList className="flex flex-col w-16 mx-auto bg-[#F9FAFB] text-[#1F2937] items-center shadow-lg">
        <Tab className="cursor-pointer flex items-center justify-center w-full h-12 focus:outline-none hover:bg-[#E5E7EB] transition">
          <PiChatCircleTextLight size={30} className="text-[#3B82F6]" />
        </Tab>
        <Tab className="flex items-center justify-center cursor-pointer w-full h-12 focus:outline-none hover:bg-[#E5E7EB] transition">
          <img
            src="Profile.jpg"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#3B82F6]"
          />
        </Tab>
      </TabList>

      {/* Main Content */}
      <TabPanels className="w-96 bg-white text-[#1F2937] shadow-md">
        <TabPanel>
          <ChatList />
        </TabPanel>
        <TabPanel>
          <Profile />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default Navigation;