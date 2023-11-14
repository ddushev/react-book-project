export function validateMessages (messageInfo) {
    const errors = [];

    if (messageInfo.message.length < 10) {
        errors.push('Message should be atleast 10 characters long!');
    }
    

    if (errors.length > 0) {
        throw errors;
    }
}
