import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
    0.5: 'Rất tệ',
    1: 'Tệ',
    1.5: 'Kém',
    2: 'Dưới trung bình',
    2.5: 'Trung bình',
    3: 'Khá',
    3.5: 'Tốt',
    4: 'Rất tốt',
    4.5: 'Xuất sắc',
    5: 'Hoàn hảo'
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating(prop: {rating?: number
}) {
    const [value, setValue] = React.useState<number | null>(prop.rating? prop.rating : 2.5)
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}
