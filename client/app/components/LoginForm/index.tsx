import { useState, ReactElement } from "react";

type LoginFormProps = {
  onLogin: () => void;
};


const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Replace this with actual authentication logic.
    // For simplicity, we're using hard-coded values here.
    if (username === "user" && password === "password") {
      onLogin(); // Call the callback function to handle the successful login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input type="text" id="username" name="username" value={username} className="border rounded-lg px-3 py-2 w-full" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={password} className="border rounded-lg px-3 py-2 w-full" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="bg-blue-500 text-white rounded-lg px-4 py-2" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
