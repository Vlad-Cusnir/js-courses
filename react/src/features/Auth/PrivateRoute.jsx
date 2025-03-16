import { useNavigate } from "react-router";
import { useAuthContext } from "./AuthContext";
import { useEffect } from "react";

export function PrivateRoute({children}) {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate('/login');
    }
  }, [user]);

  if(!user) {
    return null;
  }

  return children;
}
