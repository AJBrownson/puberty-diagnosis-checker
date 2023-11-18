import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
// import { ClerkProvider } from "@clerk/clerk-react";

// // eslint-disable-next-line no-undef
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ClerkProvider publishableKey={clerkPubKey}> */}
      <App />
    {/* </ClerkProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
