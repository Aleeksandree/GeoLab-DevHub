import { createContext, useState } from "react";

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [light, setLight] = useState(false);
  function swichMode() {
    setLight((prev) => !prev);
  }
  function changeCount() {
    setCount((prev) => prev + 1);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <ModeContext.Provider
      value={{
        changeCount,
        setCount,
        count,
        light,
        setLight,
        swichMode,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}
