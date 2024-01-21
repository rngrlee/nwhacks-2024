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
        <div className="loginPage">
          <h1 className="loginTitle">LOKAL</h1>
          <form onSubmit={handleLogin}>
            <div className="loginFields">
              <input type="text" value={username} placeholder="Username" name="Username" onChange={({ target }) => setUsername(target.value)} />
              <input type="password" value={password} placeholder="Password" name="Password" onChange={({ target }) => setPassword(target.value)} />
              <button type="submit">Sign In</button>
            </div>
            
            <a id='home' href='/home'></a>
          </form>
        </div>

      </>
    );
  };
  
  export default Login;
  