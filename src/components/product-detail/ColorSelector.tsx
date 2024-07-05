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
                {colors.map((color, index) => {
                    const isSelected = selectedColor === `${color.color1},${color.color2}`;
                    return (
                        <div
                            key={index}
                            className="color-wrapper"
                            onClick={() => onSelectColor(color.color1, color.color2)}
                            style={{
                                cursor: 'pointer',
                                border: isSelected ? '3px solid black' : 'none',
                                padding: isSelected ? '2px' : '3px'
                            }}
                        >
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundImage: `linear-gradient(45deg, ${color.color1} 50%, ${color.color2} 50%)`,
                                    borderRadius: '99px',
                                    border: '1px solid gray' // Inner border for all elements
                                }}
                                title={color.name}
                                aria-label={color.name}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorSelector;
