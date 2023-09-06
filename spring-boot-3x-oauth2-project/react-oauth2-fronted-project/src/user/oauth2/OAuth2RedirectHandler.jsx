import React, {useEffect} from 'react';
import {ACCESS_TOKEN} from '../../contants/index';
import {useLocation, Navigate} from 'react-router-dom';

const OAuth2RedirectHandler = () => {
    const location = useLocation();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    useEffect(() => {
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
        }
    }, []);


    return (
        <>
            {token ? <Navigate to="/" state={{from: location.pathname}}/> :
                <Navigate to="/" state={{from: location.pathname, error: error}}/>
            }
        </>
    );
};

export default OAuth2RedirectHandler;
