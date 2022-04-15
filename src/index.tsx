import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

// react query has not been updated to react 18 yet
declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
