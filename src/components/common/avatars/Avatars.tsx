import Image from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const avatarVariants = cva(
    'flex items-center justify-center rounded-full p-2',
    {
        variants: {
            variant: {
                blue: "bg-primary-100",
                orange: "bg-[#FED7AA]",
                green: "bg-[#A7F3D0]",
            }
        },
    },
);

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    imageUrl: string;
    size?: number;
}

export const Avatar = ({ variant , imageUrl, size = 80 }: AvatarProps) => {
    return (
        <div className={cn(avatarVariants({variant}), `min-h-[${size}px]`, `min-w-[${size}px]`)}>
            <Image src={imageUrl} alt="Avatar" width={size - 28} height={size - 28}/>
        </div>
    );
};