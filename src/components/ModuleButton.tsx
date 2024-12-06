import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ModuleButton.css'; // Asegúrate de tener el CSS

interface ModuleButtonProps {
    title: string;
    imageSrc: string;
    link: string;
}

export const ModuleButton: React.FC<ModuleButtonProps> = ({ title, imageSrc, link }) => {
    return (
        <Link to={link} className="module-button">
            <div className="module-button-content">
                <img src={imageSrc} alt={title} className="module-button-image" />
                <h3 className="module-button-title">{title}</h3>
            </div>
        </Link>
    );
};