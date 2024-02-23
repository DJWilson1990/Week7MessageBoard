import { useState } from "react";
import { useEffect } from "react";

export default function NewMessageForm() {
  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    message: "",
  });

  const [categories, setCategories] = useState([
    {
      id: 1,
      category_name: "test",
    },
  ]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  async function getCategories() {
    const response = await fetch(`http://localhost:1212/categories`);
    let result = await response.json();
    console.log(result);
    return result;
  }

  return (
    <form>
      <label>
        Category:
        <select>
          <option value="">Select...</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </label>
    </form>
  );
}
