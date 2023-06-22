import "./LoginStyles.css";

function Login() {
  return (
    <div className="login-container">
      <h1>Log In</h1>
      <form>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Log In</button>
        <button>Forgot Password?</button>
      </form>
    </div>
  );
}
export default Login;
