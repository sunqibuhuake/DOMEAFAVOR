/**
 * Created by sunqi on 2018/6/21.
 */
import React from 'react'
import Button from '../../components/Button'
import Success from './Success'
export default function (props) {

    function next() {
        props.history.push({
            pathname: 'result'
        })
    }
    return (
        <div className="overlay"
             style={{display: props.status == 'SUCCESS' ? 'block' : 'none'}}
        >

            <Success></Success>

        </div>
    )
}