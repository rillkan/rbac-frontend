import "../App.css";

const LoginForm = ({ onLogin }) => {
  const handleLogin = (role) => {
    let token = "";

    if (role === "admin") token = "User admin";
    else if (role === "viewer") token = "User vi";
    else if (role === "editor") token = "User ed";

    localStorage.setItem("token", token);
    onLogin(role);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="testing">RBAC Login</h1>

        <button onClick={() => handleLogin("admin")} className="login-btn admin">
          Log in as Admin
        </button>

        <button onClick={() => handleLogin("editor")} className="login-btn editor">
          Log in as Editor
        </button>

        <button onClick={() => handleLogin("viewer")} className="login-btn viewer">
          Log in as Viewer
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
