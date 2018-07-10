/**
 * Created by sunqi on 2018/6/21.
 */
import React from 'react'
import Button from '../../components/Button'
import guide from './assets/guide.png'
export default function (props) {

    function next() {
        props.history.push({
            pathname: 'result'
        })
    }
    return (
        <div className="overlay"
             style={{
                textAlign: 'center',
                display: 'none'
             }}
             id="guide-overlay"
        >
            <img style={{margin: '120px auto 0', width: '80%'}} src={guide}/>
        </div>
    )
}