function Li(props) {
  return (
    <li className={`blog-list ${props.className || ""}`}>
      <time dateTime={props.dateTime}>{props.children}</time>{" "}
      <a
        className={`blog-link ${props.className || ""}`}
        href={props.herf}
      >
       {props.children}
      </a>
    </li>
  );
}

export default Li;
