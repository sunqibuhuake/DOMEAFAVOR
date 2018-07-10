import React from 'react'
import { Table } from 'antd';
import table_config from '../../../data/tableConfig'

  
const columns =  table_config.columns;
export default class CoolTable extends React.PureComponent{

    getCurrentData() {
        const items = this.props.items;
        items.forEach(item => {

        })
    }
    render() {
        return null;

        return (
            <div className="card">
                <Table columns={columns} dataSource={data} bordered />
            </div>
        )

    }
}