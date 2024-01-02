import { ReactElement } from "react";
import * as Styled from './Button.styled';
import { SizeTypeI } from "../../constants/types";

interface ButtonPropsI {
    size?:  Map<string, SizeTypeI>,
    type: "submit" | "reset" | "button",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactElement | string,
}

export const Button = ({size, type, children} : ButtonPropsI)  => {
 
    return (
        <Styled.Button size={size} type={type}>{children}</Styled.Button>
    );
}