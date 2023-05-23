import React from "react";

const Step = ({step,howCreate = null}) => {
    return (
        <div className="stepWrapper">
            <ul>
                <li>
                    <a className={step >= 1 ? "activeStep" : ""} href="#">
                            <span>
                                {step > 1 ? <img src="/images/edit.svg"  /> : 1}
                            </span>
                        Test bilgileri
                    </a>
                </li>
                <li>
                    <a className={step >= 2 ? "activeStep" : ""} href="#">
                            <span>
                                {step > 2 ? <img src="/images/edit.svg" /> : 2}
                            </span>
                        Test akışı oluştur
                    </a>
                </li>
                <li>
                    <a className={step >= 3 ? "activeStep" : ""} href="#">
                            <span>
                                {step > 3 ? <img src="/images/edit.svg"  /> : 3}
                            </span>
                        Çalışma takvimi
                    </a>
                </li>
            </ul>
            {
                howCreate && (
                    <div className="howCreate">
                        <a href="#"> <img src="/images/settings2.svg"/> Test akışı nasıl oluşturulur</a>
                    </div>
                )
            }
        </div>
    );
};

export default Step;