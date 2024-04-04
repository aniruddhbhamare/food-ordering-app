import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnlineStatus(false);
      console.log("isOnline", e);
    });

    window.addEventListener("online", (e) => {
      setOnlineStatus(true);
      console.log("isOnline", e);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
