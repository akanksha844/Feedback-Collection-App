const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")

export default (emails) => {

    const emailsArray = emails
        .split(',')
        .map(email => email.trim()).filter(email => re.test(email) === false);

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;

    }


    return;

};