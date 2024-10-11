import React from 'react';
import { Button, Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { LoginForm, RegisterForm } from './forms';
import { signIn } from 'next-auth/react';

interface Props {
  open: boolean;
  onClose: VoidFunction;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login');
  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[450px p-10 bg-black">
        {type === 'login' ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
        <hr />
        <div className="flex gap-2">
          <Button
            type="button"
            className="gap-2 h-12 p-2 flex-1"
            onClick={() =>
              signIn('github', {
                callbackUrl: '/',
                redirect: true,
              })
            }>
            <img className="w-6 h-6" src="https://github.githubassets.com/favicons/favicon.svg" />
            GitHub
          </Button>

          <Button type="button" className="gap-2 h-12 p-2 flex-1">
            <img
              className="w-6 h-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
        <Button variant={'outline'} type="button" onClick={onSwitchType}>
          {type !== 'login' ? 'Вход' : 'Регистрация'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
