export function validateMessages (messageInfo) {
    const errors = [];

    if (messageInfo.subject.length < 5) {
        errors.push('Subject\'s message should be atleast 5 characters long!');
    }

    if (messageInfo.message.length < 10) {
        errors.push('Message should be atleast 10 characters long!');
    }
    

    if (errors.length > 0) {
        throw errors;
    }
}
