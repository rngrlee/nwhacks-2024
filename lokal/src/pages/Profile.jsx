import './Styles.css';
import './Profile.css';

const Profile = ({ picture, name, star }) => {

    return (
        <>
            <h1 className="title">Profile</h1>
            <div className="horizontal-align">
                <img src={picture} alt="Profile" className="profile-image" />
                <div className='horizontal-child'>
                    <h4 className="profile-name">{name}</h4>
                    <button className='change-photo'>Change Photo</button> <br />
                    ★ {star}/5
                </div>
            </div>

            <br></br>
            <button className='top-buttons'><i class="fa fa-question-circle-o fa-2x"></i><br />Get Help</button>
            <button className='top-buttons'><i class="fa fa-star fa-2x"></i><br />Reviews</button>
            <button className='top-buttons'><i class="fa fa-newspaper fa-2x"></i><br />Activity</button>

            <h3>Settings</h3>
            <button className='bottom-buttons'><i class="fa fa-user"></i> Personal Information</button> <br />
            <button className='bottom-buttons'><i class="fa-solid fa-shield"></i> Login & Security</button> <br />
            <button className='bottom-buttons'><i class="fa-solid fa-gear"></i> Accessiblity</button> <br />
            <button className='bottom-buttons'><i class="fa-solid fa-bell"></i> Notifications</button> <br />
            <button className='bottom-buttons'><i class="fa-solid fa-lock"></i> Privacy & Sharing</button> <br />
            <h3>Legal</h3>
            <button className='bottom-buttons'><i class="fa-solid fa-book-open"></i> Terms of Service</button> <br />
            <button className='bottom-buttons'><i class="fa-solid fa-book-open"></i> Privacy Policy </button> <br />
        </>
    )
}

export default Profile