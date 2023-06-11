
const putData = (key, value) => {
    const oldData = getData();
    localStorage.setItem("data", JSON.stringify({
        ...JSON.parse(oldData),
        [key]: value
    }))
}

const getData = (key = null) => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (key) {
        if (data){
            return data[key];
        }else{
            return false;
        }
    }
    if (data){
        return data;
    }else{
        return false;
    }
}

export {putData, getData}