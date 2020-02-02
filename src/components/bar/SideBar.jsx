import React from 'react';
import LiComponent from './list_components/LiComponent.jsx';
import TopHeader from './TopHeader';

export default function SideBar(props) {

    return (
     
        <div className="sidebar">
            <TopHeader />
            <ul>
                <LiComponent text="Search" redirect="/"/>
                <LiComponent text="Today" redirect="/today"/>
                <LiComponent text="5 day forecast" redirect="/five-day"/>
            </ul>
        </div>
    )
}