import { useState, useEffect } from "react";
// import { useEffect } from "react";

export default function NewMessageForm() {
  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    message: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:1212/categories`);
      let result = await response.json();
      setCategories(result);
    }
    getCategories();
  }, []);

  // might not need
  //   function handleForm(event) {
  //     setFormValues({
  //       ...formValues,
  //       [event.target.name]: event.target.value,
  //     });

  return (
    <form>
      <label>
        Category:
        <select>
          <option value="">Select...</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
        </select>
      </label>
      {/* <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formValues.title}
        onChange={handleForm}
      />
      <input
        type="text"
        id="message"
        name="message"
        value={formValues.message}
        onChange={handleForm}
      /> */}
    </form>
  );
}
