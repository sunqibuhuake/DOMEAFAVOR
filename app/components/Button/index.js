/**
 * Created by sunqi on 2018/6/20.
 */
import React from 'react'
import helper from '../../utils/helper'
export default class Button extends React.PureComponent {

  handleClick() {
    helper.btnVoice()
    this.props.onClick()
  }
  render() {
    const props = this.props;
    const styles = {
      root: {
        height: 32,
        borderRadius: '8px',
        textAlign: 'center',
        background: '#6CC7D9',
        color: 'white',
        fontSize: 16,
        lineHeight: '32px',
        ...this.props.style
      }
    }
    return (
        <div
            style={styles.root}
            onClick={this.handleClick.bind(this)}
        >
          {props.text}
        </div>
    )
  }


}
