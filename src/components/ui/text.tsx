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

const colorStyles = {
    accent: "text-accent",
    foreground: "text-foreground",
    muted: "text-gray-500",
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
        sizeStyles[size],
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
