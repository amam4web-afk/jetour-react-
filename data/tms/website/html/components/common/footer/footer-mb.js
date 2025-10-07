function FooterMb() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toTop = () => {
    jQuery("html, body").animate({ scrollTop: 0 }, 550);
  };
  const openCarList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <footer className="mb-only">
      <div className="back-top" onClick={toTop}>
        <img src="/data/tms/website/html/images/footer/goback.png" />
      </div>
      <ul>
        <li onClick={openCarList}>
          <div>Vehicles</div>
          <img
            src={
              isOpen ? "/data/tms/website/html/images/header/close.png" : "/data/tms/website/html/images/header/open.png"
            }
          />
        </li>
        <div className={isOpen ? "car-list1" : "car-list"}>
          <div
            onClick={() => {
              window.location.href = "/T1";
            }}
          >
            JETOUR T1
          </div>
          <div
            onClick={() => {
              window.location.href = "/T2";
            }}
          >
            JETOUR T2
          </div>
          <div
            onClick={() => {
              window.location.href = "/T2iDM";
            }}
          >
            JETOUR T2 i-DM
          </div>
          <div
            onClick={() => {
              window.location.href = "/dashing";
            }}
          >
            DASHING
          </div>
          <div
            onClick={() => {
              window.location.href = "/x70Plus";
            }}
          >
            JETOUR X70 PLUS
          </div>
          <div
            onClick={() => {
              window.location.href = "/x70";
            }}
          >
            JETOUR X70
          </div>
          <div
            onClick={() => {
              window.location.href = "/x90Plus";
            }}
          >
            JETOUR X90 PLUS
          </div>
        </div>
        <li
          onClick={() => {
            window.location.href = "/profile";
          }}
        >
          Company Profile
        </li>
        <li
          onClick={() => {
            window.location.href = "/partner";
          }}
        >
          Global Partners
        </li>
        <li
          onClick={() => {
            window.location.href = "/contact_us";
          }}
        >
          Contact Us
        </li>
        <li
          onClick={() => {
            window.location.href = "/faqs";
          }}
        >
          JETOUR FAQs
        </li>
      </ul>
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
      <div className="icon-list">
        <img
          onClick={() => {
            window.location.href = "https://www.instagram.com/jetourauto/";
          }}
          src="/data/tms/website/html/images/footer/4-1.png"
        />
        <img
          onClick={() => {
            window.location.href = "https://www.facebook.com/JETOUR.Global";
          }}
          src="/data/tms/website/html/images/footer/1-1.png"
        />
        <img
          onClick={() => {
            window.location.href = "https://www.youtube.com/@jetourauto";
          }}
          src="/data/tms/website/html/images/footer/3-1.png"
        />
        <img
          onClick={() => {
            window.location.href = "https://twitter.com/JETOUR_Global";
          }}
          src="/data/tms/website/html/images/footer/2-1.png"
        />
      </div>
      <div className="link-list">
        <div
          onClick={() => {
            window.location.href =
              "http://epc.mychery.com/epcm/main_index.shtml#";
          }}
        >
          EPCM
        </div>
        <div
          onClick={() => {
            window.location.href =
              "http://tms1.jetourglobal.com/app/admin/home";
          }}
        >
          TMS
        </div>
        <div
          onClick={() => {
            window.location.href = "https://idms.jetour.com.cn:8443/";
          }}
        >
          DMS
        </div>
      </div>
      <div className="text-list">
        <div >KAIFENG JETOUR AUTOMOBILE SALES CO.LTD</div>
      </div>
      <div className="text-list">
        <div onClick={() => {
          window.location.href = "/cookie"
        }}>Cookies</div>
        <div onClick={() => {
          window.location.href = "/agree"
        }}>Privacy</div>
      </div>
      <div className="copyright">© Copyright 2025 JETOUR Auto</div>
    </footer>
  );
}

ReactDOM.render(<FooterMb />, document.getElementById("footer-mb-box"));
