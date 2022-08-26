// SurveyField contains logic to rendee a single
//label and text input


import React from 'react';

export default ({ input }) => {

    return (

        <
        div >
        <
        label > { label } < /label> <
        input {...input }
        /> { touched && error } <
        /div>
    );
};