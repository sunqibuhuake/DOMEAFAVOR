/**
 * Created by sunqi on 2018/6/22.
 */
/**
 * Created by sunqi on 2018/6/22.
 */
import React from 'react'
import panel from './assets/success.png'
import next from './assets/next.png'
import replay from './assets/replay.png'

import helper from '../../utils/helper'
export default function(props) {

    function handleNext() {
        helper.btnVoice()
    }
    function handleReplay() {
        //helper.btnVoice()
        //setTimeout()
        window.location.reload()

    }
    const styles = {
        panel : {
            width: '100%',
            padding: 0,
            margin: 0
        },
        btn1: {
            position: 'absolute',
            height: 56,
            width: 56,
            bottom: '-28px',
            left: '20%'
        },
        btn2: {
            position: 'absolute',
            height: 56,
            width: 56,
            bottom: '-28px',
            right: '20%'
        }
    }
    return (
        <div style={{margin: '120px auto 0', width: '80%', position: 'relative'}}>
            <img style={styles.panel} src={panel}></img>
            <img
                style={styles.btn1}
                src={replay}
                onClick={handleReplay}
            ></img>

            <img
                style={styles.btn2}
                src={next}
                onClick={handleNext}
            ></img>
        </div>
    )
}