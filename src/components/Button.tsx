import { FC } from 'react';
import './css/button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
    color?: string;
    kind: string;
    fontWeight?: number;
    fontSize?: string;
    lineHeight?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    background?: string;
    border?: string;
    padding?: string;

    
}

const Button: FC<ButtonProps> = ({
                                        children,
                                        color,
                                        fontWeight,
                                        lineHeight,
                                        fontSize,
                                        kind,
                                        width,
                                        height,
                                        borderRadius,
                                        background,
                                        border,
                                        padding,
                                        ...props
                                     }) => {

    


    let rootClasses = ['button_primary']

    if(kind === 'button_secondary'){
        rootClasses = ['button_secondary']
    }
    if(kind === 'button_with-background'){
        rootClasses = ['button_with-background']
    }
    if(kind === 'button_with-shadow'){
        rootClasses = ['button_with-shadow']
    }
    if(kind === 'button_with-border'){
        rootClasses = ['button_with-border']
    }
    if(kind === 'button_with-background-radius'){
        rootClasses = ['button_with-background-radius']
    }

    return (
        <button {...props} 
        style={{color, fontSize, fontWeight, padding, lineHeight, width, height, borderRadius, background, border}} 
        className={rootClasses.join(' ')} >
            {children}
        </button>
    );
};

export default Button;