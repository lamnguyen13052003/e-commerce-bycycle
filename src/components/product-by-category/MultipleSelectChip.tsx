import React, {useState} from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {Box, FormControl, InputLabel, MenuItem, OutlinedInput,} from "@mui/material";
import {FilterType} from "../../types/filter.type";

function getStyles(item: string, items: readonly string[], theme: Theme) {
    return {
        fontWeight:
            items.indexOf(item) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip(props: FilterType) {
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
            <FormControl >
                <InputLabel id={props.inputLabelId}>{props.nameLabel}</InputLabel>
                <Select
                    className={'text-capitalize'}
                    labelId={props.selectLabelId}
                    id={props.selectId}
                    multiple
                    value={items}
                    onChange={handleChange}
                    input={<OutlinedInput id={props.outlineInputId} label={props.nameLabel} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}  />
                            ))}
                        </Box>
                    )}
                    style={{maxHeight: props.maxHeight, width: props.width}}
                >
                    {props.itemSelected.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, items, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
