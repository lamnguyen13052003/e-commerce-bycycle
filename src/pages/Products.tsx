import {ProductProps} from "../components/product";
import {Box, Breadcrumbs, FormControl, InputLabel, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import {Container} from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import ProductByCategoryFilter from '../components/product-by-category/Filter'

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
                <ProductByCategoryFilter {...brandsFilterProps}/>
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
    inputLabelId: "inputLabelId-01",
    selectLabelId: "selectLabelId-01",
    selectId: "selectId-01",
    outlineInputId: "outlineInputId-01"
}

