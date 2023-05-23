import React from "react";

const Form = () => {
    return (
        <div className="centerCard formV">
            <div className="cardTitle">
                {" "}
                <span>1</span> Test bilgileri
            </div>
            <div className="formBox">
                <form action="">
                    <div className="formInput">
                        <label htmlFor="testname">Test Adı *</label>
                        <input id="testname" type="text" placeholder="Input" />
                    </div>
                    <div className="formInput">
                        <label htmlFor="criteria">
                            Test kabul kriterleri (İsteğe bağlı)
                        </label>
                        <textarea name="criteria" id="criteria"></textarea>
                    </div>
                    <div className="formInput mb10">
                        <label htmlFor="testname">Etiket (İsteğe bağlı)</label>
                        <input id="testname" type="text" placeholder="Input" />
                        <span>Etiketlerinizi yazdıktan sonra enter’a basın</span>
                    </div>
                    <div className="tagsArea">
                        <a href="#">
                            {" "}
                            <img src="/images/delete.svg" alt="" /> test{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <img src="/images/delete.svg" alt="" /> değişken{" "}
                        </a>
                    </div>
                </form>
            </div>
            <div className="formButton">
                <button type="submit">
                    <img src="/images/right.svg" alt="" /> Test akışı oluştur
                </button>
            </div>
        </div>
    );
};

export default Form;