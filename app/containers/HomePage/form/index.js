
/**
 * Created by sunqi on 2018/7/10.
 */
import defaultData from '../../../data/default'
import React from 'react'
import XOption from './XOption'
import { DatePicker, Row, Col } from 'antd';
const {  RangePicker } = DatePicker;
import XDate from './XDate'

function onChange(date, dateString) {
    console.log(date, dateString);
}
export default class XForm extends React.PureComponent {

    render() {
        return (
            <section style={{width: '100%', padding: 24,background: 'white'}}>
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
                        <XDate></XDate>

                        <div>
                            <input></input>
                        </div>
                        <div className="add-btn">

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