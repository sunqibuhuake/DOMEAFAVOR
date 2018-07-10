/**
 * Created by sunqi on 2018/6/20.
 */
import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga'

import Form from './form'
import CoolTable from './table'

import {
    makeSelectItems,
    makeSelectLocation,
} from '../App/selectors';


import {
    addItem
} from '../App/actions'

import './style.css'


export class HomePage extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    shouldComponentUpdate() {
        return true
    }



    componentWillReceiveProps(np) {

    }

    render() {


        return (
            <div className="page-container">
                <Form>

                </Form>

                <CoolTable></CoolTable>

            </div>
        )
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        addItem: (item) => dispatch(addItem(item))
    };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'home', saga});

export default compose(
    withSaga,
    withConnect
)(HomePage);
