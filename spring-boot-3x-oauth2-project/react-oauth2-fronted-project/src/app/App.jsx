import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../contants/index';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadCurrentlyLoggedInUser = () => {
        getCurrentUser()
            .then(response => {
                setCurrentUser(response);
                setAuthenticated(true);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false);
        setCurrentUser(null);
        Alert.success("You're safely logged out!");
    };

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <>
        <div className="app">
            <div className="app-top-box">
                <AppHeader authenticated={authenticated} onLogout={handleLogout} />
            </div>
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

                    <Route element={<PrivateRoute authenticated={authenticated}/>}>
                        <Route path="/profile" element={<Profile currentUser={currentUser} />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Alert
                stack={{ limit: 3 }}
                timeout={3000}
                position="top-right"
                effect="slide"
                offset={65}
            />
        </div>
        </>
    );
};

export default App;
