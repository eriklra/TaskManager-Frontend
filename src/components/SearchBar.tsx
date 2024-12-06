import React, { useState } from 'react';
import '../styles/SearchBar.css';

export interface SearchParams {
    [key: string]: string | undefined; // Permite claves dinámicas
}

export interface SearchBarProps {
    onSearch: (params: SearchParams) => void;
    onFileUpload: () => void;
    onFileDownload: () => void;
    extraFunction?: () => void;
    fields: string[]; // Campos a mostrar
    buttons: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFileUpload, onFileDownload, extraFunction, fields, buttons }) => {
    const initialSearchParams = fields.reduce((acc, field) => {
        acc[field] = '';
        return acc;
    }, {} as SearchParams);

    const [searchParams, setSearchParams] = useState<SearchParams>(initialSearchParams);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearchParams((prev) => ({ ...prev, [name]: value }));
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch(searchParams);
        }
    };

    const handleSubmit = () => {
        onSearch(searchParams);
    };

    const isDateField = (field: string): boolean => {
        return ['Fecha', 'Fecha Inicial', 'Fecha Final'].includes(field);
    };

    return (
        <div className="search-bar">

            <div className='search-fields'>
                {fields.map((field) => (
                    <input
                        key={field}
                        type={isDateField(field) ? "date" : "text"}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={searchParams[field]}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                ))}

            </div>
            
            <div className='search-buttons'>
                <button id="search-button" onClick={handleSubmit}>Buscar</button>
                {buttons[0] && (
                    <button id="download-button" onClick={onFileDownload}>{buttons[0]}</button>
                )}
                {buttons[1] && (
                    <button id="upload-button" onClick={onFileUpload}>{buttons[1]}</button>
                )}
                {buttons[2] && (
                    <button id="upload-button" onClick={extraFunction}>{buttons[2]}</button>
                )}
            </div>
            
        </div>
    );
};
