import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { useState } from 'react';

const Sidebar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGroup = () => {
      setIsModalOpen(true); 
  };

  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <Conversations />
        <div className='divider px-3'></div>
      <LogoutButton />
    </div>
  )

}

export default Sidebar
