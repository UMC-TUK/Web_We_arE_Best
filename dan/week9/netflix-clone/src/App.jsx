import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage';
import ContentsPage from './page/ContentsPage';
import LoginPage from './page/LoginPage';
import JoinPage from './page/JoinPage';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/"element={<MainPage />} />
    <Route path = "/contents"element = {<ContentsPage/>}/>
    <Route path = "/login" element = {<LoginPage/>}/>
    <Route path = "/join" element = {<JoinPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
