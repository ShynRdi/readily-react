import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useLoginChecker() {
  const userLocation = useLocation();
  const navigate = useNavigate();
  const username = localStorage.getItem("userName");
  useEffect(() => {
    if (
      (username == null || username == undefined || username == "") &&
      userLocation.pathname !== "/login"
    ) {
      navigate("/");
    }
  }, []);
}
