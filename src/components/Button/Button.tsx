import { ReactElement } from "react";
import * as Styled from './Button.styled';
import { SizeTypeI } from "../../constants/types";

interface ButtonPropsI {
    size?:  Map<string, SizeTypeI>,
    type: "submit" | "reset" | "button",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactElement | string,
    disabled?: boolean,
}

export const Button = ({size, type, children, disabled} : ButtonPropsI)  => {
 
    return (
        <Styled.Button size={size} type={type} disabled={disabled}>{children}</Styled.Button>
    );
}