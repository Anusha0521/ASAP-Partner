import "./RegisterFormStyles.css";

function RegisterForm() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Contact Number" />
        <input placeholder="Location" />
        <input placeholder="Password" />
        <button>Submit</button>
        <button>Already Registered? Login here</button>
      </form>
    </div>
  );
}
export default RegisterForm;
