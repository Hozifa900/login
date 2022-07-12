import React from "react";
import { createContext, useState } from "react";
import App from "../App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState({});
  const [showSignup, setShowSignup] = useState(false);
  const [loader, setLoader] = useState("none");
  return (
    <DataContext.Provider
      value={[user, setUser, showSignup, setShowSignup, loader, setLoader]}
    >
      <App />
    </DataContext.Provider>
  );
};
