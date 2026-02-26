import * as React from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    accent?: boolean;
}

export function Button({ className, accent = false, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                "cursor-pointer inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-base font-medium h-9 px-6 py-3",
                "disabled:pointer-events-none disabled:opacity-50",
                "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                accent
                    ? "bg-accent text-dark shadow-xs hover:bg-accent/80"
                    : "bg-background text-accent shadow-xs border-accent border hover:bg-background/90",
                className,
            )}
            {...props}
        />
    );
}
