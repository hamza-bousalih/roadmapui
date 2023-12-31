import environment from "@/environment";

const HttpMethod = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT",
}

class Fetch {
    baseUrl = environment.BASEURL;
    constructor(baseAPI) {
        this.baseAPI = baseAPI
    }

    headers = {
        "Content-Type": "application/json",
    };

    doFetch = async ({ url, method, body = null }) => {
        const apiUrl = `${this.baseUrl}${this.baseAPI}${url !== "" ? "/" + url : ""}`;
        // console.log(apiUrl + "\n--------------------------------------------------");

        const requestOptions = { headers: this.headers, method: method };

        if (body) requestOptions.body = JSON.stringify(body);

        const res = await fetch(apiUrl, requestOptions).catch(err => console.error(err));

        if (!res.ok) throw new Error(res.status.toString());

        return await res.json();
    };


    GET = async (url = "", body = null) =>
        this.doFetch({
            url: url,
            method: HttpMethod.GET,
            body: body
        })

    POST = async (url = "", body = null) =>
        this.doFetch({
            url: url,
            method: HttpMethod.POST,
            body: body
        })

    PUT = async (url = "", body = null) =>
        this.doFetch({
            url: url,
            method: HttpMethod.PUT,
            body: body
        })

    DELETE = async (url = "", body = null) =>
        this.doFetch({
            url: url,
            method: HttpMethod.DELETE,
            body: body
        })
}

export default Fetch;
