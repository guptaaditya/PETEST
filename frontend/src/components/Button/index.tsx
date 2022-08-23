import React from 'react';
export interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    isVisible?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ className, children, onClick, disabled }) => {
    return (
        <button className={className} onClick={onClick} disabled={!!disabled}>{children}</button>
    )
};

export default Button;
