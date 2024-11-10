import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const avatarVariants = cva(
    'flex items-center justify-center rounded-full p-2',
    {
        variants: {
            variant: {
                blue: "bg-primary-100",
                orange: "bg-orange-300",
                green: "bg-[#A7F3D0]",
            }
        },
    },
);

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    imageUrl: string;
}

export const Avatar = ({ variant , imageUrl }: AvatarProps) => {
    return (
        <div className={cn(avatarVariants({variant}), `min-h-[80px]`, `min-w-[80px]`)}>
            <Image src={imageUrl} alt="Avatar" width={52} height={52}/>
        </div>
    );
};