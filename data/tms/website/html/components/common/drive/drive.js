function Drive() {
  const [countryList, setCountryList] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [firstNameReq, setFirstNameReq] = React.useState(false);
  const [lastNameReq, setLastNameReq] = React.useState(false);
  const [countryReq, setCountryReq] = React.useState(false);
  const [ulShow, setUlShow] = React.useState(false);
  const [emailReq, setEmailReq] = React.useState(false);
  const [isAgree, setIsAgree] = React.useState(false);
  const [agreeMsg, setAgreeMsg] = React.useState(false);
  const [black, setBlack] = React.useState(false);
  const send = () => {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!firstName) {
      setFirstNameReq(true);
      return;
    } else {
      setFirstNameReq(false);
    }
    if (!lastName) {
      setLastNameReq(true);
      return;
    } else {
      setLastNameReq(false);
    }
    if (!country) {
      setCountryReq(true);
      return;
    } else {
      setCountryReq(false);
    }
    if (!reg.test(email)) {
      setEmailReq(true);
      return;
    } else {
      setEmailReq(false);
    }
    if (!isAgree) {
      setAgreeMsg(true);
      return;
    } else {
      setAgreeMsg(false);
    }
    $("#drive").css("display", "none");
    $("body").css("overflow", "auto");
    let name = countryList.find((item) => {
      return item.country_name_en == country;
    });
    var activity_name = "Test Drive";
    if($("#drive").data("testdrivecar") != null){
    	activity_name = $("#drive").data("testdrivecar");
    }
    let data = {
      first_name: firstName,
      last_name: lastName,
      country: name.country_name_en,
      mail: email,
      tel: mobile,
      channel: "Test Drive",
      activity_name: activity_name,
      langCode: "en",
    };
    if (black) {
      $.ajax({
        url: "/prj/archive/addInformation",
        type: "post",
        dataType: "json",
        data: data,
        success: function (res) {
          if (res.code == 200) {
            setFirstName("");
            setLastName("");
            setCountry("");
            setMobile("");
            setEmail("");
            setAgreeMsg(false);
            message.success("Submit successfully !");
          }else{
            message.success("Please try again later !");
          }
        },
      });
    }
  };
  const fuzzyQuery = (list, keyWord) => {
    var reg = new RegExp(keyWord);
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (reg.test(list[i].country_name_en)) {
        arr.push(list[i]);
      }
    }
    return arr;
  };
  const GetCountryList = () => {
    $.ajax({
      url: "/prj/archive/getCountryList?categoryCode=contactus",
      type: "post",
      dataType: "json",
      success: (res) => {
        console.log(res);
        if (res.code == 200) {
          setCountryList(res.data);
        }
      },
    });
  };
  React.useEffect(() => {
    GetCountryList();
  }, []);

  const li = countryList.map((item, index) => {
    return (
      <li
        onClick={() => {
          setCountry(item.country_name_en);
          setUlShow(false);
          setBlack(true);
        }}
        key={index}
      >
        {item.country_name_en}
      </li>
    );
  });
  return (
    <div className="drive">
      <div className="title">TEST DRIVE</div>
      <div className="box">
        <div className="left">
          <div className="top">
            <span>*</span>
            <input
              type="text"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              placeholder="First Name"
            />
          </div>
          {firstNameReq ? (
            <div className="bottom1">First Name is a required field.</div>
          ) : (
            ""
          )}
        </div>
        <div className="left">
          <div className="top">
            <span>*</span>
            <input
              type="text"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              placeholder="Last Name"
            />
          </div>
          {lastNameReq ? (
            <div className="bottom1">Last Name is a required field.</div>
          ) : (
            ""
          )}
        </div>
        <div className="left">
          <div className="top">
            <span>*</span>
            <input
              onChange={(e) => {
                if (fuzzyQuery(countryList, e.target.value).length > 0) {
                  setCountryList(fuzzyQuery(countryList, e.target.value));
                }
                if (!e.target.value) {
                  GetCountryList();
                }
                let name = countryList.find((item) => {
                  return item.country_name_en == e.target.value;
                });
                if (name) {
                  setBlack(true);
                }
                setUlShow(!ulShow);
                setCountry(e.target.value);
              }}
              onClick={() => {
                setUlShow(!ulShow);
                setBlack(false);
              }}
              value={country}
              type="text"
              placeholder="Country"
            />
            <img src="/data/tms/website/html/images/contact/arrow.png" alt="" />
          </div>
          {countryReq ? (
            <div className="bottom1">Country is a required field.</div>
          ) : (
            ""
          )}
          {ulShow ? <ul>{li}</ul> : ""}
        </div>
        <div className="left">
          <div className="top">
            <span>*</span>
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="E-mail"
            />
            <span className="password_icon"><img src="/data/tms/website/html/images/contact/password_off.png" className="off" alt="" /><img src="/data/tms/website/html/images/contact/password_on.png" className="on" alt="" /></span>
          </div>
          {emailReq ? (
            <div className="bottom1">E-mai is a required field.</div>
          ) : (
            ""
          )}
        </div>
        <div className="left">
          <div className="top">
            <input
              onInput={(e) => {
                setMobile(e.target.value);
              }}
              value={mobile}
              type="text"
              placeholder="Mobile"
            />
            <span className="password_icon"><img src="/data/tms/website/html/images/contact/password_off.png" className="off" alt="" /><img src="/data/tms/website/html/images/contact/password_on.png" className="on" alt="" /></span>
          </div>
        </div>
        <div className="box6">
          <div
            className="select"
            onClick={() => {
              setIsAgree(!isAgree);
            }}
          >
            {isAgree ? <img src="/data/tms/website/html/images/common/select.png" alt="" /> : ""}
          </div>
          <div
            className="text"
            onClick={() => {
              window.open("/agree");
            }}
          >
            I have read and agree to the <span>Privacy Policy</span>.
          </div>
          {agreeMsg ? (
            <div className="bottom1">Please agree to the privacy agreement</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="send-mb" onClick={send}>
        Send
      </div>
      <div
        onClick={send}
        className={
          firstName && lastName && country && email && isAgree && black
            ? "send1"
            : "send"
        }
      >
        Send
      </div>
      <div
        className="close"
        onClick={() => {
          $("#drive").css("display", "none");
          $("body").css("overflow", "auto");
        }}
      >
        <img src="/data/tms/website/html/images/common/close.png" />
      </div>
      <div
        onClick={() => {
          $("#drive").css("display", "none");
          $("body").css("overflow", "auto");
        }}
        className="close-mb"
      >
        <img src="/data/tms/website/html/images/about/video/close.png" />
      </div>
    </div>
  );
}

$(document).ready(function () {
  $('.model-test-drive input[name="email"]').after('<div class="password_icon"><img src="/data/tms/website/html/images/contact/password_off.png" class="off" alt="" /><img src="/data/tms/website/html/images/contact/password_on.png" class="on" alt="" /></div>')
  $('.model-test-drive input[name="mobile"]').after('<div class="password_icon"><img src="/data/tms/website/html/images/contact/password_off.png" class="off" alt="" /><img src="/data/tms/website/html/images/contact/password_on.png" class="on" alt="" /></div>')
  $('.model-test-drive .password_icon').click(function () {
    if ($(this).hasClass('on')) {
      $(this).removeClass('on')
      $(this).parent().find('input').attr('type','password')
    } else {
      $(this).addClass('on')
      $(this).parent().find('input').attr('type','text')
    }
  })
  $('#drive .password_icon').click(function () {
    if ($(this).hasClass('on')) {
      $(this).removeClass('on')
      $(this).parent().find('input').attr('type','password')
    } else {
      $(this).addClass('on')
      $(this).parent().find('input').attr('type','text')
    }
  })
});