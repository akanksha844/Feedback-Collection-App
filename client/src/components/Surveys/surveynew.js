import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    /*constructor(props){
        super(props);


        this.state = {new : true};
    } */

    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel = {
                () => this.setState({ howFormReview: false }) }
            />;
        }
        return ( <
            SurveyForm onSurveySubmit = {
                () => this.setState({ showFormReview: true }) }
            />
        );
    }

    render() {
        return ( <
            div > SurveyNew! < /div>
        );
    }
}


export default SurveyNew;