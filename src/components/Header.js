import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <section id="header">
            <div className="themeRow">
                <div className="themeContainer">
                    <div className="headerWrapper">
                        <div className="headerLeft">
                            <div className="backButton">
                                <Link href="/">
                                    <img src="/images/back.svg" alt="" />
                                </Link>
                            </div>
                            <div className="logo">
                                <a href="#">
                                    <img src="/images/tikqa.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="headerRight">
                            <a href="#">
                                <img src="/images/menu.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="/images/user.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="/images/settings.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li>
                                <a href="#" className="activeLink">
                                    {" "}
                                    Testler{" "}
                                </a>{" "}
                            </li>
                            <li>
                                <a href="#"> Tüm Aktiviteler </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;