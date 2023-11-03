export function errorParser(err) {
    let errors = [];

    if (Array.isArray(err)) {
        errors = [...err];
    }else {
        errors.push(err.message);
    }

    return errors;
}
