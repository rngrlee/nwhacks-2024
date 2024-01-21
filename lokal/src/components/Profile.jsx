const Profile = ({ picture, name }) => {

    return (
        <>
            <h1>Profile</h1>
            <img src={picture} alt="" />
            <h3>{name}</h3>
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