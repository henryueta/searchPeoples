import React  from "react";

type ICss = {
    direction?: "row" | "column",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "start",
    align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline",
    wrap?: "nowrap" | "wrap" | "wrap-reverse",
};

interface FlexProps extends ICss {
    as?: keyof JSX.IntrinsicElements; 
    style?: React.CSSProperties;
    gap?: number | string;
    children?: React.ReactNode;
    padding?: number | string;
    className?: string;
}

const TagFlex = ((
    {
        className,
        as: Tag = "div",
        style,
        direction,
        justifyContent = "center",
        align = "center",
        gap,
        children,
        wrap = "nowrap",
        padding,
    }: FlexProps
): JSX.Element => {

    const defaultDivStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: align,
        gap: gap,
        flexWrap: wrap,
        padding: padding
    }

    const divStyle = { ...defaultDivStyle, ...style }

    return (
        <Tag className={className} style={divStyle}>
            {children}
        </Tag>
    );
});

export default TagFlex;
