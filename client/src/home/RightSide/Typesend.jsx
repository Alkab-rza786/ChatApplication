import React from 'react'
import { IoSend } from "react-icons/io5";

function Typesend() {
    return (
        <div className='flex  h-[8vh] text-center bg-gray-800 '>
            <div className='w-[70%] mx-4' >
                <input type="text" placeholder="Type here" className="input border border-gray-900 outline-none px-4 py-3 bg-gray-900 w-full rounded-xl mt-1" />
            </div>
            <button>
                <IoSend className='text-5xl hover:bg-green-400 rounded-full p-2 ' />
            </button >
        </div>
    )
}

export default Typesend
