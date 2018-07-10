/**
 * Created by sunqi on 2018/6/21.
 */
import Football from './assets/soccer.svg'

import React from 'react'

import './style.css'
export default function(props) {


    return (
        <div className="loadingContainer">
            <img className="animated infinite bounce" style={{width: 120}} src={Football}/>
        </div>
    )

}
