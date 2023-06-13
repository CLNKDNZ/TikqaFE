import Step from "@/components/Step";
import SelectArea from "@/components/TestPlan/SelectArea";
import fromApi from "@/utils/fromApi";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import Modal from "@/components/Success/Modal";
function TestPlan() {
    const router = useRouter();
    const {data} = useSelector((state) => state.stepData);

    const [platformList, setPlatformList] = useState([]);
    const [osList, setOsList] = useState([]);
    const [browserList, setBrowserList] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(
        () => {
            fromApi("GET", "operator/platform", null, (res) => {
                setPlatformList(res.data)
            });
        }, []
    )

    const handleSelect = (e,operationName) => {
        console.log(e);
        if (operationName === 'platformList') {
            setOsList([]);
            e.map((item) => {
                fromApi("GET", "operator/operating-system/"+item, null, (res) => {
                    setOsList(osList => [...osList, ...res.data])
                });
            })
        }else if (operationName === 'osList') {
            if (e.length === 0) {
                setBrowserList([]);
            }else{
                fromApi("GET", "operator/browser/", null, (res) => {
                    setBrowserList(res.data)
                });
            }
        }
    }


    const handleSubmit = () => {
        fromApi("POST", "test-case", data, (res) => {
            router.push("/success");
        })
    }

    return (
        <section id="fluidContent">
            <div className="centerWrapper">
                <Step step={3} />
                <div className="centerCard fullWidth formV">
                    <div className="cardTitle"><span>3</span> Çalışma takvimi</div>
                    <div className="loginTestWrapper">
                        <a href="#" className="loginTest">Amazon login testi</a>
                    </div>
                    <div className="dateCard">
                        <h1 className="textLeft"><img src="/images/settings2.svg" /> Browser & İşletim sistemi &
                            Platform seçimi</h1>
                        <span className="textLeft">Kurguladığınız testin çalışacağı  Browser, İşletim sistemi ve platformlarıını  </span>
                        <form action="">
                            <div className="formBoxV3">
                                <SelectArea
                                    name="Platform seçimi"
                                    options={platformList}
                                    dataName="platformList"
                                    selectHandle={
                                        (e) => handleSelect(e, 'platformList')
                                    }
                                />

                                {
                                    osList.length > 0 && <SelectArea
                                        name="İşletim sistemi seçimi"
                                        options={osList}
                                        dataName="operatingSystemList"
                                        selectHandle={
                                            (e) => handleSelect(e, 'osList')
                                        }
                                    />
                                }
                                {
                                    browserList.length > 0 && <SelectArea
                                        name="Browser seçimi"
                                        options={browserList}
                                        dataName="browserList"
                                        selectHandle={
                                            (e) => handleSelect(e, 'browserList')
                                        }
                                    />
                                }
                                <div className="toggleSwitch">
                                    <input type="checkbox" id="screen"/><label htmlFor="screen"></label><span>Test ekran görüntüsü al</span>
                                    <input type="checkbox" id="video"/><label htmlFor="video"></label><span>Test videosu kaydı al</span>
                                </div>
                            </div>
                        </form>
                        <div className="formButton">
                            <button
                                onClick={handleSubmit}
                                type="button"><img src="/images/right.svg" /> Kurulumu tamamla</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestPlan;