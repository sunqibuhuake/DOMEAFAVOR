/**
 * Created by sunqi on 2018/6/22.
 */
import React from 'react'
import intro_img from './assets/intro.png'
import start from './assets/start.png'
import helper from '../../utils/helper'
export default function(props) {

    function handleClick() {
        helper.btnVoice()
        props.changeGameStatus('START');
    }
    const styles = {
        panel : {
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0
        },
        btn: {
            position: 'absolute',
            height: '10%',
            bottom: '3%',
            width: '30%',
            left: '35%',
            zIndex: 9,
        }
    }
    return (
        <div className="intor-box">
            <img style={styles.panel} src={intro_img}></img>
            <div
                style={styles.btn}
                src={start}
                onClick={handleClick}
            ></div>
        </div>
    )
}