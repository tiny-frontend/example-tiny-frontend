import styles from "./button.module.css";

export const Button: React.FC<JSX.IntrinsicElements["button"]> = (props) => {
  return <button {...props} className={styles.button} />;
};
