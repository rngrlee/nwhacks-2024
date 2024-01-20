import { useState } from 'react'
import postService from './services/posts'
import loginService from './services/login'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [user, setUser] = useState('')
  //const [errorMessage, setErrorMessage] = useState('')

  // const handleLogin = async (event) => {
  //   event.preventDefault()

  //   try {
  //     const user = await loginService.login({
  //       username, password
  //     })

  //     window.localStorage.setItem(
  //       'loggedAppUser', JSON.stringify(user)
  //     )
  //     postService.setToken(user.token)
  //     setUser(user)
  //     setUsername('')
  //     setPassword('')
  //   } catch (exception) {
  //     setErrorMessage('Wrong credentials')
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

  const handleLogin = () => {
    axios.post('/login', { user: username, password })
      .then((response) => {
        // Handle the response from the Flask backend here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


//   const loginForm = () => (
//     <>
//     <h2>Log in to application</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           username
//           <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
//         </div>
//         <div>
//           password
//           <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
//         </div>
//         <button type="submit">login</button>
//       </form>
//     </>      
//   )



//   return (
//     <>
//       <div>
//         {loginForm()}
//         community
//         <input type='text'></input> 
//         <br></br>
//         <button type='submit'>submit</button>
//       </div>
//     </>
//   )
// }

export default App
