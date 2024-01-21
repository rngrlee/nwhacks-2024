import Navbar from "../Navbar"

export default function Add() {

    return (
        <div>
            <h1 className="title">Inbox (1)</h1>
            <ul class="chats">
                <li>
                    <img src='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg' alt="Profile" className="profile-image" />
                    <a href="/chat">Ranger Lee</a>
                </li>
            </ul>
            <Navbar />
        </div>
    )
}
