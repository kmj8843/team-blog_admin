import Input from "../../components/Input";
import styles from "./guide.module.css";

const Guide = () => {
  return (
    <>
      <div className={styles.box}>
        <h2>Input</h2>
        <div className={styles['input-guide']}>
          <div>
            <h3>라벨 있는거</h3>
            <Input label={'test'}></Input>
          </div>
          <div>
            <h3>라벨 없는거</h3>
            <Input></Input>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <h2>Button</h2>

      </div>
    </>
  );
}

export default Guide;
