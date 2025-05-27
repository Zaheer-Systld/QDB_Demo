import { useEffect, useState } from "react";
import { fetchUserById } from "../api/services.ts"; // Adjust the path accordingly
import { User } from "../types/types";

export const useUser = () => {
  const [user, setUser] = useState<User>();
  const [userId] = useState(() => Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    fetchUserById(userId)
      .then(setUser)
      .catch((error) => console.error(error));
  }, [userId]);

  return { user };
};
