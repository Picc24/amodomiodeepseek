interface ButtonProps {
  variant?: "primary" | "outline";
  href?: string;
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", href, children }: ButtonProps) => {
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-outline"}`;
  
  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }
  
  return <button className={className}>{children}</button>;
};
