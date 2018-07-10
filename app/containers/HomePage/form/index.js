
/**
 * Created by sunqi on 2018/7/10.
 */
import defaultData from '../../../data/default'
import React from 'react'
import XOption from './XOption'
import { DatePicker, Row, Col, message } from 'antd';
const {  RangePicker } = DatePicker;
import XDate from './XDate'
import XInput from './XInput'
import $ from 'jquery'
import helper from '../../../utils/helper'
function onChange(date, dateString) {
    console.log(date, dateString);
}
export default class XForm extends React.PureComponent {

    onAddClick() {
        const cities = $('#city-input').val();
        const levels = $('#level-input').val();
        const name = $('#name-input').val().trim();
        const date = $('#date-input').val();

        if (!cities || !levels || !name || !date) {
            message.warning('请填写完整')
            return false;
        }
        const new_items = [];
        const city_arr = cities.split(',')
        const level_arr = levels.split(',')
        const date_range = date.split(',')
        city_arr.forEach(city => {
            level_arr.forEach(level => {
                new_items.push({
                    start: helper.getWeekIndex(new Date(date_range[0])),
                    end: helper.getWeekIndex(new Date(date_range[1])),
                    uid: (Math.random() + '').split('.')[1],
                    name, city, level
                })

            })
            
        });

        this.props.addItems(new_items)

    }


    render() {
        return (
            <section className="card">
                <Row>
                    <Col span={12}>
                        <XOption
                            name="城市"
                            id="city-input"
                            options={defaultData.city}
                        >
                        </XOption>

                        <XOption
                            name="年级"
                            id="level-input"
                            options={defaultData.level}
                        >
                        </XOption>



                    </Col>
                    <Col span={12}>
                    <XInput></XInput>

                        <XDate></XDate>
                      
                    </Col>

                    <Col span={24}>
                    <div 
                    className="add-btn"
                    onClick={this.onAddClick.bind(this)}
                    >
                            添加
                        </div>
                    </Col>

                </Row>


                <Row>

                    <Col span={12}>

                    </Col>
                </Row>

            </section>
        )
    }

}