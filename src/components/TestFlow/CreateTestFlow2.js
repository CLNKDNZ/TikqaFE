import Step from "@/components/Step";
import {useState} from "react";
import {useRouter} from "next/router";

const CreateTestFlow2 = () => {
    const router = useRouter();

    const [radio, setRadio] = useState('createNewTest');


    const handleClick = () => {
        if (radio === 'createNewTest') {
            router.push('/testFlow/create');
        } else {
            // router.push('/create-test-flow-4');
        }
    }

    const handleChange = (e) => {
        setRadio(e.target.value);
    }

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
                            <div className="radioCheck"
                            >
                                <label className="container lh-1">Yeni test oluştur
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="createNewTest"
                                        onChange={handleChange}
                                        checked={radio === 'createNewTest'}
                                    />
                                        <span className="checkmark"></span>
                                </label>
                                <label className="container lh-1">Kütüphaneden seç
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="selectFromLibrary"
                                        onChange={handleChange}
                                        checked={radio === 'selectFromLibrary'}
                                    />
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="formButton">
                        <button
                            onClick={handleClick}
                            type="button"><img src="/images/right.svg" alt=""/> Devam et</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateTestFlow2;