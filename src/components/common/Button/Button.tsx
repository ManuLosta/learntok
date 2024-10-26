import { cn } from "@/utils/cn"
import { cva, VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "flex items-center justify-center px-4 py-2 rounded-2xl gap-2 font-bold",
  {
    variants: {
      variant: {
        default: [
          "bg-primary-500 text-background",
          "disabled:bg-gray-300 disabled:text-gray-600"
        ],
        ghost: [
          "bg-primary-100 text-primary-700",
          "disabled:bg-gray-200 disabled:text-gray-400"
        ],
        outlined: [
          "bg-transparent text-primary-500 border-primary-500 border-2",
          "disabled:border-gray-400 disabled:text-gray-400"
        ],
        danger: [
          "bg-danger-500 text-background",
          "disabled:bg-gray-300 disabled:text-gray-600"
        ],
        "danger-outlined": [
          "bg-transparent border-danger-500 border-2 text-danger-500",
          "disabled:border-gray-400 disabled:text-gray-400"
        ]
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
