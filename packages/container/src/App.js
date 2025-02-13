import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { MarketingApp } from './components/MarketingApp';
import { Header } from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                {/* <h2>
                    Welcome to Dashboard!
                </h2> */}
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
}
