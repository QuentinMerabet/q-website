export default function Project(props) {
  return (
    <div className="flex flex-col">
      <h3>{props.title}</h3>
      <span className="subtext">{props.client}</span>
      <div className="mt-3 flex flex-col">{props.children}</div>
    </div>
  );
}
