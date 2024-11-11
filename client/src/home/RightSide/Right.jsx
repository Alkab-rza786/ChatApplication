import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'
import Typesend from './Typesend'




function Right() {
  return (
    <div className='w-[70%] text-gray-300 bg-slate-900' >
       <ChatUser/>
       <div className='overflow-y-auto flex-1' style={{maxHeight:"calc(92vh - 8vh)"}} >
       <Message/>
       </div>
       <Typesend/>
    </div>
  )
}

export default Right
