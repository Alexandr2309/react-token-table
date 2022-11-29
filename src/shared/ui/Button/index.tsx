import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'normal',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: IButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
  } = props;

  return (
    <button
      className={classNames(cls.index, {}, [className, cls[theme], cls[size]])}>
      {children}
    </button>
  );
};
