/**
 * Created by sunqi on 2018/6/20.
 */
import React from 'react'
import {Col} from 'antd'

export default function(props) {
    const styles = {
        root: {
            width: props.width,
            position: 'relative',
            display: 'block',
            float: 'left',
            //padding: '1px',
            //border: '2px solid white',
            padding: 1,
            borderRadius: '6px'

        },
        img: {
            width: '100%',
            borderRadius: '6px'
        }

    }
    return (
        <div
            id={props.id}
            data-index={props.data.index} className="tile" style={styles.root}>
            <div className="tile-overlay"></div>
            <img style={styles.img} src={props.data.src}/>
        </div>
    )
}