function AnchorPoint(props) {
  React.useEffect(() => {
    var defaults = {
      floorClass: ".scroll-floor",
      navClass: ".scroll-nav",
      activeClass: "scroll-nav-active",
      activeTop: 100,
      scrollTop: 100,
      delayTime: 200,
    };

    var $body = $("body"),
      floorList = null,
      navList = null;
    function getItem(_list, newOptions) {
      var data = [];
      _list.each(function () {
        var item = {};
        item.$obj = $body.find(this);
        item.$activeTop = $body.find(this).offset().top - newOptions.activeTop;
        item.$scrollTop = $body.find(this).offset().top + newOptions.scrollTop;

        data.push(item);
      });
      return data;
    }

    function scrollActive(_list, newOptions) {
      var nowScrollTop = $(window).scrollTop();
      var data = getItem(floorList, newOptions);

      $.each(data, function (i, item) {
        if (nowScrollTop > item.$activeTop) {
          _list
            .removeClass(newOptions.activeClass)
            .eq(i)
            .addClass(newOptions.activeClass);
        }
      });
    }

    function clickActive(_index, newOptions) {
      var data = getItem(floorList, newOptions);
      $("html,body").animate(
        { scrollTop: data[_index].$scrollTop },
        newOptions.delayTime
      );
    }

    var scroll_floor = (window.scrollFloor = function (options) {
      var newOptions = $.extend({}, defaults, options);
      floorList = $body.find(newOptions.floorClass);
      navList = $body.find(newOptions.navClass);

      scrollActive(navList, newOptions);

      $(window).bind("scroll", function () {
        scrollActive(navList, newOptions);
      });
      navList.bind("click", function () {
        var _index = $body.find(this).index();
        clickActive(_index, newOptions);
      });
    });
    scrollFloor({
      floorClass: ".scroll-floor", //楼层盒子class;默认为'.scroll-floor'
      navClass: ".scroll-nav", //导航盒子class;默认为'.scroll-nav'
      activeClass: "scroll-nav-active", //导航高亮class;默认为'active'
      delayTime: 500, //点击导航，滚动条滑动到该位置的时间间隔;默认为200
      activeTop: 200, //楼层到窗口的某个位置时，导航高亮（设置该位置）;默认为100
      scrollTop: 0, //点击导航，楼层滑动到窗口的某位置;默认为100
    });
  }, []);
  const nav = props.navList.map((item, i) => {
    return (
      <li className="scroll-nav" key={i}>
        {item}
      </li>
    );
  });
  return (
    <div className="anchor-point-box">
      <img src={props.logo} />
      <ul className="anchor-point">{nav}</ul>
      <div
        className="btn button-bubble"
        onClick={() => {
          $("#drive").css("display", "block");
        }}
      >
        Test Drive
      </div>
    </div>
  );
}
