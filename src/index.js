import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context/Productcontext";
import { FilterContextProvider } from "./Context/Filter_Context";
import { CartProvider } from "./Context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
  domain="dev-rg6qwaqkm235cblf.us.auth0.com"
  clientId="EpxzlgkY6TQtYZ9wkjGo4xroVNVBdfmG"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          {/* /// ye children hai jo context provider me children pass kr rhe hai */}
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
