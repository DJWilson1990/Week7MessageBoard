import { useState, useEffect, useContext } from "react";
import { LoggedInUser } from "./LoggedInUser";
import "./NewMessageForm.css";

export default function NewMessageForm() {
  const [formData, setFormData] = useState({
    title: "",
    category_id: 0,
    user_id: 0,
    message: "",
  });

  const [categories, setCategories] = useState([]);

  const loggedInUser = useContext(LoggedInUser);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:1212/categories`);
      let result = await response.json();
      setCategories(result);
    }
    getCategories();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      user_id: loggedInUser.user_id,
    }));
    console.log("Form data submitted:", formData);
    const record = {
      title: formData.title,
      message: formData.message,
      category_id: formData.category_id,
      user_id: loggedInUser.user_id,
      time: "2024-02-25 19:32:00",
    };
    try {
      const response = await fetch(`http://localhost:1212/messages`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
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
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
