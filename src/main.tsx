import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import App from "./App";

interface RootProviderProps {
  children: React.ReactNode;
}

function RootProvider({ children }: RootProviderProps) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate}>
      {children}
    </HeroUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootProvider>
        <App />
      </RootProvider>
    </BrowserRouter>
  </React.StrictMode>
);
