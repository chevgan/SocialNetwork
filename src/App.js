import './App.css';
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Friends />
                    <Navbar/>
                    <div className="app-content">
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                            <Route path='/dialogs' element={<DialogsContainer />}/>
                            <Route path='/users' element={<UsersContainer />}/>
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
    );
}
export default App;
