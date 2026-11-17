import { useContext } from "react";
import { ModeContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  function isRegister() {
    if (username.trim() && password.trim() && email.trim()) {
      setIsLoggedIn(true);
      navigate("/");
    }
  }

  const {
    username,
    setUsername,
    setPassword,
    password,
    email,
    setEmail,
    setIsLoggedIn,
  } = useContext(ModeContext);
  console.log(username);
  console.log(password);
  console.log(email);
  return (
    <div className="w-[450px] h-[450px] bg-black/50 rounded-4xl mx-auto  ">
      <h2 className="font-bold text-black text-[20px] text-center mt-2 ">
        გთხოვთ გაიაროთ რეგისტრაცია
      </h2>
      <div className=" flex  flex-col items-center   justify-center mt-5 gap-5     ">
        <input
          onChange={(event) => setUsername(event.target.value)}
          className="border rounded-2xl  font-bold text-white  px-2.5 w-[300px] h-[30px]  "
          type="text"
          placeholder="username"
          value={username}
        />

        <input
          onChange={(event) => setPassword(event.target.value)}
          className="border rounded-2xl  font-bold text-white  px-2.5 w-[300px] h-[30px] "
          type="password"
          placeholder="Password"
          value={password}
        />

        <input
          onChange={(event) => setEmail(event.target.value)}
          className="border rounded-2xl  font-bold text-white  px-2.5 w-[300px] h-[30px]"
          type="text"
          placeholder="@email"
          value={email}
        />
        <p className="text-white font-bold text-center ">
          შემოუერთდი GeoLab DevHub-ს და დაიწყე შენი განვითარება!
        </p>

        <button
          onClick={isRegister}
          className="w-[145px] h-[45px] bg-gray-600 rounded-2xl text-white font-bold"
        >
          რეგისტრაცია
        </button>
      </div>
    </div>
  );
};

export default Register;
