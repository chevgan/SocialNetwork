import './App.css';
import './index.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import store, {addPost, updateNewPostText} from "./redux/stor";
import DialogsContainer from "./components/Dialogs/DialogsContauner";


const App = (props) => {
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>

                    <Navbar/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/dialogs' element={<DialogsContainer />}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
    );
}
export default App;
