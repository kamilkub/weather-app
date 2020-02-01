import React from 'react';
import SideBar from './bar/SideBar'
import BasicLayout from './viewer/BasicLayout';
import TodayLayout from './viewer/TodayLayout';
import FiveDayLayout from './viewer/FiveDayLayout';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

export default function App() {

    const [weatherData, setWeatherData] = React.useState();
    const [isDataSet, setTo] = React.useState(false);

 

    function changeWeatherData(childData) {
        setWeatherData(childData);
        setTo(true);
    }



    return (
<Router>
    <div className="content">
        <SideBar isAvailable={isDataSet} />
        <Switch>
           <Route exact path="/">
           <BasicLayout callBackMethod={changeWeatherData} />
           </Route>
           <Route path="/today">
           <TodayLayout data={weatherData} />
           </Route>
           <Route path="/five-day">
           <FiveDayLayout data={weatherData} />
           </Route>
           </Switch>
    </div>
</Router>
   
    );

}