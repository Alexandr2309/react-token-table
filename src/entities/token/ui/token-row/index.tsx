import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface indexProps {
  className?: string;
}

export const TaskRow = ({ className }: indexProps) => {
  return <tr className={classNames(cls.index, {}, [className])}></tr>;
};
