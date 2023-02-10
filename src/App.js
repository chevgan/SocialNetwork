import './App.css';
import './index.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Fab} from "@mui/material";
import Friends from "./components/Friends/Friends";
import sidebarReducer from "./redux/sidebar-reducer";


const App = () => {
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Friends />
                    <Navbar/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/dialogs' element={<DialogsContainer />}/>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
    );
}
export default App;
