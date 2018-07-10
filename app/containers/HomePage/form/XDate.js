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
            <span>
                <RangePicker onChange={this.onChange.bind(this)} />
                <input id="date-input" value={this.state.value}></input>
            </span>
        )

    }
}