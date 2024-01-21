import { useEffect, useState } from "react"
import loginService from '../services/login'

const Login = () => {
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
        // <a href="/home" />
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
    );
  };
  
  export default Login;
  