import * as React from "react";
import { clsx } from "clsx";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    size?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    // Responsive size props
    sm?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    md?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    lg?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    xl?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    "2xl"?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    color?: "accent" | "foreground" | "muted" | "white";
    weight?:
        | "thin"
        | "light"
        | "normal"
        | "medium"
        | "semibold"
        | "bold"
        | "extrabold"
        | "black";
    align?: "left" | "center" | "right" | "justify";
    transform?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
    as?:
        | "p"
        | "span"
        | "div"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "label"
        | "small";
    children: React.ReactNode;
}

const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
};

// Responsive size utilities
const responsiveSizeStyles = {
    sm: {
        xs: "sm:text-xs",
        sm: "sm:text-sm",
        base: "sm:text-base",
        lg: "sm:text-lg",
        xl: "sm:text-xl",
        "2xl": "sm:text-2xl",
        "3xl": "sm:text-3xl",
        "4xl": "sm:text-4xl",
        "5xl": "sm:text-5xl",
        "6xl": "sm:text-6xl",
    },
    md: {
        xs: "md:text-xs",
        sm: "md:text-sm",
        base: "md:text-base",
        lg: "md:text-lg",
        xl: "md:text-xl",
        "2xl": "md:text-2xl",
        "3xl": "md:text-3xl",
        "4xl": "md:text-4xl",
        "5xl": "md:text-5xl",
        "6xl": "md:text-6xl",
    },
    lg: {
        xs: "lg:text-xs",
        sm: "lg:text-sm",
        base: "lg:text-base",
        lg: "lg:text-lg",
        xl: "lg:text-xl",
        "2xl": "lg:text-2xl",
        "3xl": "lg:text-3xl",
        "4xl": "lg:text-4xl",
        "5xl": "lg:text-5xl",
        "6xl": "lg:text-6xl",
    },
    xl: {
        xs: "xl:text-xs",
        sm: "xl:text-sm",
        base: "xl:text-base",
        lg: "xl:text-lg",
        xl: "xl:text-xl",
        "2xl": "xl:text-2xl",
        "3xl": "xl:text-3xl",
        "4xl": "xl:text-4xl",
        "5xl": "xl:text-5xl",
        "6xl": "xl:text-6xl",
    },
    "2xl": {
        xs: "2xl:text-xs",
        sm: "2xl:text-sm",
        base: "2xl:text-base",
        lg: "2xl:text-lg",
        xl: "2xl:text-xl",
        "2xl": "2xl:text-2xl",
        "3xl": "2xl:text-3xl",
        "4xl": "2xl:text-4xl",
        "5xl": "2xl:text-5xl",
        "6xl": "2xl:text-6xl",
    },
};

const colorStyles = {
    accent: "text-accent",
    foreground: "text-foreground",
    muted: "text-gray-500 dark:text-gray-400",
    white: "text-white",
};

const weightStyles = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
};

const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
};

const transformStyles = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
};

export function Text({
    className,
    size = "base",
    sm,
    md,
    lg,
    xl,
    "2xl": twoXl,
    color = "foreground",
    weight = "normal",
    align = "left",
    transform = "normal-case",
    italic = false,
    underline = false,
    lineThrough = false,
    as: Component = "p",
    children,
    ...props
}: TextProps) {
    const textClasses = clsx(
        // Base size
        sizeStyles[size],

        // Responsive sizes
        sm && responsiveSizeStyles.sm[sm],
        md && responsiveSizeStyles.md[md],
        lg && responsiveSizeStyles.lg[lg],
        xl && responsiveSizeStyles.xl[xl],
        twoXl && responsiveSizeStyles["2xl"][twoXl],

        // Other styles
        colorStyles[color],
        weightStyles[weight],
        alignStyles[align],
        transformStyles[transform],
        {
            italic: italic,
            underline: underline,
            "line-through": lineThrough,
        },
        className,
    );

    return (
        <Component className={textClasses} {...props}>
            {children}
        </Component>
    );
}
