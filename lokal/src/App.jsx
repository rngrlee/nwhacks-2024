import Navbar from "./Navbar";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Inbox from "./pages/Inbox"
import Chat from "./pages/Chat"
import Add from "./pages/Add"
import Listings2 from "./pages/Listings2"
import Listings3 from "./pages/Listings3"
import Listings4 from "./pages/Listings4"
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
    case "/chat":
      component = <Chat />
      break
    case "/add":
      component = <Add />
      break
    case "/listings":
      component = <Listings />
      break
    case "/listings2":
      component = <Listings2 />
      break 
    case "/listings3":
      component = <Listings3 />
      break
    case "/listings4":
      component = <Listings4 />
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