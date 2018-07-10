/**
 * Created by sunqi on 2018/7/10.
 */
import React from 'react'
import { DatePicker, Row, Col } from 'antd';
const {  RangePicker } = DatePicker;
export default class XDate extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    onChange(date, dateString) {
        this.setState({
            value: dateString
        })
    }
    render() {
        return (
            <div className="input-container">
                <RangePicker onChange={this.onChange.bind(this)} />
                <input style={{display:'none'}} id="date-input" value={this.state.value}></input>
            </div>
        )

    }
}