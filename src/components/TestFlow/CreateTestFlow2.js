import Step from "@/components/Step";
const CreateTestFlow2 = () => {
    return (
        <section id="centerContent">
            <div className="centerWrapper">
                <Step step={2}/>
                <div className="centerCard formV">
                    <div className="cardTitle"><span>2</span> Test akışı oluştur</div>
                    <div className="formBox p0">
                        <form action="">
                            <div className="loginTestWrapper">
                                <a href="#" className="loginTest">Amazon login testi</a>
                                <p>Yeni test oluşturabilir ya da kütühaneden oluşturduğunuz önceki testlerle devam
                                    edebilirsiniz</p>
                            </div>
                            <div className="radioCheck">
                                <label className="container lh-1">Yeni test oluştur
                                    <input type="radio" checked="checked" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="container lh-1">Kütüphaneden seç
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="formButton">
                        <button type="submit"><img src="/images/right.svg" alt=""/> Devam et</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateTestFlow2;