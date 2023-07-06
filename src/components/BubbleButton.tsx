import { ComponentProps, ReactNode } from 'react';

export interface BubbleButonProps extends ComponentProps<'button'> {
	children: ReactNode;
}

const BubbleButton = (props: BubbleButonProps) => {
	return (
		<button
			className="p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center gap-1/5 font-medium leading-none  data-[active=true]:text-violet-400"
			{...props}
		/>
	);
};

export default BubbleButton;
