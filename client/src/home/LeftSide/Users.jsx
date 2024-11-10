import React from 'react'
import User from './User'
import '../../index.css'

function Users() {
    return (
        <div className='flex-1' >
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>Message</h1>
            <div className=" overflow-y-auto" style={{
                maxHeight: "calc(84vh - 10vh)", scrollbarWidth: "none",
                msOverflowStyle: "none"
            }}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )
}

export default Users
