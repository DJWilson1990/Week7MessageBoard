import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const response = await fetch(`http://localhost:1212/messages`);
      let result = await response.json();
      setMessages(result);
    }
    getMessages();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:1212/categories`);
      let result = await response.json();
      setCategories(result);
    }
    getCategories();
  }, []);
  // console.log(messages);

  function handleChange(event) {
    event.preventDefault();
    getCategoriesAsync(event.target.value);
  }

  async function getCategoriesAsync(category_id) {
    const response = await fetch(
      `http://localhost:1212/messages?category_id=` + category_id
    );
    let result = await response.json();
    setMessages(result);
  }

  return (
    <div>
      <h1 className="message-page-title">Read messages</h1>
      <label>
        Category:
        <select name="category_id" onChange={handleChange}>
          <option value="">Select...</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
        </select>
      </label>
      <MessageList props={messages} />
    </div>
  );
}
