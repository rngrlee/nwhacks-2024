import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar"
import messageService from '../services/messages'

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
                {
                    messages.map( record => {
                        return(
                            <div className="box">
                                <h4>{ record.sender }</h4>
                                <p>{ record.content }</p>
                            </div>
                        )
                    })
                }
            </div>
            <Navbar />
        </>

    );
}

export default Chat;
