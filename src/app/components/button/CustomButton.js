import { Button } from '@mui/material'
import React from 'react'
import "./style.scss"

const CustomButton = ({
    onClick,
    children,
    color,
    buttonClassName,
    type,
    disabled,
    
    sx,
    variant,

}) => {
    return (
        <div className={buttonClassName}>
            <Button
                variant={variant ?? "contained"}
                color={color ?? "primary"}
                onClick={onClick}
                type={type}
                disabled={disabled ?? false}
                sx={sx}
            >
                <div>
                    <span className="addIcon">{children}</span>
                </div>
            </Button>

        </div>
    )
}

export default CustomButton