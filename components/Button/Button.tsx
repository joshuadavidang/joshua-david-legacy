import styles from "./button.module.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  children: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "w-1/2 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2",
        `${styles.btn}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
