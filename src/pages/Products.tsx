import {Box, Breadcrumbs, Button, FormControl, InputLabel, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import {Container} from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import ProductByCategoryFilter from '../components/product-by-category/filter/Filter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PriceFilter, {MAX_HEIGHT} from "../components/product-by-category/filter/PriceFilter";
import ProductList from "../components/product-list";
import {products} from '../components/product/DataProduct'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function TitlePage(props: PageData) {
    return (
        <>
            <Box className={'py-1 d-lg-flex justify-content-between align-items-center'}>
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
                            <span>Hiển thị tất cả {products.length} kết quả</span>
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
                <Stack direction={"column"} gap={2}>
                    <Stack direction={'row'} gap={1} alignItems={'start'}>
                        <ProductByCategoryFilter {...brandsFilterProps}/>
                        <PriceFilter />
                        <ProductByCategoryFilter {...wheelSizeFilterProps}/>
                        <ProductByCategoryFilter {...materialsFilterProps}/>
                        <ProductByCategoryFilter {...purposeOfUseFilterProps}/>
                        <Button className={'p-3'}  variant="contained" endIcon={<FilterAltIcon />}>Lọc</Button>
                    </Stack>
                    <ProductList products={products}/>
                    <Box className={'py-2 px-4 justify-content-center d-flex'}>
                        <Button className={'focus-ring focus-ring-info'}  variant="outlined" endIcon={<ArrowDropDownIcon />}>Tải thêm sản phẩm</Button>
                    </Box>
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
    outlineInputId: "outlineInputId-brand",
    maxHeight: MAX_HEIGHT,
    width: 200
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
    outlineInputId: "outlineInputId-wheelSize",
    maxHeight: MAX_HEIGHT,
    width: 200
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
    outlineInputId: "outlineInputId-material",
    maxHeight: MAX_HEIGHT,
    width: 200
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
    outlineInputId: "outlineInputId-purposeOfUse",
    maxHeight: MAX_HEIGHT,
    width: 200
}
