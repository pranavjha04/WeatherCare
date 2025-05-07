import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Protect({ children }) {
  const { isAuthenticated } = useSelector((store) => store.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default memo(Protect);
