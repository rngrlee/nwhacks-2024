import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar"
import messageService from '../services/messages'
import '../../chat.css'

function Chat() {

    const [messages, setMessages] = useState([])

    const getMessages = async () => {
        const returnedMessages = await messageService.getAll()
        setMessages(returnedMessages)
    }

    useEffect(() => {
        getMessages()
    }, [])
    
    return (
        <>
            <div>
                <h1 className="title">Chat</h1>
                <div className='time'>{messages[0].time}</div>
                <div className='first-msg'>
                    {messages[0].content.slice(7)}
                </div>
                <div className='time'>{messages[1].time}</div>
                <div className='second-msg'>
                    {messages[1].content.slice(7)}
                </div>
                <div className='message-bar'>
                    <input className='message-input'type="text" placeholder='   Message...' />
                </div>
            </div>
            <Navbar />
        </>

    );
}

export default Chat;
