import Navbar from "./Navbar";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Inbox from "./pages/Inbox"
import Add from "./pages/Add"
import Listings from "./pages/Listings"
import Profile from "./pages/Profile"

function App() {
  let component

  switch (window.location.pathname) {
    case "/":
      component = <Login />
      break
    case "/home":
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
    </>
  );
}

export default App;


// {user === null
//   ? <LoginForm
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       handleLogin={handleLogin}
//     />
//   : <Profile picture='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg' name="LeBron James"/>
// }