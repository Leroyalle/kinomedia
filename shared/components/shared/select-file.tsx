import React from 'react';
import { Button, Input } from '../ui';
import toast from 'react-hot-toast';
import { useProfileStore } from '@/shared/store';

interface Props {
  title?: string;
}

export const SelectFile: React.FC<Props> = ({ title = 'Выбрать файл' }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const changeAvatar = useProfileStore((state) => state.changeAvatar);

  const onClickSelectFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onUploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    try {
      const formData = new FormData();

      const file = event.target.files[0];
      formData.append('avatar', file);

      await changeAvatar(formData);

      toast.error('Аватар успешно обновлен', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Не удалось измегить аватар', {
        icon: '❌',
      });
      console.log('Error [ON_UPLOAD_IMAGE]', error);
    }
  };

  return (
    <>
      <Button
        onClick={() => onClickSelectFile()}
        variant="link"
        type={'button'}
        className="text-[hsla(0,0%,100%,.3)] text-center">
        {title}
      </Button>
      <Input
        ref={inputRef}
        type="file"
        className="invisible h-0 w-0 opacity-0"
        onChange={(event) => onUploadFile(event)}
        accept=".png,.jpg,.svg"
      />
    </>
  );
};
