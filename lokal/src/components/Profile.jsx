import './css/Styles.css';
import './css/Profile.css';

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
            <button className='top-buttons'>Get Help</button>
            <button className='top-buttons'>Reviews</button>
            <button className='top-buttons'>Activity</button>

            <h2>Settings</h2>
            <button>Personal Information</button> <br />
            <button>Login & Security</button> <br />
            <button>Accessiblity</button> <br />
            <button>Notifications</button> <br />
            <button>Privacy & Sharing</button> <br />
            <h2>Legal</h2>
            <button>Terms of Service</button> <br />
            <button>Privacy Policy</button> <br />
        </>
    )
}

export default Profile