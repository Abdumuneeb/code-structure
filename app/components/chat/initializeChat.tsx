"use client";

import { useEffect } from "react";
import { startChat } from "./chat";

const InitializeChat = () => {
  useEffect(() => {
    startChat();
  }, []);
  return <></>;
};

export default InitializeChat;
