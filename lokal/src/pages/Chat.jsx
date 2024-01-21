import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar"
import messageService from '../services/messages'
import '../../chat.css'

const Chat = () => {

    const [messages, setMessages] = useState([])

    const getMessages =  () => {
        const returnedMessages =  messageService.getAll().then((res) => setMessages(returnedMessages))
        console.log(returnedMessages, 'returned')
        // setMessages(returnedMessages)
    }

    useEffect(() => {
        getMessages()
    }, [])
    
    return (
        <>
            <div>
                <h3 className="name">Ranger Lee</h3>
                <h4 className='active'>Active 3 mins ago</h4>
                <div className='msg-container'>
                    <div className='time time-1'>Mon, Aug 16 2023 at 8:54 PM</div>
                    <div className='first-msg'>
                    Are you still looking for a caretaker? I have a couple plants of my own and can be available in your requested time frame :)
                    </div>
                    <div className='time'>9:41 PM</div>
                    <div className='second-msg'>
                        Hi Ranger, yes I am still looking. Can you give me a quick call at 604-333-7874 sometime tomorrow?
                    </div>
                    <div className='message-bar'>
                        <input className='message-input'type="text" placeholder='   Message...' />
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Chat;
