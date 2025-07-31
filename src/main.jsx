import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/storeConfig.js";
import { PersistGate } from "redux-persist/integration/react";
import { CartState } from "./components/CartState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CartState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartState>
      </PersistGate>
    </Provider>
  </StrictMode>
);
