export default function MessageView(props) {
  console.log(props);
  return (
    <div className="message-view">
      <h1>{props.props.title}</h1>
      <h3>{props.props.category_name}</h3>
      <h4>{props.props.user_name}</h4>
      <p>{props.props.message}</p>
      <p>{props.props.time}</p>
    </div>
  );
}
