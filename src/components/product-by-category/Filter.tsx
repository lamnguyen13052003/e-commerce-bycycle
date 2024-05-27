import React, {useState} from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {images} from '../../assets/images/brands/images'
import fascino from "../../assets/images/brands/fascino.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface FilterProps {
    nameLabel: string,
    itemSelected: string[],
    inputLabelId: string,
    selectLabelId: string,
    selectId: string,
    outlineInputId: string,
}


function getStyles(item: string, items: readonly string[], theme: Theme) {
    return {
        fontWeight:
            items.indexOf(item) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip(props: FilterProps) {
    const theme = useTheme();
    const [items, setItems] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof items>) => {
        const {
            target: { value },
        } = event;
        setItems(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id={props.inputLabelId}>{props.nameLabel}</InputLabel>
                <Select
                    labelId={props.selectLabelId}
                    id={props.selectId}
                    multiple
                    value={items}
                    onChange={handleChange}
                    input={<OutlinedInput id={props.outlineInputId} label={props.nameLabel} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} style={{ backgroundImage: images[1] }} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {props.itemSelected.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
