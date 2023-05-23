import axios from "axios";
const fromApi = (type = "GET",url ,data = null, cb) => {
    // bearer token
    axios({
        method: type,
        url: "https://tikqa.herokuapp.com/tikqa/api/" + url,
        data: data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        cb(res);
    });

}
export default fromApi;