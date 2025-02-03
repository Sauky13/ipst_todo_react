interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "blocked" | "danger";
  }
  
  const buttonVariants = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    blocked: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };
  
  export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
    return (
      <button
        className={`font-bold py-2 px-4 rounded-full transition-all ${buttonVariants[variant]} ${className}`}
        {...props}
      />
    );
  };
  