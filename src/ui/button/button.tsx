import { ButtonHTMLAttributes } from "react";
import Styles from "./styles.module.css";

export type ButtonVariant = "bold";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({ variant, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`${Styles.btn} ${rest.className} ${
        variant === "bold" ? Styles.btnBold : ""
      } `}
    />
  );
};

export default Button;
