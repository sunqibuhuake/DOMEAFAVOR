
/**
 * Created by sunqi on 2018/7/10.
 */
import defaultData from '../../../data/default'
import React from 'react'
import XOption from './XOption'
import { DatePicker, Row, Col } from 'antd';
const {  RangePicker } = DatePicker;
import XDate from './XDate'
import XInput from './XInput'

function onChange(date, dateString) {
    console.log(date, dateString);
}
export default class XForm extends React.PureComponent {

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
                    <div className="add-btn">
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