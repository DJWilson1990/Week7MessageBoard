import { createContext } from "react";

export const LoggedInUser = createContext({
  user_id: 0,
  user_name: "dan",
  first_name: "daniel",
  last_name: "wilson",
});
