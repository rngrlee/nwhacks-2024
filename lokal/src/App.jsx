import Navbar from "./Navbar";
import Home from "./pages/Home"
import Inbox from "./pages/Inbox"
import Listings from "./pages/Listings"
import Post from "./pages/Post"
import Profile from "./pages/Profile"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/inbox":
      component = <Inbox />
      break
    case "/add":
      component = <Add />
      break
    case "/listings":
      component = <Listings />
      break
    case "/profile":
      component = <Profile />
      break
  }
  return (
    <>
      {component}
      <Navbar />
    </>
  );
}

export default App;