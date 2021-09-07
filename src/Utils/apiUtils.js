
var URL = "https://jsonplaceholder.typicode.com/"

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        ).catch(e => {
        });
};

export function getList() {
    return request({
        url: URL + "posts",
        method: 'GET'
    });
}

export function getListById(id) {
    return request({
        url: URL + "posts/"+id,
        method: 'GET'
    });
}

export function deleteItem(id) {
    return request({
        url: URL + "posts/"+id,
        method: 'Delete'
    });
}

export function save(data) {
    return request({
        url: URL + "posts",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function update(data, id) {
    return request({
        url: URL + "posts/"+id,
        method: 'PUT',
        body: JSON.stringify(data)
    });
}