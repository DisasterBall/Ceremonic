import React, { FC } from 'react';
import './css/input.css'

interface InputProps extends React.InputHTMLAttributes<any> {
    kind: string;
    padding?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    maxWidth?: string;
    width?: string;
    maxHeight?: string;
    margin?: string;
    
}

const Input: FC<InputProps> = ({
                                        
                                        kind,
                                        maxWidth,
                                        width,
                                        maxHeight,
                                        boxShadow,
                                        padding,
                                        margin,
                                        border,
                                        borderRadius,
                                        ...props
                                     }) => {

    


    let rootClasses = ['input_primary']

    if(kind === 'input_without-border'){
        rootClasses = ['input_without-border']
    }


    return (
        <input {...props} style={{border, borderRadius, padding, margin,
            maxWidth, width, maxHeight, boxShadow}} 
        className={rootClasses.join(' ')} />

    );
};

export default Input;