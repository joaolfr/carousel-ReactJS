import React from 'react'
import { Switch, Route, HashRouter } from "react-router-dom";
import {Home, Detail} from '../screens'

const Router = () => (

    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
        </Switch>
    </HashRouter>


)
export default Router