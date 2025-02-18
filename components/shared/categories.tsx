'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}
const cats = [
  {
    id: 1,
    name: 'Pizza'
  },
  {
    id: 2,
    name: 'Sushi'
  },
  {
    id: 3,
    name: 'Burgers'
  },
  {
    id: 4,
    name: 'Desserts'
  },
  {
    id: 5,
    name: 'Drinks'
  },
];

export const Categories: React.FC<Props> = ({ className }) => {

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({name, id}, index) => (
        <a href={`/#${name}`} key={index} className={cn(
          'flex items-center font-bold h-11 rounded-2xl px-5',
          categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
        )}>
          {name}
        </a>
      ))}
    </div>
  );
};
