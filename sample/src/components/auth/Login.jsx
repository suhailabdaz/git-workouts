import './Login.css'

const Login = () => {
  return (
    <div className='container'>
      <form>
        <div>
          <label htmlFor="">Name:</label>
        <input type="text" />
        </div>
        <div>
          <label htmlFor="">password:</label>
          <input type="password" />
        </div>
      </form>
    </div>
  )
}

export default Login