import React from 'react';

interface TextFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    styles?: React.CSSProperties; // Estilos aplicados al contenedor
    className?: string;
    id?: string;
    [key: string]: any; // Para props adicionales
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    onChange,
    placeholder,
    styles,
    className,
    id,
    ...props
}) => {
    return (<input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-field ${className}`}
        id={id}
        style={styles}
        {...props}
    />);
};

export default TextField;
