import Navbar from "../Navbar"

export default function Add() {

    return (
        <>
            <div class="chat-container">
                <div className="chat-item">
                    <h1 className="title">Inbox (1)</h1>
                    <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 1" class="profile-image"></img>
                    <a href="/chat">
                        <p>Ranger Lee</p>
                    </a>
                    <p>asdkjhaskdjhaskjdashkjahkj</p>
                </div>
                <div className="chat-item">
                    <h1 className="title">Inbox (1)</h1>
                    <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 1" class="profile-image"></img>
                    <a href="/chat">Ranger Lee</a>
                    <p>asdkjhaskdjhaskjdashkjahkjdash,skdnas,dkak,asmn</p>
                </div>
                <div className="chat-item">
                    <h1 className="title">Inbox (1)</h1>
                    <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 1" class="profile-image"></img>
                    <a href="/chat">Ranger Lee</a>
                    <p>asdkjhaskdjhaskjdashkjahkjdash,skdnas,dkak,asmn</p>
                </div>
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