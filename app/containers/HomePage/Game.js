/**
 * Created by sunqi on 2018/6/20.
 */
import React from 'react'
import {Row, Col} from 'antd'
import helper from '../../utils/helper'
import BallGame from './modules/BallGame'
import score_img from './assets/score.png'

import leftArrow from './assets/left-arrow.png'
import rightArrow from './assets/right-arrow.png'

export default class GameComponent extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            id: 'wolf-container'
        }
    }

    startGame() {
        this.startTime = new Date().getTime()
    }

    componentDidMount() {

        setTimeout(() => {
            this.setHeight()
            this.initGame()
            helper.playBgm();

        }, 500)

    }
    setHeight() {
        $('#' + this.state.id).css({
            height: $('#hiddenJoker').offset().top
        })
    }


    componentWillUnmount() {
        helper.stopBgm()
    }


    initGame() {
        this.game = new BallGame({
            containerID: this.state.id,
            onStop: (s) => {
                this.props.setSimpleValue('score', s);
                this.props.changeGameStatus('RESULT');
            }
        })

        //this.game.start()
    }

    componentWillReceiveProps(np) {

        //if (np.status == 'REPLAY') {
        //    this.setGame()
        //}
        if (this.props.status == 'ENTER' && np.status == 'START') {
            this.game.start()
        }
        //
        //if (this.props.status == 'REPLAY' && np.status == 'START') {
        //    this.startGame()
        //}
        //
        //
        //if (this.props.status == 'START' && np.status == 'SUCCESS') {
        //    // 停止游戏
        //}
    }

    shouldComponentUpdate(np) {
        return false
        //if (this.props.status == 'START') {
        //    return false
        //} else {
        //    return true
        //}
    }

    onGameSuccess() {
        //const self = this;
        //this.props.setSimpleValue('score', t);
        //
        //$('#success-animation').fadeIn(100, () => {
        //    setTimeout(() => {
        //        self.props.changeGameStatus('RESULT');
        //    }, 1500)
        //})
    }

    componentWillUnmount() {
        //this.clearTimer()
    }



    render() {
        return (
            <div
                className="wolf-container"

                id={this.state.id}
            >

                <div id="daojishi"></div>
                <div id="control-guide">
                    <Row>
                        <Col span={24} style={{height: 100}}>
                            游戏限时30秒<br/>
                        用手指左右移动小狼接球
                        </Col>
                        <Col span={6}>
                            <img className="animated infinite fadeInRight" src={leftArrow}/>
                        </Col>
                        <Col offset={12} span={6}>
                            <img className="animated infinite fadeInLeft" src={rightArrow}/>
                        </Col>

                    </Row>
                </div>

                <div id="time-container">
                    0
                </div>

                <div className="score-block">
                    <img className="score-bar" src={score_img}/>
                    <div className="score">
                        0分
                    </div>
                </div>


            </div>


        )
    }
}

