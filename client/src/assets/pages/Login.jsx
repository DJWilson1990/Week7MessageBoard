import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { LoggedInUser } from "../components/LoggedInUser";

export default function Login() {
  //   const [formData, setFormData] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  let loggedInUser = useContext(LoggedInUser);

  const handleChange = (event) => {
    setSearchParams({ username: event.target.value });
  };

  //   function handleChange(event) {
  //     const { name, value } = event.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:1212/users?username=` + searchParams.get("username")
    );
    let result = await response.json();
    console.log(result);
    if (result.length > 0) {
      loggedInUser.user_name = result[0].user_name;
      loggedInUser.user_id = result[0].id;
      console.log(loggedInUser);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        value={searchParams.username}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
