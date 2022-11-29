import cls from './PageError.module.scss';
import { memo } from 'react';
import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

export interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props;

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1 className={cls.title}>Something went wrong!</h1>
      <Button onClick={onReload}>Please, reload the page</Button>
    </div>
  );
});
