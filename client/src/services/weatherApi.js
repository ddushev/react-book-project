async function request(url, options) {
    try {
        const response = await fetch(url, options)
        return response.json();

    } catch (error) {
        throw (error);
    }
}

function createOptions(method) {
    const options = {
        method,
        headers: {}
    }

    return options;
}

export function get(endpoint) {
    return request(endpoint, createOptions('get'));
}




