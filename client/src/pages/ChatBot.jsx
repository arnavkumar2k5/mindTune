import React from 'react'
import ChatInput from '../components/ChatBotComponents/ChatInput'
import ChatContainer from '../components/ChatBotComponents/ChatContainer'

function ChatBot() {
    return (
        <div className='flex flex-col items-center h-screen bg-gray-300'>
            <div className='h-[80%]'>
            <ChatContainer/>
            </div>
            <div className='h-[15%]'>
            <ChatInput/>
            </div>
        </div>
    )
}

export default ChatBot
