import { useRef } from "react";

import styles from "../../styles/AddDiagnosis.module.css";

const AddDiagnosis = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();

  const onSaveClick = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const data = JSON.stringify({
      license_number: ref1.current.value,
      medical_institution: ref2.current.value,
      doctor_name: ref3.current.value,
      patient_id: ref4.current.value,
      diagnosis_code: ref5.current.value,
      onset_date: ref6.current.value,
      diagnosis_date: ref7.current.value,
      prognosis: ref8.current.value,
      hospitalization_dates: ref9.current.value,
    });

    fetch("/pdf/upload_diagnosis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="doc-num">의사 면허 번호</label>
        <input id="doc-num" type="text" ref={ref1} />
      </div>
      <div>
        <label htmlFor="institution">의료기관명</label>
        <input id="institution" type="text" ref={ref2} />
      </div>
      <div>
        <label htmlFor="doc-name">의사 성명</label>
        <input id="doc-name" type="text" ref={ref3} />
      </div>
      <div>
        <label htmlFor="patient-id">환자 주민등록번호</label>
        <input id="patient-id" type="text" ref={ref4} />
      </div>
      <div>
        <label htmlFor="ill-num">한국 질병 분류 번호</label>
        <input id="ill-num" type="text" ref={ref5} />
      </div>
      <div>
        <label htmlFor="sick-date">발병일</label>
        <input id="sick-date" type="text" ref={ref6} />
      </div>
      <div>
        <label htmlFor="diagnosis-date">진단일</label>
        <input id="diagnosis-date" type="text" ref={ref7} />
      </div>
      <div>
        <label htmlFor="prognosis">향후 치료 소견</label>
        <input id="prognosis" type="text" ref={ref8} />
      </div>
      <div>
        <label htmlFor="hospitalization-date">입원일</label>
        <input id="hospitalization-date" type="text" ref={ref9} />
      </div>
      <button onClick={onSaveClick}>저장</button>
    </form>
  );
};

export default AddDiagnosis;
