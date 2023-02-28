function Time(props) {
  return <time dateTime={`YYYY-MM-DDThh:mm:ssTZD  ${props.date}`}>{props.children}</time>;
}

export default Time;
