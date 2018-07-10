import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../HomePage'

import './style.css'
import './animate.css'



export default function App(props) {
    return (
        <Home {...props}></Home>
    );
}
