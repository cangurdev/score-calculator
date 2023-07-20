import React from 'react';

interface textfieldProps {
    onChange: (value: string) => void,
    type?   : string
}

function Textfield(props: textfieldProps) {
    return (
        <input 
            type        = { props.type || 'text' }
            onChange    = { (e : React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value) }
            className   = { 'rounded-lg focus:outline-none text-black px-2 py-1' }
        />
    );
  } 
  
export default Textfield;