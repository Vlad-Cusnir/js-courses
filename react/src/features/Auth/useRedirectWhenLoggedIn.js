import { useNavigate } from "react-router";
import { useAuthContext } from "./AuthContext";
import { useEffect } from "react";

export function useRedirectWhenLoggedIn() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate('/');
    }
  }, [user]);
}
