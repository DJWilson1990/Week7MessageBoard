import { useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { LoggedInUser } from "../components/LoggedInUser";

export default function Login() {
  //   const [formData, setFormData] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  let loggedInUser = useContext(LoggedInUser);

  const handleChange = (event) => {
    setSearchParams({ username: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      // http://localhost:1212

      `https://week7messageboard.onrender.com/users?username=` +
        searchParams.get("username")
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
    <div>
      <p>
        Sign in or <Link to="/registration">Register account</Link>
      </p>
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
    </div>
  );
}
