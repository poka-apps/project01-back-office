import type { IHasOpen, IHasOptValue, ISelectOption } from '@/interfaces';
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
  ScrollArea,
  Button
} from '@/components/shadcn';

type TState = IHasOptValue<ISelectOption> & IHasOpen;

type TProps = IHasOptValue<TNullable<string>> & {
  onChange: (value?: ISelectOption) => void;
  options: ISelectOption[];
  onReset?: () => void;
  disabled?: boolean;
  text: string;
};

const VARIABLES = {
  initState: {
    open: false
  } as TState
};

export const ButtonFilterRadioGroup = ({ text, options, value, disabled, onChange, onReset }: TProps) => {

  const [state, setState] = useState<TState>({
    ...VARIABLES.initState,
    value: options.find(l => l.value === value)
  });

  const hasValue = !!state.value;

  const handleOnClickButton = () =>
    setState(l => ({ ...l, open: !l.open }));

  const handleOnClickButtonApply = () => {
    setState(l => ({ ...l, open: false }));
    onChange(state.value);
  };

  const handleOnValueChange = (optionValue: string) => {
    const value = options.find(l => l.value === optionValue);
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
              <span>:</span>
            }
            {
              hasValue &&
              <span className='text-red-800 font-semibold'>
                {state.value!.title}
              </span>
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-40' align='start'>
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup
              value={state.value?.value as any}
              className='max-h-80 flex flex-col'
              onValueChange={handleOnValueChange}>
              <ScrollArea className='flex-1 overflow-auto'>
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
              </ScrollArea>
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
