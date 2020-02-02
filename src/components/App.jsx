import React from 'react';
import SideBar from './bar/SideBar'
import BasicLayout from './viewer/BasicLayout';
import TodayLayout from './viewer/TodayLayout';
import FiveDayLayout from './viewer/FiveDayLayout';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

export default function App() {

return (
        <Router>
            <div className="content">
                <SideBar />
            <Switch>
                <Route exact path="/">
                    <BasicLayout />
                </Route>
                <Route path="/today" name="todayLayout" component={TodayLayout} />
                <Route path="/five-day">
                    <FiveDayLayout />
                </Route>
           </Switch>
            </div>
        </Router>);

}