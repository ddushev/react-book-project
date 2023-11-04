export function validateRoom (roomInfo) {
    const errors = [];

    if (roomInfo.name.length < 5) {
        errors.push('Property name should be atleast 5 characters long!');
    }

    if (!(Number(roomInfo.price) > 0)) {
        errors.push('Price should be positive number!');
    }

    if (!/^(https?:\/\/)/.test(roomInfo.imageUrl)) {
        errors.push('Image URL should start with http:// or https://');
    }

    if (roomInfo.description.length < 20) {
        errors.push('Description should be atleast 20 characters long!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}
