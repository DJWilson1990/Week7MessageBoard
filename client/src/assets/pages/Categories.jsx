import { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category_name: "" });

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
    try {
      const response = await fetch(`http://localhost:1212/categories`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.category_name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category_name">Add Category Name</label>
        <input
          type="text"
          name="category_name"
          id="category_name"
          value={formData.category_name}
          onChange={handleChange}
        />
        <button type="submit">Add category</button>
      </form>
    </div>
  );
}
