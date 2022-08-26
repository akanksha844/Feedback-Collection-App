import React, { Component } from 'react';
import { connect } from 'react- redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React {
    render() {

        return ( <
            div > SurveyList < /div>
        );
    }
}




function mapStateToProps({ surveys }) {
    return { surveys };
}



class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();

    }
    renderSurveys() {
        return this.props.surveys.map(survey => {
            return ( <
                div className = "card darken -1"
                key = { survey.id } > < /div>
            );
        });
    }
}

export default connect(mapStateToProps, { fetchSurveys });