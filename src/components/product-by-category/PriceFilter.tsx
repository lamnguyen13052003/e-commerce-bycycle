import {Accordion, AccordionDetails, AccordionSummary, Box, Slider, Stack, TextField, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, {useState} from "react";
import Filter from './MultipleSelectChip'
import {PriceType} from "../../types/price.type";

function AccordionPrice(prop: PriceType ) {
    return (
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
                    <CustomPrice {...prop}/>
                </Stack>

            </AccordionDetails>
        </Accordion>
    );
}

function CustomPrice(props: PriceType) {
    // console.log('max '+maxV)
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const [valueTextFieldFrom, setValueTextFieldFrom] = useState<number>(props.min);
    const [valueTextFieldTo, setValueTextFieldTo] = useState<number>(props.max);

    const [rangeValue, setRangeValue] = useState([props.min, props.max]);
    const handleChangeFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValueTextFieldFrom(Number(inputValue));
        handleSetThumbOneValue(valueTextFieldFrom)
    };

    const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValueTextFieldTo(Number(inputValue));
        handleSetThumbTwoValue(valueTextFieldTo)
    };

    // Hàm đặt giá trị của thumb thứ nhat
    const handleSetThumbOneValue = (newThumbOneValue: number) => {
        setRangeValue([newThumbOneValue, rangeValue[1]]);
    };
    // Hàm đặt giá trị của thumb thứ hai
    const handleSetThumbTwoValue = (newThumbTwoValue: number) => {
        setRangeValue([rangeValue[0], newThumbTwoValue]);
    };

    const handleRangeChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        setRangeValue(newValue as number[]);
    }
        return (
            <Box>
                <Box className={'d-flex justify-content-between align-items-center'}>
                    <TextField  id="outlined-from" type={"number"} onChange={handleChangeFrom}  defaultValue={rangeValue[0]}  variant="outlined"/> <sup className={'px-1'}>đ</sup>
                    <Box className={'ms-1 me-2'} style={{width: '10%', height: '4px', backgroundColor: '#000'}}/>
                    <TextField  id="outlined-to" type={"number"} onChange={handleChangeTo} defaultValue={rangeValue[1]} variant="outlined"/><sup className={'px-1'}>đ</sup>
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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MAX_HEIGHT = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
const priceFilterProps = {
    nameLabel: "Lọc theo giá",
    itemSelected: [
        'Dưới 5 triệu',
        'Từ 5 - 10 triệu',
        'Từ 10 - 15 triệu',
        'Từ 15 - 25 triệu',
        'Trên 25 triệu'
    ],
    inputLabelId: "inputLabelId-price",
    selectLabelId: "selectLabelId-price",
    selectId: "selectId-price",
    outlineInputId: "outlineInputId-price",
    maxHeight: MAX_HEIGHT,
    width: 350
}
