import React from 'react'
import { BiSend } from 'react-icons/bi'

function ChatInput() {
    return (
        <div className='flex gap-2'>
            <input type="text" placeholder='Enter your Doubt' className='border-2 border-black rounded-lg w-[50rem] p-5'/>
                <BiSend size={70} className='border-2 border-black rounded-xl'/>
        </div>
    )
}

export default ChatInput
