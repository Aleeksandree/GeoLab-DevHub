import { createContext, useState } from "react";

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [light, setLight] = useState(false);
  function swichMode() {
    setLight((prev) => !prev);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ModeContext.Provider
      value={{
        light,
        setLight,
        swichMode,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}
