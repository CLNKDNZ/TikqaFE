import axios from "axios";
const loginApi = (data, cb) => {
    // bearer token
    axios({
        method: type,
        url: "/api/login",
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status === 200 && res.data.status === true) {
            // set token
            localStorage.setItem("token", res.data.token);
            // callback
            cb(data);
        } else {
            cb(null);
        }
    });

}
export default loginApi;