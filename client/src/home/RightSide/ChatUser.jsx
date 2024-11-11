import React from 'react'

function ChatUser() {
    return (
        <div className=' h-[8vh] flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300 cursor-pointer' >
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1  className='text-xl' >Alkab Rza</h1>
                <span className='text-sm' >Offline</span>
            </div>
        </div>
    )
}

export default ChatUser
