import { createContext, useState } from "react";

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [light, setLight] = useState(false);
  function swichMode() {
    setLight((prev) => !prev);
  }

  return (
    <ModeContext.Provider value={{ light, setLight, swichMode }}>
      {children}
    </ModeContext.Provider>
  );
}
