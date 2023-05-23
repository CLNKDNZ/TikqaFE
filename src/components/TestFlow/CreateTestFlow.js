import Step from "@/components/Step";
import { Select, Text, File} from "@/components/Form/Index";
import fromApi from "@/utils/fromApi";
import {useEffect} from "react";
const CreateTestFlow = () => {

    useEffect(
        () => {
            fromApi("GET", "event", null, (res) => {
                console.log(res);
            })
        }, []
    )

    return (
        <section id="fluidContent">
            <div className="centerWrapper">
                <Step step={2} howCreate={true} />
                <div className="centerCard fullWidth formV">
                    <div className="cardTitle"><span>2</span> Test akışı oluştur</div>
                    <div className="loginTestWrapper">
                        <a href="#" className="loginTest">Amazon login testi</a>
                    </div>
                    <div className="formBoxV2">
                        <p className="testDesc">Testinizin birinci adımını oluşturduktan sonra yeni adımlar için adım
                            ekle butonu ile test kurulumunu yapabilirsiniz.</p>
                        <div className="formBg">
                            <div className="cardTitle positionCorner"><span>1</span></div>
                            <form action="">
                                <h3>Birinci adım</h3>
                                <Select
                                    name="action"
                                    id="action"
                                    onChange={
                                        (e) => {
                                            console.log(e.target.value);
                                        }
                                    }
                                    options={[
                                    {value: "1", label: "Aksiyon 1"},
                                    {value: "2", label: "Aksiyon 2"},
                                    {value: "3", label: "Aksiyon 3"},
                                    {value: "4", label: "Aksiyon 4"},
                                    {value: "5", label: "Aksiyon 5"},
                                ]} />
                                <Select
                                    name="Locator seçimi"
                                    id="locator"
                                    onChange={
                                        (e) => {
                                            console.log(e.target.value);
                                        }
                                    }
                                    options={[
                                    {value: "1", label: "Aksiyon 1"},
                                    {value: "2", label: "Aksiyon 2"},
                                    {value: "3", label: "Aksiyon 3"},
                                    {value: "4", label: "Aksiyon 4"},
                                    {value: "5", label: "Aksiyon 5"},
                                ]} />

                                <Text
                                    name="Locator değeri"
                                    id="locatorVal"
                                    placeholder="UserName"
                                    desc="İlgili alanın adını yazın" />
                                <Text
                                    name="Locator değerinin önyüzdeki adı (isteğe bağlı)"
                                    id="locatorVal2"
                                    placeholder="Kullanıcı adı"
                                    desc="İlgili alanın adını yazın" />

                                <File
                                    label="Input Ekle"
                                    id="addInput"
                                    onChange={
                                        (e) => {
                                            console.log(e.target.value);
                                        }
                                    }
                                    desc="Birden fazla input eklemek için dosya ekle butonunu kullanın" />

                                <Text
                                    name="Not Ekle"
                                    id="note"
                                    placeholder=""
                                    />
                                <div className="formButton">
                                    <button className="cancelBtn" type="submit">İptal</button>
                                    <button type="submit">Kaydet</button>
                                </div>
                                <div className="addStep">
                                        <img src="/images/connect.png" alt=""/>
                                        <button className="addStepBtn"><img src="/images/add.svg" alt=""/>
                                            Adım Ekle
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateTestFlow;