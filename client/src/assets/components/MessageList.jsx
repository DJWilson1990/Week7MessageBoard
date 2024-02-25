import MessageView from "./MessageView";

export default function MessageList(props) {
  return (
    <div className="message-list">
      {props.props.map((message) => (
        <MessageView key={message.id} props={message} />
      ))}
    </div>
  );
}
