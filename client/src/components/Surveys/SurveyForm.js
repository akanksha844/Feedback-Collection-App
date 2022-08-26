import React, { Component } from 'react';
import SurveyNew from './SurveyNew';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


/* const FIELDS = [
    {label:'Survey Title',name: 'title'},
    {label : 'Subject Line', name : 'subject'}, 
    {label: 'Email Body', name:'body' },
    {label:'Recipient List', name: 'emails' }

];   */

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field component = { SurveyField }
            type = "text"
            label = { label }
            name = { name }
            />
        });


    }

    render() {
        return ( <
            div >
            <
            form onSubmit = { this.props.handleSubmit(() => this.props.onSurveySubmit()) } > { this.renderFields() } <
            Link to = "/surveys"
            className = "red btn-flat white -text " >
            cancel <
            /Link> <
            button type = "submit"
            className = "teal btn flat rigth white-text" > Next <
            i className = 'material-icons right' > done < /i></button >

            { this.renderFields() } <
            button type = "submit" > Submit < /button> <
            /form> <
            /div>
        );
    }
}

function validate(values) {

    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            error[name] = 'You must provide a value'
        }
    });

    errors.emails = validateEmails(values.emails);

    if (!values.title) {
        errors.title = 'You must provide a title';


    }

    return errors;


}


export default reduxForm({

    validate,
    form: 'surveyForm'
})(SurveyForm);