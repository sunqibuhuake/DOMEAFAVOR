/**
 * Created by sunqi on 2018/6/22.
 */
import React from 'react'

import btn1 from './assets/btn-1.png'
import btn2 from './assets/btn-2.png'
import btn3 from './assets/btn-3.png'
import {Row, Col } from 'antd'
import helper from '../../utils/helper'
export default class MetaBtns extends React.PureComponent{

    constructor(props) {
        super(props)
        this.state = {
            preview: false
        }
    }

    showGuide() {
        helper.btnVoice();
        $('#guide-overlay').fadeIn(100, () => {
            $('#guide-overlay').one('click', () => {
                $('#guide-overlay').fadeOut(100)
            })

        })
    }

    replay() {
        helper.btnVoice();
        this.hidePreview()
        $('#success-animation').fadeOut(100)
        this.props.replay('REPLAY')

    }

    showPreview() {
        $('#tiles-container').fadeOut(100, () => {
            $('#preview').fadeIn(100, () => {
                $('#preview').one('click', () => {
                    helper.btnVoice()
                    $('#preview').fadeOut(100, () => {
                        $('#tiles-container').fadeIn(100)
                    })
                })
            })

        })
    }
    hidePreview() {
        $('#preview').fadeOut(100, () => {
            $('#tiles-container').fadeIn(100)
        })
    }

    togglePreview() {

        helper.btnVoice()

        if ($('#preview').is(':hidden')) {
            this.showPreview()
        } else {
            this.hidePreview()
        }

    }
    render() {
        return (
            <div className="meta-btn-group" style={{
            top: (this.props.top - 12) + 'px',
            paddingBottom: 12
            }}>
                <Row  style={{marginBottom: 12, height:this.props.height}}>
                    <Col span={8} className="fh">
                        <div className="meta-btn" onClick={this.showGuide.bind(this)}>
                            <img src={btn1}/>
                        </div>
                    </Col>
                    <Col span={8} className="fh">
                        <div className="meta-btn" onClick={this.togglePreview.bind(this)}>
                            <img src={btn2}/>
                        </div>
                    </Col>
                    <Col span={8} className="fh">
                        <div className="meta-btn" onClick={this.replay.bind(this)}>
                            <img src={btn3}/>
                        </div>
                    </Col>
                </Row>

                <img
                    onClick={this.togglePreview.bind(this)}
                    className="preview "
                    src={this.props.image.src}
                    style={{ display: this.state.preview ? 'block' : 'none'}}
                />

            </div>
        )
    }
}
