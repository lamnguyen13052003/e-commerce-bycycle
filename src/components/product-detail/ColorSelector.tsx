import React from 'react';

interface ColorSelectorProps {
    colors: { color1: string, color2: string, name: string }[];
    selectedColor: string;
    onSelectColor: (color1: string, color2: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelectColor }) => {
    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundImage: `linear-gradient(45deg, ${color.color1} 50%, ${color.color2} 50%)`,
                            border: selectedColor === `${color.color1},${color.color2}` ? '2px solid black' : '1px solid gray',
                            cursor: 'pointer',
                        }}
                        onClick={() => onSelectColor(color.color1, color.color2)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorSelector;
