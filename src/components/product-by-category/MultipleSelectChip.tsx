import React, {useState} from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {
    Box,
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../configs/store";
import FilterAttributeType from "../../../type/filterAttribute.type.client";
import {
    setDataBrandFilter,
    setDataMaterialFilter, setDataPriceFilter,
    setDataTargetUsingFilter,
    setDataWheelSizeFilter
} from "../../../slice/selectFilter.slice";


export interface FilterProps {
    nameLabel: string,
    itemSelected: string[],
    inputLabelId: string,
    selectLabelId: string,
    selectId: string,
    outlineInputId: string,
    maxHeight?: number,
    width?: number
}
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
    const dispatch = useDispatch()
    const handleChangeSelect = (event: SelectChangeEvent<typeof items>) => {

        const {
            target: { value }
        } = event;

        setItems(
            typeof value === 'string' ? value.split(',') : value
        );
        switch (props.selectId){
            case 'selectId-brand':
                dispatch(setDataBrandFilter(value as string[]))
                break;
            case 'selectId-wheelSize':
                dispatch(setDataWheelSizeFilter(value as string[]))
                break;
            case 'selectId-material':
                dispatch(setDataMaterialFilter(value as string[]))
                break;
            case 'selectId-targetUsing':
                dispatch(setDataTargetUsingFilter(value as string[]))
                break;
        }
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
                    onChange={handleChangeSelect}
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
