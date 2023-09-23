import { useState, useEffect } from "react";

import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_id: "000001-0000000",
        password: "skkuthon",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.access_token;
        localStorage.setItem("token", token);

        fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/user/get_user`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUser(data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}
