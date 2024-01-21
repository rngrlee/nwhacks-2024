export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/home">
                        <i className="fa-solid fa-house fa-2x"></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/inbox"><i className="fa-regular fa-message fa-2x"></i>Inbox</a>
                </li>
                <li>
                    <a href="/add"><i className="fa-regular fa-square-plus fa-2x"></i>Add</a>
                </li>
                <li>
                    <a href="/listings"><i className="fa-regular fa-rectangle-list fa-2x"></i>Listings</a>
                </li>
                <li>
                    <a href="/profile"><i className="fa-regular fa-user fa-2x"></i>Profile</a>
                </li>
            </ul>
        </nav>
    )
}