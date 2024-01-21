import Navbar from "../Navbar"

export default function Add() {

    return (
        <>
        <div className="component">
            <h1 className="title">Inbox (1)</h1>
            <div className="chat-container">
                <a href="/chat">
                    <div className="chat-item">
                        <img src="https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg" alt="Profile 1" class="profile-image"></img>
                        <h4>Ranger Lee</h4>
                        <p>asdkjhaskdjhaskjdashkjahkjda</p>
                    </div>
                </a>
            </div>
        </div>
        <Navbar />
        </>
    )
}