/**
 * Created by sunqi on 2018/7/10.
 */
import React from 'react'
import { Select } from 'antd';

const Option = Select.Option;


export default class XOption extends React.PureComponent{

    constructor(props) {
        super(props)
        this.state = {
            options : [],
            value: ''
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
        console.log(`selected ${value}`);
    }
    getChildren() {
        return this.props.options.map((o, i) => {
            return (<Option value={o.id} key={this.props.name + o.id}>{o.name}</Option>)
        })
    }
    componentDidMount() {
        this.setState({
            options: this.getChildren()
        })
    }
    render() {
        return (
            <div className="input-container">
                  <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder={'请选择' + this.props.name}
                      onChange={this.handleChange.bind(this)}
                  >
                      {this.state.options}
                  </Select>
                <input value={this.state.value} style={{display: 'none'}} id={this.props.id} />
            </div>

        )
    }

}