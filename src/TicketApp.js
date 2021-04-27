import React from "react";
import { RouterPage } from "./components/pages/RouterPage";
import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UIContext";

export const TicketApp = () => {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </SocketProvider>
    </>
  );
};
