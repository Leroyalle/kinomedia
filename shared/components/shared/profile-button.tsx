import React from 'react';
import Link from 'next/link';
import { Button } from '../ui';
import { useSession } from 'next-auth/react';
import { CircleUser } from 'lucide-react';

interface Props {
  onClickSignIn: VoidFunction;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ onClickSignIn, className }) => {
  const session = useSession();
  return (
    <>
      {!session.data?.user ? (
        <Button onClick={onClickSignIn} className="text-md" variant={'link'}>
          Войти
        </Button>
      ) : (
        <Link href="/profile">
          <Button className="flex items-center gap-2">
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </>
  );
};
