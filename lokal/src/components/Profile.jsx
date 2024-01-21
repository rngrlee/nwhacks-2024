import './css/Styles.css';
import './css/Profile.css';

const Profile = ({ picture, name }) => {

    return (
        <>
            <h1 className="title">Profile</h1>
            <div class="horizontal-align">
                <img src={picture} alt="Profile" className="profile-image" />
                <h4 className="profile-name">{name}</h4>
            </div>

            <br></br>
            <button>Get Help</button>
            <button>Reviews</button>
            <button>Activity</button>

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