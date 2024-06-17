import ProductProps from "../type/product.type";
import {Box, Breadcrumbs, Button, FormControl, InputLabel, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import ProductByCategoryFilter from '../components/product-by-category/filter/Filter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PriceFilter, {MAX_HEIGHT} from "../components/product-by-category/filter/PriceFilter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../configs/store";
import {getProductsByCategory} from "../slice/product.slice";
import {TitleCategorySlugToNum} from "../utils/ConverNumToNameCategory";
import Product from "../components/product";
import ProductList from "../components/product-list";

/*
xe dap tre em: 0
xe dap the thao: 1
xe dap dia hinh: 2
xe dap dua: 3
xe dap touring: 4
xe dap nu: 5
xe dap gap : 6
 */
function getRootState(){
    const {name}  = useParams(); // Lấy param từ URL
    const category_id: number = TitleCategorySlugToNum(name)
    let data : {category: string, products: ProductProps[]}
    switch (category_id){
        case 0:
            data =  useSelector((state: RootState) => state.product.babyBicycle)
            break
        case 1:
            data = useSelector((state: RootState) => state.product.sportBicycle)
            break
        case 2:
            data = useSelector((state: RootState) => state.product.topographicBicycle)
            break
        case 3:
            data = useSelector((state: RootState) => state.product.racingBicycle)
            break
        case 4:
            data = useSelector((state: RootState) => state.product.touringBicycle)
            break
        case 5:
            data = useSelector((state: RootState) => state.product.femaleBicycle)
            break
        case 6:
            data = useSelector((state: RootState) => state.product.foldBicycle)
            break
        default:
            data = useSelector((state: RootState) => state.product.babyBicycle)
            break
    }

    const dispatch = useAppDispatch()
    useEffect(() => {
        const promise = dispatch(getProductsByCategory(category_id))
        return () => {
            promise.abort()
        }
    }, []);
    return data
}

function TitlePage(title: TitleCategory) {
    const products = getRootState()
    return (
        <>
            <Box className={'py-1 d-lg-flex justify-content-between align-items-center'}>
                <Box>
                    <Breadcrumbs className={'fw-bold text-uppercase'} aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            Trang chủ
                        </Link>
                        <Typography color="text.primary">{title.name}</Typography>
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
    const data = getRootState()
    return (
        <>
            <Container>
                <TitlePage name={data.category} />
                <Stack direction={"column"} gap={2}>
                    <Stack direction={'row'} gap={1} alignItems={'start'}>
                        <ProductByCategoryFilter {...brandsFilterProps}/>
                        <PriceFilter />
                        <ProductByCategoryFilter {...wheelSizeFilterProps}/>
                        <ProductByCategoryFilter {...materialsFilterProps}/>
                        <ProductByCategoryFilter {...purposeOfUseFilterProps}/>
                        <Button className={'p-3'}  variant="contained" endIcon={<FilterAltIcon />}>Lọc</Button>
                    </Stack>
                    <ProductList products={data.products}/>
                    <Box className={'py-2 px-4 justify-content-center d-flex'}>
                        <Button className={'focus-ring focus-ring-info'}  variant="outlined" endIcon={<ArrowDropDownIcon />}>Tải thêm sản phẩm</Button>
                    </Box>
                </Stack>

            </Container>

        </>
    )
}
interface TitleCategory{
    name :string
}
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
