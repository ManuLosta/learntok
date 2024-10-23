import { cn } from "@/utils/cn"
import { cva, VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "flex items-center justify-center p-2",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

export const Button = ({ className, children, variant, ...props }: ButtonProps) => (
  <button className={cn(buttonVariants({ variant }), className)} {...props}>{children}</button>
)
