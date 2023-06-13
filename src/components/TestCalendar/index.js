import Step from "@/components/Step";
import {useRouter} from "next/router";
import fromApi from "@/utils/fromApi";
import {useSelector} from "react-redux";
const TestCalendar = () => {
    const router = useRouter();
    const {activeStep,data} = useSelector(state => state.stepData);

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
                        <h1 className="textLeft"><img src="/images/schedule.svg" /> Test Takvimi</h1>
                        <span className="textLeft">Kurguladığınız testin hangi zaman aralığını aşağıdaki seçimlerle belirleyebilirsiniz.</span>
                        <form action="">
                            <div className="formBoxV3">
                                <div className="dateInputArea">
                                    <div className="formInput">
                                        <label htmlFor="dateInput">Test başlangıç tarihi</label>
                                        <input id="dateInput" type="date"/>
                                    </div>
                                    <div className="formInput">
                                        <label htmlFor="testname">Gün içindeki test sıklığı </label>
                                        <input id="testname" type="text" placeholder="Her saat başında"/>
                                    </div>
                                    <div className="formInput">
                                        <label htmlFor="testname">Testin tekrar edilme sayısı</label>
                                        <select name="" id="">
                                            <option value="">Tekrar Sayısı</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="checkTitle">Günler</div>
                                <div className="multipleCheck">
                                    <div className="checkBox checkedX">
                                        <label className="containerX">Pazartesi
                                            <input type="checkbox"
                                                   // checked="checked"
                                            />
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Salı
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Çarşamba
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Perşembe
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Cuma
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Cumartesi
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                    <div className="checkBox">
                                        <label className="containerX">Pazar
                                            <input type="checkbox"/>
                                                <span className="checkmarkX"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="calendarDesc">
                            <h2>Test takvim özeti:</h2>
                            <p><strong>22 Ekim 2022</strong> ‘ den itibaren <strong>her saat başı 2 kere</strong> tekrar
                                ederek <strong>Pazartesi</strong> ve <strong>Salı</strong> günleri test
                                gerçekleşecektir. </p>
                        </div>
                        <div className="formButton">
                            <button
                                onClick={
                                    () => {
                                        router.push("/testPlan");
                                    }
                                }
                                type="button"><img src="/images/right.svg" /> Devam et</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestCalendar;