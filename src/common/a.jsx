function Anchor(props) {
  return (
    <a className={`blog-link ${props.className || ""}`} href={props.href}>
      {props.children}
    </a>
  );
}

export default Anchor;
