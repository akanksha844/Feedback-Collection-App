import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '.../../actions';

const SurveyReview = ({ onCancel, formValues }) => {

    const reviewFields = _.map(formFields, field => {
        return ( <
            div key = { field.name } >
            <
            label > { field.label } < /label> <
            div > { formValues[field.name] } <
            /div> <
            /div>
        );
    });

    return ( <
        div >
        <
        h5 > Please confirm your entries < /h5>

        <
        div >
        <
        div >
        <
        label > Survey Title < /label> <
        div > { formValues.title } < /div> <
        /div> <
        /div>

        <
        div >
        <
        div >
        <
        label > Subject Line < /label> <
        div > { formValues.subject } < /div> <
        /div> <
        /div>

        <
        div >
        <
        div >
        <
        label > Email Body < /label> <
        div > { formValues.body } < /div> <
        /div> <
        /div>



        <
        button className = "yellow darken-3 btn flat"
        onClick = { onCancel } >
        back <
        /button> <
        /div>
    );
};



function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));