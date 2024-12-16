import React, { FC } from 'react';


interface headerProps {
  threadCreateClick?: () => void;
}

const header: FC<headerProps> = ({threadCreateClick}) => (
  
  <header className="w-full border-b">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" className="text-xl font-bold hover:text-blue-600" >React掲示板</a>
      <a onClick={threadCreateClick} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">スレッドを建てる</a>
    </div>
  </header>
);

export default header;