import { cn } from "@/utils/cn"
import { cva, VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "flex items-center justify-center px-4 py-2 rounded-2xl",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-background font-bold",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

export const Button = ({ className, children, variant, startContent, endContent, ...props }: ButtonProps) => (
  <button className={cn(buttonVariants({ variant }), className)} {...props}>
    {startContent && startContent}
    {children}
    {endContent && endContent}
  </button>
)
