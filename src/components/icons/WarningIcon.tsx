import { SVGProps } from "react";

const WarningIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.73667 1.11004C9.44834 0.565044 8.55167 0.565044 8.26334 1.11004L0.76334 15.2767C0.695826 15.4037 0.662355 15.546 0.66619 15.6897C0.670024 15.8335 0.711031 15.9738 0.785217 16.097C0.859403 16.2202 0.964237 16.3221 1.0895 16.3927C1.21477 16.4633 1.3562 16.5003 1.50001 16.5H16.5C16.6437 16.5003 16.785 16.4634 16.9102 16.3928C17.0354 16.3222 17.1402 16.2204 17.2143 16.0973C17.2884 15.9741 17.3293 15.8339 17.3331 15.6902C17.3369 15.5466 17.3034 15.4044 17.2358 15.2775L9.73667 1.11004ZM9.83334 14H8.16667V12.3334H9.83334V14ZM8.16667 10.6667V6.50004H9.83334L9.83417 10.6667H8.16667Z"
        fill="#FF5562"
      />
    </svg>
  );
};

export default WarningIcon;