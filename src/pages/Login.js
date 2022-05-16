import { useState } from "react"
import { LoginLogic } from "authentication/Authentication"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = (form) => {
    form.preventDefault();
    LoginLogic(username, password);
  }

  return (
    <div className='login-page'>
      <div className='login-form'>
        <form onSubmit={submit}>
          <table border='0'>
            <tbody>
              <tr>
                <td>Username: </td>
                <td><input type='text' id='username' value={username} onChange={ (e) => setUsername(e.target.value)} /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type='password' id='password' value={password} onChange={ (e) => setPassword(e.target.value)}/></td>
              </tr>
            </tbody>
          </table>
          <input type='submit' value='Login!' />
        </form>
      </div>
    </div>
  )
}
  
export default LoginPage