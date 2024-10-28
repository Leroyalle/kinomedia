'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Search, X } from 'lucide-react';
import { Input } from '../ui';
import { useClickAway, useDebounce } from 'react-use';
import { Api } from '@/shared/services/api-client';
import { MovieDTO } from '@/@types/mediaDTO';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const [movies, setMovies] = React.useState<MovieDTO[]>([]);
  const limit = 5;

  useClickAway(ref, () => {
    setIsFocused(false);
  });

  const onClickItem = () => {
    setIsFocused(false);
    setValue('');
  };

  useDebounce(
    async () => {
      try {
        const data = await Api.search.getAll(`&query=${value}&limit=${limit}`);
        setMovies(data.docs);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [value],
  );

  return (
    <>
      {isFocused && <div className="fixed top-0 left-0 bottom-0 right-0 □ bg-black/60 z-30" />}
      <div ref={ref} className={cn('flex items-center relative z-30', className)}>
        <div className="flex items-center relative">
          <label htmlFor="search">
            <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-500" />
          </label>
          <Input
            className="text-black font-semibold text-lg rounded-2xl outline-none w-full min-w-96 bg-gray-100 pl-11 pr-8"
            placeholder="Найти фильм..."
            type="text"
            id="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onFocus={() => setIsFocused(true)}
            autoComplete="off"
          />
          {value && (
            <X onClick={() => setValue('')} className="absolute right-3 text-gray-500" size={20} />
          )}
        </div>
        {movies.length > 0 && (
          <div
            className={cn(
              'text-black font-semibold text-lg absolute top-[46px] bg-white w-full py-2 shadow-md transition-all rounded-xl duration-200 invisible opacity-0 z-30',
              isFocused && 'visible opacity-100 top-12',
            )}>
            {movies.map((movie) => (
              <Link
                onClick={onClickItem}
                key={movie.id}
                className="px-3 py-4 hover:bg-primary/10 cursor-pointer flex gap-3 items-center"
                href={`/media/${movie.id}`}>
                <img
                  src={movie.poster.url ?? movie.poster.previewUrl}
                  alt={movie.name}
                  className="rounded-sm h-8 w-8 object-cover"
                />
                <span>{movie.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
