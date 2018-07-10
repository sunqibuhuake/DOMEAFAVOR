/**
 * Created by sunqi on 2018/7/5.
 */
import React from 'react'
export default function(props) {
    return (
        <div style={{
            position: 'absolute',
            width: '76%',
            left: '12%',
            top: '12px',
            textAlign: 'center'
        }}>
            <img style={{width: '100%'}} src={props.src}/>
        </div>
    )
}