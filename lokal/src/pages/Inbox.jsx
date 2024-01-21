import Navbar from "../Navbar"

export default function Add() {

    return (
        <>
            <div class="chat-container">
                <ul class="chat-list">
                    <li class="chat-item">
                        <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 1" class="profile-image"></img>
                        <span class="chat-name">Alice</span>
                    </li>
                    <li class="chat-item">
                        <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 2" class="profile-image"></img>
                        <span class="chat-name">Bob</span>
                    </li>
                </ul>
                
            </div>
            <Navbar />
        </>

        /* // <div>
        //     <h1 className="title">Inbox (1)</h1>
        //     <ul class="chats">
        //         <li>
        //             <img src='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg' alt="Profile" className="chat-profile" />
        //             <a href="/chat">Ranger Lee</a>
        //         </li>
        //         <li></li>

        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        //     <Navbar />
        // </div> */
    )
}