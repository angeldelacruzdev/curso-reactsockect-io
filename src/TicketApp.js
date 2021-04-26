import React from "react";
import { RouterPage } from "./components/pages/RouterPage";
import { UiProvider } from "./context/UIContext";

export const TicketApp = () => {
  return (
    <>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </>
  );
};
