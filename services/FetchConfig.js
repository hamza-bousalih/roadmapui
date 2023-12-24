/**/

const baseUrl = process.env.BASEURL;

class Fetch {
    baseAPI
    constructor(baseAPI) {
        this.baseAPI = baseAPI + "/"
    }

    headers = {
        "Content-Type": "application/json",
    };

    doFetch = async (url, method, body = null) => {
        const requestOptions = {
            headers: this.headers,
            method: method
        };

        if (body !== null) requestOptions.body = JSON.stringify(body);
        const res = await fetch(baseUrl + url, requestOptions);

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return await res.json()
    };

    GET = async (url = "", body = null) => this.doFetch(this.baseAPI + url, "GET", body)

    POST = async (url = "", body = null) => this.doFetch(this.baseAPI + url, "POST", body)

    PUT = async (url = "", body = null) => this.doFetch(this.baseAPI + url, "PUT", body)

    DELETE = async (url = "", body = null) => this.doFetch(this.baseAPI + url, "DELETE", body)
}

export default Fetch;
