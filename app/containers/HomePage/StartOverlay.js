/**
 * Created by sunqi on 2018/6/21.
 */
import React from 'react'
import Button from '../../components/Button'
import Intro from './Intro'
import helper from '../../utils/helper'
export default class StartOverlay extends React.PureComponent {

    //hide() {
    //    helper.btnVoice();
    //    $('#start-overlay').fadeOut(300)
    //    this.props.changeGameStatus('START')
    //}

    handleStart() {
        props.changeGameStatus('START')
        //$('#start-overlay').fadeOut(100)
    }
    render() {
        const props = this.props;
        return (
            <div className="overlay"
                 id="start-overlay"
                 style={{display: props.status == 'ENTER' ? 'block' : 'none'}}
            >


                <Intro {...props}></Intro>
                <Button
                    style={{
                            width: 100,
                            margin: '200px auto 0',
                            display: 'none'
                        }}
                    text="开始"
                    onClick={this.handleStart.bind(this)}
                ></Button>

            </div>
        )
    }

}