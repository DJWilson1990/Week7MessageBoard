import "./MessageView.css";

export default function MessageView(props) {
  console.log(props);
  return (
    <div className="message-view">
      <p className="title">Title: {props.props.title}</p>
      <p className="category">Category: {props.props.category_name}</p>
      <p className="user_name">
        Author: {props.props.first_name} {props.props.last_name}
      </p>
      <p className="message">Message: {props.props.message}</p>
      {/* <p className="time">Time: {props.props.time}</p> */}
    </div>
  );
}
