/**
 * Created by sunqi on 2018/6/21.
 */
import React from 'react'
export default class SuccessAnima extends React.PureComponent {
    render() {
        return (
            <div id="success-animation" className="success-animate-container " style={{height: this.props.height}}>
                <p className="animated  rubberBand">拼图完成<br/>SUCCESS
                </p>

            </div>
        )
    }

}