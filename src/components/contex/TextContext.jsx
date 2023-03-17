import { createContext, useState } from "react";

export const TextContext = createContext();

const TextContextProvider = ({ children }) => {
  const [text, setText] = useState("Kirish");
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextContextProvider;
