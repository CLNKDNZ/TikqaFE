import Step from "@/components/Step";
import SelectArea from "@/components/TestPlan/SelectArea";
function TestPlan() {

    const handleSelect = (e) => {
        console.log(e);
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
                                    options={[
                                        { id: 1, name: 'Desktop', img: '/images/pc.png' },
                                        { id: 2, name: 'Tablet', img: '/images/tablet.png' },
                                        { id: 3, name: 'Mobil', img: '/images/mobile.png' },
                                    ]}
                                    selectHandle={handleSelect}
                                />

                                <SelectArea
                                    name="İşletim sistemi seçimi"
                                    options={[
                                        { id: 1, name: 'Mac OS', img: '/images/apple.png' },
                                        { id: 2, name: 'Windows', img: '/images/windows.png' },
                                        { id: 3, name: 'Linux', img: '/images/linux.png' }
                                        ]}
                                />
                                <SelectArea
                                    name="Browser seçimi"
                                    options={[
                                        { id: 1, name: 'Chrome', img: '/images/chrome.png' },
                                        { id: 2, name: 'Firefox', img: '/images/firefox.png' },
                                        { id: 3, name: 'Safari', img: '/images/safari.png' },
                                        { id: 4, name: 'Opera', img: '/images/opera.png' },
                                        { id: 5, name: 'Edge', img: '/images/edge.png' }
                                    ]}
                                />
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