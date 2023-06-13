import Step from "@/components/Step";
import SelectArea from "@/components/TestPlan/SelectArea";
import fromApi from "@/utils/fromApi";
import {useEffect, useState} from "react";
function TestPlan() {

    const [platformList, setPlatformList] = useState([]);
    const [osList, setOsList] = useState([]);
    const [browserList, setBrowserList] = useState([]);

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
                                    selectHandle={
                                        (e) => handleSelect(e, 'platformList')
                                    }
                                />

                                {
                                    osList.length > 0 && <SelectArea
                                        name="İşletim sistemi seçimi"
                                        options={osList}
                                        selectHandle={
                                            (e) => handleSelect(e, 'osList')
                                        }
                                    />
                                }
                                {
                                    browserList.length > 0 && <SelectArea
                                        name="Browser seçimi"
                                        options={browserList}
                                    />
                                }
                                <div className="toggleSwitch">
                                    <input type="checkbox" id="screen"/><label htmlFor="screen"></label><span>Test ekran görüntüsü al</span>
                                    <input type="checkbox" id="video"/><label htmlFor="video"></label><span>Test videosu kaydı al</span>
                                </div>
                            </div>
                        </form>
                        <div className="formButton">
                            <button type="submit"><img src="/images/right.svg" /> Kurulumu tamamla</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestPlan;