export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/inbox">Inbox</a>
                </li>
                <li>
                    <a href="/add">Add</a>
                </li>
                <li>
                    <a href="/listings">Listings</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    )
}