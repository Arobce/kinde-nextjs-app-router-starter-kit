"use client";

import { useEffect, useState } from "react";

export default function UploadProfilePic() {
  const [user, setUser] = useState<any>();
  const [authStatus, setAuthStatus] = useState(null);
  const [permissions, setPermissions] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [baseAccessToken, setBaseAccessToken] = useState(null);

  console.log(user);

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/kindeSession");
      const data = await res.json();
      setUser(data.user);
      setAuthStatus(data.authenticated);
      setPermissions(data.permissions);

      setAccessToken(data.rawAccessToken);

      setBaseAccessToken(data.accessToken);
    };

    getKindeSession();
    
  }, [])

  return (
    <div>
        {/* <h1>Item</h1> */}

        {authStatus}
        {JSON.stringify(user ?? {})}
        {JSON.stringify(permissions ?? {})} 
        {JSON.stringify(baseAccessToken ?? {})}
    </div>
  )

};