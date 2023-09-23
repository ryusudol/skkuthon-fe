import Image from "next/image";

import styles from "./DiagnoseCard.module.css";

const DiagnoseCard = ({ diagnosis }) => {
  const date = diagnosis.hospitalization_dates.split(" 00:")[0];

  return (
    <div>
      <Image
        layout="responsive"
        src={"/images/pdf-logo.png"}
        alt="pdf image"
        width={100}
        height={100}
      />
      <div className={styles.infoWrapper}>
        <span>{diagnosis.medical_institution}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default DiagnoseCard;
