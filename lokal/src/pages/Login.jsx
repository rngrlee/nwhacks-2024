import { useEffect, useState } from "react"
import loginService from '../services/login'
import '../../login.css'

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
        setUser(user)
        setUsername('')
        setPassword('')
        document.getElementById('home').click()
        }
    } catch (exception) {
    }
  }

    return (
      <>
        <div className="login-wrapper">
          <h2>Log in</h2>
          <form onSubmit={handleLogin} className="login-inputs">
            <div>
              username
              <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
              password
              <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type="submit">login</button>
            <a id='home' href='/home'></a>
          </form>
        </div>
      </>
    );
  };
  
  export default Login;
  