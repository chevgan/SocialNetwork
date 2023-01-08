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


const App = (props) => {
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Friends friendsNavBar={props.friendsNavBar}/>
                    <Navbar/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                            <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs}
                                                                     messages={props.messages}/>}/>

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
