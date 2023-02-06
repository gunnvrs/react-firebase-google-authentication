import "./App.css";
import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <googleinname>{localStorage.getItem("name")}</googleinname>
      <googleinemail>{localStorage.getItem("email")}</googleinemail>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  );
}

export default App;
