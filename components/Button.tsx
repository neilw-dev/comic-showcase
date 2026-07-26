type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {

    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-500 text-white",

        secondary:
            "bg-gray-500 hover:bg-gray-400 text-white",

        danger:
            "bg-red-600 hover:bg-red-500 text-white",
    }
    return (
        <button className={`${variants[variant]} px-4 py-4 rounded-lg transition-colors`}>
            {children}
        </button>
    )
}