import { useEffect, useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://week7messageboard.onrender.com/users`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="user_name">Username</label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        value={formData.user_name}
        onChange={handleChange}
      />

      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        name="first_name"
        id="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />

      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}
