import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  icon?: React.ReactElement;
}

const Button = ({ children, icon, className, ...rest }: Props) => {
  return (
    <button className={`${className}`} {...rest}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
export type { Props as ButtonProps };
