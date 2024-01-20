const Profile = ({ picture, name, bday, email, location, bio }) => {

    return (
        <>
            {picture}
            <h3>{name}</h3>
            DOB: {bday} <br />
            email: {email} <br />
            location: {location} <br />
            bio: {bio} <br />
        </>
    )
}

export default Profile