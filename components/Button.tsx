"use client"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";}
    

const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-500 text-white",

        secondary:
            "bg-gray-500 hover:bg-gray-400 text-white",

        danger:
            "bg-red-600 hover:bg-red-500 text-white",
    }

export default function Button({ 
    children, 
    variant = "primary", 
    className,
    ...props 
}: ButtonProps) { 
    return (
        <button 
            {...props}
            className={`${variants[variant]} px-4 py-4 rounded-lg transition-colors mt-4 ${className ?? ""}`}
        >
            {children}
        </button>
    )
}