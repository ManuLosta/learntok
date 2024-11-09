import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { CalendarIcon } from '@/components/common/icon/CalendarIcon';


const awardsVariants = cva (
  'flex items-center justify-center rounded-full p-2',
  {
    variants: {
      variant: {
        gold: "bg-[#FDCB42] border-[#68560F] border-4",
        silver: "bg-[#C0C0C0] border-[#808080] border-4",
        bronze: "bg-[#CD7F32] border-[#8B4513] border-4",
      }
    },
  },
);

export interface ChildAwardProps extends VariantProps<typeof awardsVariants>{
  title?: string;
  category?: string;
  date?: string;
}


export const ChildAward = ({ variant, title = "Course name", category = "Course category", date = "1 Jan 2024" }: ChildAwardProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className={cn(awardsVariants({ variant }))}>
        {variant === 'gold' && <Image src={"/assets/booky-gold.svg"} alt="Gold Award" width={72} height={72} />}
        {variant === 'silver' && <Image src={"/assets/booky-silver.svg"} alt="Silver Award" width={72} height={72} />}
        {variant === 'bronze' && <Image src={"/assets/booky-bronze.svg"} alt="Bronze Award" width={72} height={72} />}
      </div>
      <div className="ml-2.5">
        <div className="typography-body-bold text-foreground">{title}</div>
        <div className="typography-body text-slate-500">{category}</div>
        <div className="typography-body-small text-slate-500 flex items-center gap-2">
          <CalendarIcon size={12} />
          {date}
        </div>
      </div>
    </div>
  );
};