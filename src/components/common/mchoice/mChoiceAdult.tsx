import React, { useState } from 'react';

interface MChoiceAdultProps {
    label: string;
    correct: boolean;
}

const MChoiceAdult: React.FC<MChoiceAdultProps> = ({ label, correct }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(true);
    };

    const bgColor = selected
        ? correct
            ? 'bg-success-500 text-white' // Verde cuando es correcto
            : 'bg-danger-500 text-white' // Rojo cuando es incorrecto
        : 'bg-gray-200 text-gray-800'; // Color claro inicial

    const hoverEffect = selected ? '' : 'hover:bg-gray-400'; // No aplica hover si ya está seleccionado

    return (
        <button
            className={`w-full py-3 rounded-lg font-bold ${bgColor} ${hoverEffect} transition-colors`}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default MChoiceAdult;