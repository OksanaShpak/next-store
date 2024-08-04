import { cn } from '@/lib/utils';
import React from 'react';
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "@/components/shared";
import { Input, RangeSlider } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title
        text="Filters"
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />
      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Dough type"
          value="1"
        />
        <FilterCheckbox
          text="New"
          value="2"
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pt-7">
        <p className="font-bold mb-3">Price from and to</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={500} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Cheese',
            value: '1'
          },
          {
            text: 'Tomato',
            value: '2'
          },
          {
            text: 'Mushrooms',
            value: '3'
          },
          {
            text: 'Bacon',
            value: '4'
          },
          {
            text: 'Pepperoni',
            value: '5'
          },
          {
            text: 'Olives',
            value: '6'
          },
          {
            text: 'Pepperoni',
            value: '7'
          },
          {
            text: 'Olives',
            value: '8'
          }
        ]}
        items={[
          {
            text: 'Cheese',
            value: '1'
          },
          {
            text: 'Tomato',
            value: '2'
          },
          {
            text: 'Mushrooms',
            value: '3'
          },
          {
            text: 'Bacon',
            value: '4'
          },
          {
            text: 'Pepperoni',
            value: '5'
          },
          {
            text: 'Olives',
            value: '6'
          },
          {
            text: 'Pepperoni',
            value: '7'
          },
          {
            text: 'Olives',
            value: '8'
          },
          {
            text: 'Cheese',
            value: '9'
          },
          {
            text: 'Tomato',
            value: '10'
          },
          {
            text: 'Mushrooms',
            value: '11'
          },
          {
            text: 'Bacon',
            value: '12'
          },
          {
            text: 'Pepperoni',
            value: '13'
          },
          {
            text: 'Olives',
            value: '14'
          },
          {
            text: 'Pepperoni',
            value: '15'
          },
          {
            text: 'Olives',
            value: '16'
          }
        ]}
      />
    </div>
  )
}

