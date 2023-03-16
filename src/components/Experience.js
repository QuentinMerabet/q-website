export default function Experience(props) {
  return (
    <div className="flex flex-col mb-6">
      <h3>{props.title}</h3>
      <span>{props.company}</span>
      <span className="subtext">
        {props.from} — {props.to}
      </span>
    </div>
  );
}
