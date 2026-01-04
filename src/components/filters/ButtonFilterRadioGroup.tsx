import type { ISelectOption } from '@/interfaces';
import type { TNullable } from '@/types';
import { CircleX } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
  Button
} from '@/components/shadcn';

interface IState {
  value?: ISelectOption;
  open: boolean;
}

type TProps = {
  onChange: (value?: ISelectOption) => void;
  value?: TNullable<string>;
  options: ISelectOption[];
  onReset?: () => void;
  disabled?: boolean;
  text: string;
};

const VARIABLES = {
  initState: {
    open: false
  } as IState
};

export const ButtonFilterRadioGroup = ({ text, options, value, disabled, onChange, onReset }: TProps) => {

  const [state, setState] = useState<IState>({
    ...VARIABLES.initState,
    value: options.find(l => l.value === value)
  });

  const hasValue = !!state.value;

  const handleOnClickButton = () => {
    setState(l => ({ ...l, open: !l.open }));
  };

  const handleOnClickButtonApply = () => {
    setState(l => ({ ...l, open: false }));

    onChange(state.value);
  };

  const handleOnValueChange = (optionValue: string) => {
    const value = options.find(l => l.value === optionValue);
    console.log({ optionValue, value });

    setState(l => ({ ...l, value }));
  };

  const handleOnClickBtnReset = () => {
    // Reset value
    setState(VARIABLES.initState);
    // Apply filter
    onChange();
    // Reset
    onReset?.();
  };

  const handleOnClickMenuItem = (e: any) =>
    e.preventDefault();

  return (
    <div className='flex items-center my-auto'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={`space-x-1 border border-dashed text-xs items-center ${hasValue && 'border-r-0 rounded-r-none'}`}
            variant={hasValue ? 'secondary' : 'ghost'}
            onClick={handleOnClickButton}
            disabled={disabled}
            size={'sm'}>
            <span>
              {text}
            </span>
            {
              hasValue &&
              <span className='text-purple-600 font-semibold'>
                : {state.value!.title}
              </span>
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-40' align='start'>
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup
              value={state.value?.value as any}
              onValueChange={handleOnValueChange}>
              {
                options
                  .map(
                    item => (
                      <DropdownMenuRadioItem
                        key={item.value as any}
                        value={item.value as any}
                        onSelect={handleOnClickMenuItem}
                        className='cursor-pointer'>
                        {item.title}
                      </DropdownMenuRadioItem>
                    )
                  )
              }
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='p-0'>
              <Button
                className='w-full h-8 m-0 p-0 text-xs'
                onClick={handleOnClickButtonApply}
                variant={'default'}
                size={'sm'}>
                Appliquer
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {
        hasValue &&
        <Button
          className='space-x-1 border border-dashed border-l-0 rounded-l-none text-xs'
          variant={hasValue ? 'secondary' : 'ghost'}
          title='Supprimer le filtre'
          onClick={handleOnClickBtnReset}
          disabled={disabled}
          size={'sm'}>
          <CircleX size={16} />
        </Button>
      }
    </div>
  );

};
