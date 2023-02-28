function Img(props) {
  return (
    <img
      className={`project-image ${props.className}`}
      src={props.src}
      alt={props.alt}
    />
  );
}

export default Img;
