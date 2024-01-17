import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import HomePage from './pages/HomePage';
import HomeView from './pages/connected/HomeView';
import Login from './pages/LogIn';
import Profile from './pages/connected/Profile';
import Discover from './pages/connected/Discover';
import ChatView from './pages/connected/ChatView';
import Settings from './pages/connected/Settings';
import Search from './pages/connected/Search';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_xaXDa2TdR8U3tcOIra65huNhB4VPCQE",
  authDomain: "peak-out-2023.firebaseapp.com",
  databaseURL: "https://peak-out-2023-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "peak-out-2023",
  storageBucket: "peak-out-2023.appspot.com",
  messagingSenderId: "431135230485",
  appId: "1:431135230485:web:36e50f165b1b8b4fa49c1c",
  measurementId: "G-431XPY2LXC"
};

try {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signOut",
    element: <SignOut />,
  },
  {
    path: "/app",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/chatView",
    element: <ChatView />,
  },
  {
    path: "/settings",
    element: <Settings />,
    element: <Settings />,
  },
  {
    path: "/search",
    element: <Search />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//export const auth = getAuth(app);