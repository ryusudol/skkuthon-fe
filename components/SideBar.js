import Link from "next/link";
import Image from "next/image";

import styles from "./SideBar.module.css";

const SideBar = ({ user }) => {
  if (!user) {
    return (
      <div>
        <Image
          src="/images/loading-gif.webp"
          alt="loading gif"
          width={250}
          height={250}
        />
      </div>
    );
  }

  const username = user.full_name;
  const id = user.patient_id;

  return (
    <section className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.profileImg}>
          <Image
            layout="responsive"
            src={"/images/patient.jpeg"}
            alt="Patient's Profile Pic"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.patientInfo}>
            <span>{username}</span>
            <span className={styles.id}>{id}</span>
          </div>
          <Link href="/add-diagnosis">
            <span className={styles.newDiagnosis}>새 진료 결과 입력</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
