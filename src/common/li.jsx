

function Li(props) {
  return (
    <li className={`blog-list ${props.className || ""}`}>
    {props.children}
    </li>
  );
}

export default Li;
