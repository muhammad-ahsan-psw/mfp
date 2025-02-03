import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import {Landing} from './components/Landing'
import {Pricing} from './components/Pricing'
import {NotFound} from './components/NotFound'

export default() => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} /> {/* Exact match for home */}
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route exact path="/landing" component={Landing}/>
                        <Route component={NotFound} /> {/* Fallback for 404 */}
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
