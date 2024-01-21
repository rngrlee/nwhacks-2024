import { useState } from 'react'
import postService from './services/posts'
import loginService from './services/login'
import Profile from './components/Profile'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

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

  const loginForm = () => (
    <>
    <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          password
          <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type="submit">login</button>
      </form>
    </>      
  )



  return (
    <>
      <div>
      {user === null
        ? loginForm()
        : <Profile picture='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg'/>}
      </div>
    </>
  )
}

export default App
