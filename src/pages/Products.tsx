import {ProductProps} from "../components/product";
import {Box, Breadcrumbs, Button, FormControl, InputLabel, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import {Container} from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import ProductByCategoryFilter from '../components/product-by-category/Filter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function TitlePage(props: PageData) {
    return (
        <>
            <Box className={'p-3 d-lg-flex justify-content-between align-items-center'}>
                <Box>
                    <Breadcrumbs className={'fw-bold text-uppercase'} aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">{props.nameCategory}</Typography>
                    </Breadcrumbs>
                </Box>

                <Box className={'fw-bold'}>
                    <Stack  direction={'row'} alignItems={'center'} alignContent={'center'} gap={1}>
                        <Box>
                            <span>Hiển thị tất cả x kết quả</span>
                        </Box>
                        <SelectSmallFilter/>
                    </Stack>

                </Box>
            </Box>

        </>
    )
}

function SelectSmallFilter() {
    const [filter, setFilter] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{m: 1, minWidth: 220}} fullWidth>
                <InputLabel id="select-small-label">Lọc</InputLabel>
                <Select
                    labelId="select-small-label"
                    id="select-small"
                    value={filter}
                    label="Filter"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>Mới nhất</MenuItem>
                    <MenuItem value={1}>Theo giá: Tăng dần</MenuItem>
                    <MenuItem value={2}>Theo giá: Giảm dần</MenuItem>
                    <MenuItem value={3}>Theo mức độ phổ biến</MenuItem>
                    <MenuItem value={4}>Theo điểm đánh giá</MenuItem>
                </Select>
            </FormControl>
        </Box>

    );
}

function Products() {
    return (
        <>
            <Container>
                <TitlePage {...pageData}/>
                <Stack direction={'row'} gap={1} alignItems={'start'}>
                    <ProductByCategoryFilter {...brandsFilterProps}/>
                    <ProductByCategoryFilter {...priceFilterProps}/>
                    <ProductByCategoryFilter {...wheelSizeFilterProps}/>
                    <ProductByCategoryFilter {...materialsFilterProps}/>
                    <ProductByCategoryFilter {...purposeOfUseFilterProps}/>
                    <Button style={{width: '104px', height: '32px', marginTop: '8px'}} variant="contained" endIcon={<FilterAltIcon />}>Lọc</Button>
                </Stack>
            </Container>

        </>
    )
}

interface PageData {
    nameCategory: string
}

const pageData: PageData = {nameCategory: "Xe đạp đua"}
export default Products;
const brandsFilterProps  = {
    nameLabel: "Thương hiệu",
    itemSelected : [
        'Brave Will',
        'Fornix',
        'Life',
        'Giant',
        'Calli',
        'Fasono',
        'Dtfly',
        'Thong Nhat',
        'HTM',
    ],
    inputLabelId: "inputLabelId-brand",
    selectLabelId: "selectLabelId-brand",
    selectId: "selectId-brand",
    outlineInputId: "outlineInputId-brand"
}
const priceFilterProps  = {
    nameLabel: "Lọc theo giá",
    itemSelected : [
        'Dưới 3 triệu',
        'Từ 3 - 6 triệu',
        'Từ 6 - 10 triệu',
        'Từ 10 - 15 triệu',
        'Trên 15 triệu'
    ],
    inputLabelId: "inputLabelId-price",
    selectLabelId: "selectLabelId-price",
    selectId: "selectId-price",
    outlineInputId: "outlineInputId-price"
}
const wheelSizeFilterProps  = {
    nameLabel: "Kích thước bánh xe",
    itemSelected : [
        '24 Inch',
        '26 Inch',
    ],
    inputLabelId: "inputLabelId-wheelSize",
    selectLabelId: "selectLabelId-wheelSize",
    selectId: "selectId-wheelSize",
    outlineInputId: "outlineInputId-wheelSize"
}
const materialsFilterProps  = {
    nameLabel: "Chất liệu",
    itemSelected : [
        'Hợp kim nhôm',
        'Hợp kim thép',
        'Thép',
        'Giant',
    ],
    inputLabelId: "inputLabelId-material",
    selectLabelId: "selectLabelId-material",
    selectId: "selectId-material",
    outlineInputId: "outlineInputId-material"
}
const purposeOfUseFilterProps  = {
    nameLabel: "Mục đích sử dụng",
    itemSelected : [
        'Đi làm, đi học',
        'Tập thể theo',
    ],
    inputLabelId: "inputLabelId-purposeOfUse",
    selectLabelId: "selectLabelId-purposeOfUse",
    selectId: "selectId-purposeOfUse",
    outlineInputId: "outlineInputId-purposeOfUse"
}
