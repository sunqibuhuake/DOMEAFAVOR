/**
 * Created by sunqi on 2018/6/24.
 */
import React from 'react'
import img from './assets/wolf.png'
export default function(props) {
    const styles = {
        root: {
            position: 'absolute',
            height: props.height,
            width: 'auto',
            top: props.top + 'px',
            left: '12px'
        },
        img : {
            height: '100%'
        }
    }
    return (
        <div style={styles.root}>
            <img style={styles.img} src={img}/>
        </div>
    )
}