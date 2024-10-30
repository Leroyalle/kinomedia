import React from 'react';

interface Props {
  code: string;
}

export const VerificationCodeTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <p>
        Код подтверждения: <h2>{code}</h2>
      </p>
      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>Подтвердить регистрацию</a>
      </p>
    </div>
  );
};
