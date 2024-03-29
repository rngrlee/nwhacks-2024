import { useEffect, useState } from "react"
import loginService from './services/login'

import Profile from './components/Profile'

import LoginForm from './components/LoginForm';
import FooterMenu from "./components/Footer";

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      const usernames = user.map(u => u.username)
      const passwords = user.map(u => u.password)

      const equalPos = usernames.indexOf(username) === passwords.indexOf(password)

      if (usernames.includes(username) && passwords.includes(password) && equalPos) {
        window.localStorage.setItem(
          'loggedAppUser', JSON.stringify(user)
        )
        setUser(user)
        setUsername('')
        setPassword('')
        }
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <>
      <div>
      {user === null
        ? <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        : <Profile picture='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg' name="LeBron James"/>
      }
      </div>
      <div>
        <FooterMenu />
      </div>
    </>
  )
}

export default App
