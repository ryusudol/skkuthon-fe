import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import DiagnoseCard from "@/components/DiagnoseCard";
import styles from "../styles/Main.module.css";

export default function Home() {
  const [diagnosis, setDiagnosis] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/user/find_medical_history`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDiagnosis(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!diagnosis || diagnosis.length === 0) {
    return (
      <div className={styles.loading}>
        <Image
          src={"/images/loading-gif.webp"}
          alt="loading gif"
          width={240}
          height={240}
        />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>SKKU Medical</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul className={styles.diagnosisList}>
          {diagnosis.map((diagnosis, idx) => (
            <li key={idx}>
              <DiagnoseCard diagnosis={diagnosis} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
