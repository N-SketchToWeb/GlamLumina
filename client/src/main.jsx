// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from "react-router-dom"
// import ShopContextProvider from './context/ShopContext.jsx'

// createRoot(document.getElementById('root')).render(
// <BrowserRouter>
//   <ShopContextProvider>
//   <App />
//   </ShopContextProvider>
// </BrowserRouter>
// )



import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter> {/* Change from BrowserRouter to HashRouter */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
);
