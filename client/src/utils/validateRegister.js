export function validateRegister (registerInfo) {
    const errors = [];

    if (registerInfo.firstName.length < 3) {
        errors.push('First name should be atleast 3 characters long!');
    }

    if (registerInfo.lastName.length < 3) {
        errors.push('Last name should be atleast 3 characters long!');
    }

    if (registerInfo.password.length < 4) {
        errors.push('Password should be atleast 4 characters long!');
    }

    if (registerInfo.repeatPassword != registerInfo.password) {
        errors.push('Passwords should match!');
    }

    if (registerInfo.imageUrl.length < 1) {
        errors.push('Profile image is required!');
    }

    // if (!/^(https?:\/\/)/.test(registerInfo.imageUrl)) {
    //     errors.push('Profile Image should start with http:// or https://');
    // }

    if (errors.length > 0) {
        throw errors;
    }
}
