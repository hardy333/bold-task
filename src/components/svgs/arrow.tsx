import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Arrow = ({ ...props }: Props) => {
  return (
    <>
      <svg
        {...props}
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12L12 1M12 1H2.89655M12 1V10.1034"
          stroke="currentcolor"
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};

export default Arrow;
