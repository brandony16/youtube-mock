import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/firebaseConfig";
import HomePage from "./pages/HomePage";
import "./styles/GlobalStyles.css";
import { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";

function App() {
  const [user, setUser] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage user={user} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />}/>
        <Route path="/search/:keyword" element={<SearchPage user={user} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />} />
        <Route path="/watch/:videoId" element={<VideoPage user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
