import {Accordion, AccordionDetails, AccordionSummary, Box, Slider, Stack, TextField, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, {ChangeEvent, useState} from "react";
import Filter from './Filter'

interface PriceProps {
    min: number,
    max: number
}

// export function priceFilter() {
//     return (
//         <>
//
//         </>
//     )
// }

function AccordionPrice() {
    return (
        <div>
            <Accordion className={'border border-1 shadow-none py-1 border-secondary-subtle'}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Lọc theo giá</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={"column"} gap={1}>
                        <Box>
                            <Filter{...priceFilterProps} />
                        </Box>
                        <CustomPrice {...values}/>

                    </Stack>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

function CustomPrice(props: PriceProps) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const [rangeValue, setRangeValue] = useState<number[]>([props.min, props.max]);

    const handleRangeChange = (event: Event, newValue: number | number[]) => {
        setRangeValue(newValue as number[]);
    }
        return (
            <Box>
                <Box className={'d-flex justify-content-between align-items-center'}>
                    <TextField  id="outlined-from" defaultValue={rangeValue[0]}  variant="outlined"/> <sup className={'px-1'}>đ</sup>
                    <Box className={'ms-1 me-2'} style={{width: '10%', height: '4px', backgroundColor: '#000'}}/>
                    <TextField  id="outlined-to" defaultValue={rangeValue[1]} variant="outlined"/><sup className={'px-1'}>đ</sup>
                </Box>
                <Box>
                    <Box sx={{width: 300}}>
                        <Slider
                            value={rangeValue}
                            onChange={handleRangeChange}
                            valueLabelDisplay="auto"
                            min={props.min}
                            max={props.max}
                        />
                    </Box>
                    <Box className={'d-flex justify-content-between fw-bold'}>
                        <Typography>{formatter.format(rangeValue[0])}</Typography>
                        <Typography>{formatter.format(rangeValue[1])}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
export default AccordionPrice

const values: PriceProps = {min: 100000, max: 900000}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MAX_HEIGHT = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
const priceFilterProps = {
    nameLabel: "Lọc theo giá",
    itemSelected: [
        'Dưới 3 triệu',
        'Từ 3 - 6 triệu',
        'Từ 6 - 10 triệu',
        'Từ 10 - 15 triệu',
        'Trên 15 triệu'
    ],
    inputLabelId: "inputLabelId-price",
    selectLabelId: "selectLabelId-price",
    selectId: "selectId-price",
    outlineInputId: "outlineInputId-price",
    maxHeight: MAX_HEIGHT,
    width: 350
}