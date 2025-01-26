import { ReactNode } from "react";

export interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm"|"md"| "lg";
    text: string;
    type?: any
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onclick?: ()=> void;
    className?: string
}

export const varientProps = {
    "primary": "bg-[#5046e5] text-white ",
    "secondary": "bg-[#e1e8ff] text-[#5049ba]" 
}

export const sizeProps = {
   'sm': 'py-1 px-2 rounded-md',
   'md': 'py-2 px-4 rounded-lg',
   'lg': 'py-2 px-6 rounded-lg',
}





