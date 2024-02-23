import { useState } from "react";
import { useEffect } from "react";
import NewMessageForm from "../components/NewMessageForm";

export default function Post() {
  return (
    <div>
      <h1>Post a message</h1>
      <NewMessageForm />
    </div>
  );
}
