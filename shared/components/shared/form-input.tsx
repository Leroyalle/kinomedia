import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Input } from '../ui';
import { useFormContext } from 'react-hook-form';
import { X } from 'lucide-react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  inputStyles?: string;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ label, name, inputStyles, className, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  return (
    <div className={cn('flex justify-center flex-col gap-2 text-black', className)}>
      {label && <p className="font-medium ">{label}</p>}
      <div className="relative">
        <div className="relative">
          <Input className={cn('h-12 text-md pr-12', inputStyles)} {...register(name)} {...props} />
          {value && (
            <X
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
              onClick={() => setValue(name, '', { shouldValidate: true })}
            />
          )}
        </div>
        {errorText && <p className="absolute text-red-500">{errorText}</p>}
      </div>
    </div>
  );
};
