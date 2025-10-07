function Footer() {
    React.useEffect(() => {
        const isRTL = document.documentElement.getAttribute("dir") === "rtl";
        if (isRTL) {
            // $("#footer-box > footer > div.top > div.box4").css({
            //     "margin-right": "0.7rem",
            //     "margin-left": "0",
            // });
            // $("#footer-box > footer > div.top > ul").css({
            //     "margin-left": "0",
            //     "margin-right": "1.4rem",
            // });
            // $("footer .top .box3 .top li:nth-of-type(1)").css({
            //     "margin-right": "0",
            // });
            // $("footer .top .box3 .top li:nth-of-type(4)").css({
            //     "margin-right": "0.17rem",
            // });
        }
    }, []);
    return (
        <footer className="pc-pad">
            <div className="top">
                <img className="logo" src="/data/tms/website/html/images/footer/logo.png" alt="" />
                <ul className="box2">
                    <li>
                        <a href="/models">Vehicles</a>
                    </li>
                    <li>
                        <a href="/profile">Company Profile</a>
                    </li>
                    <li>
                        <a href="/partner">Global Partners</a>
                    </li>
                    <li>
                        <a href="/contact_us">Contact Us</a>
                    </li>
                    <li>
                        <a href="/faqs">JETOUR FAQs</a>
                    </li>
                </ul>
                <div className="box3">
                    <ul className="top">
                        <li>
                            <a href="/cookie">Cookies</a>
                        </li>
                        <li>
                            <a href="/agree">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div className="box4">
                    <div className="title">© Copyright 2025 JETOUR Auto</div>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/jetourauto/">
                                <img src="/data/tms/website/html/images/footer/4-1.png" alt="" />
                                <img src="/data/tms/website/html/images/footer/4-2.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/JETOUR.Global">
                                <img src="/data/tms/website/html/images/footer/1-1.png" alt="" />
                                <img src="/data/tms/website/html/images/footer/1-2.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@jetourauto">
                                <img src="/data/tms/website/html/images/footer/3-1.png" alt="" />
                                <img src="/data/tms/website/html/images/footer/3-2.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/JETOUR_Global">
                                <img src="/data/tms/website/html/images/footer/2-1.png" alt="" />
                                <img src="/data/tms/website/html/images/footer/2-2.png" alt="" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="fr">
                <ul className="box2">
                    <li>
                        <a href="https://jetour.co.za/">JETOUR South Africa </a>
                    </li>
                    <li>
                        <a href="https://jetour.com.my/">JETOUR Malaysia </a>
                    </li>
                    <li>
                        <a href="https://www.jetour.co.id/">JETOUR Indonesia</a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <ul>
                    <li>
                        <a href="http://epc.mychery.com/epcm/main_index.shtml#">EPCM</a>
                    </li>
                    <li>
                        <a href="http://tms1.jetourglobal.com/app/admin/home">TMS</a>
                    </li>
                    <li>
                        <a href="https://idms.jetour.com.cn:8443/">DMS</a>
                    </li>
                    <li className="nolink">
                        KAIFENG JETOUR AUTOMOBILE SALES CO.LTD
                    </li>
                </ul>
            </div>
        </footer>
    );
}

ReactDOM.render(<Footer />, document.getElementById("footer-box"));
