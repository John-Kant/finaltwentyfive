function Line(props) {
    React.useEffect(() => {
      AOS.init({ animation: 2000, delay: 1000 });
    }, []);
    const [value, setValue] = React.useState(0);
    const [line, setLine] = React.useState([]);
  
    const onClickEvent = (e) => {
      e.preventDefault();
      CityServiceData.findLineByCity(props.id)
        .then((response) => {
          setLine(response.data);
          const line = response.data;
          console.log(line);
        })
        .catch((e) => {
          console.log(e);
        });
      setValue(newValue);
    };
  
    return (<div onClick={onClickEvent}></div>)
}