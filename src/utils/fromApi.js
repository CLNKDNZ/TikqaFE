import axios from "axios";
const fromApi = (type = "GET",url ,data = null, cb) => {
    axios({
        method: type,
        url: "/api/v1/" + url,
        data: data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        cb(res.data);
    }).catch(err => {

    });

}
export default fromApi;