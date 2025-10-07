function SpecificationMb(props) {
  const [activeId, setActiveId] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [ulShow, setUlShow] = React.useState(false);
  const table = props.specificationData.spacification[currentIndex].content.map((item, index) => {
    return (
      <div className="table" key={index}>
        <div
          onClick={() => {
            setActiveId(activeId == item.id ? -1 : item.id);
          }}
          className="table-header"
        >
          <div>{item.title}</div>
          <img
            src={
              activeId == item.id
                ? "/data/tms/website/html/images/carModel/minus.png"
                : "/data/tms/website/html/images/carModel/plus.png"
            }
          />
        </div>
        <ul
          style={{
            height: activeId == item.id ? "auto" : "0",
            maxHeight: activeId == item.id ? "1000vh" : "0",
            visibility: activeId == item.id ? "visible" : "hidden",
          }}
        >
          {item.children.map((v, i) => {
            return (
              <li key={i}>
                <div>{v.name}</div>
                <div>{v.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  const model = props.specificationData.modelname.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          setCurrentIndex(index);
          setUlShow(false);
        }}
      >
        {item.name}
      </li>
    );
  });
  const overflowList = props.specificationData.overflow[currentIndex].children.map((item, index) => {
    return (
      <li key={index}>
        <div>{item.name}</div>
        <div>{item.content}</div>
      </li>
    );
  });
  React.useEffect(() => {
    ScrollReveal().reveal(".page-title", {
      reset: true,
      duration: 1500,
      opacity: 0,
      scale: 1,
      distance: "50px", //动画的距离
      origin: "top",
      easing: "linear",
      beforeReveal: () => {},
    });
  }, []);
  return (
    <div className="specification-mb">
      <h2 className="page-title">SPECIFICATION</h2>
      <div className="header">
        <div className="header-title">Model name:</div>
        <div
          className="select"
          onClick={() => {
            setUlShow(!ulShow);
          }}
        >
          <div>{props.specificationData.modelname[currentIndex].name}</div>
          <img src="/data/svg/arrow.svg" />
          {ulShow ? <ul>{model}</ul> : ""}
        </div>
      </div>
      <div className="part1">
        <div className="title">OVERVIEW</div>
        <ul>{overflowList}</ul>
      </div>
      {table}
    </div>
  );
}
