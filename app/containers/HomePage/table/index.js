import { Table } from 'antd';
import React from 'react';
import table_config from '../../../data/tableConfig';
import helper from '../../../utils/helper'
  
const columns =  table_config.columns;
export default class CoolTable extends React.PureComponent{

    componentDidMount() {
    }

    getCurrentData() {
        const resultObj = {}
        const resultArr = []
        const index = helper.getWeekIndex(new Date())
        const items = this.props.items;
        items.forEach(item => {
            if (item.start == index || item.end == index) {
                const level = item.level;
                const city = item.city;
                if (!resultObj[city]) {
                    resultObj[city] = {}
                }
                if (!resultObj[city][level]) {
                    resultObj[city][level] = 0;
                }
                resultObj[city][level] += 1;
            }
        })

        for(let city in resultObj) {
            const obj = {city: helper.code2city(city), ...resultObj[city]}
            //obj.city = '123'//helper.code2city(city);
            resultArr.push(obj)
        }
        return resultArr;
    }
    render() {

        console.log(columns)

        return (
            <div className="card">
                <Table columns={columns} dataSource={this.getCurrentData()} bordered />
            </div>
        )

    }
}