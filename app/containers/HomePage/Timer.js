/**
 * Created by sunqi on 2018/6/20.
 */
import React from 'react'
import bar from './assets/timer.png'
import clock from './assets/clock.png'

export default class Timer extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            active: false
        }
    }


    componentWillUnmount() {
        window.clearInterval(this.clock);

    }

    formatter() {
        const time = this.state.time;

        let min = (~~(time / 60)) + '';
        if (min.length == 1) {
            min = '0' + min;
        }

        let sec = (time - min * 60) + '';
        if (sec.length == 1) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    }
    componentWillReceiveProps(np) {
        const self = this;
        if (this.props.status =='ENTER' && np.status == 'START') {
            this.initClock()
        }
        if (this.props.status == 'START' && np.status == 'REPLAY') {
            this.initClock()
        }
    }

    initClock() {
        const self = this;
        if (self.clock) {
            window.clearInterval(self.clock)
        }
        this.clock = setInterval(addTime.bind(self), 1000)
        this.setState({
            time: 0
        })
    }

    render() {
        return (
            <div className="timer-block">
                <img className="timer-bar" src={bar}/>
                <div className="timer">
                    {this.formatter()}
                </div>
            </div>
        )

    }
}

function addTime() {
    console.log('add time')
    if (this.props.status == 'START') {
        const time = this.state.time;
        this.setState({
            time: time + 1
        })
    }
}