import React from 'react';

interface buttonProps {
    onClick: (value: string | null) => void,
    label   : string
}

function Button(props: buttonProps) {
    return (
        <div 
            onClick     = { (e : React.MouseEvent<HTMLDivElement>) => props.onClick(e.currentTarget.getAttribute('data-value')) }
            className   = { 'flex items-center justify-center bg-secondary text-white rounded-lg h-12 w-48 m-auto mt-12' }
        >
            { props.label } 
        </div>
    );
  }
  
export default Button;