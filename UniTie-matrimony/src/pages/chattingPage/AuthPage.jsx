import axios from "axios";
import { useSelector } from "react-redux";
const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const { value } = e.target[0];
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: value, secret: value, first_name: value },
        { headers: { "PRIVATE-KEY": "a15c91e1-7b3d-4225-964f-d7d6cf7b18c3" } }
      );
      console.log(r);
      props.onAuth({ ...r.data, secret: value });
    } catch (e) {
      console.log(e);
    }
  };
  const isDarkMode1 = useSelector((state) => state.mode === "dark");
  return (
    <div className="chat-body">
      <form
        onSubmit={onSubmit}
        className={`chat-form-card ${isDarkMode1 ? "chat-form-card1" : ""}`}
      >
        <div className="chat-form-title">Welcome 👋</div>
        <div className="chat-form-subtitle">Set a username to get started</div>
        <div className="chat-auth">
          <div className="chat-auth-label">Username</div>
          <input className="chat-auth-input" name="username" />
          <button className="chat-auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
