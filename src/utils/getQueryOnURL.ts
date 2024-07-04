import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductsByFilter} from "../slice/product.slice";
import {useAppDispatch} from "../configs/store";

function getQueryOnURL(category_id: number, count: number) {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const brands: string[]  = searchParams.getAll('brands[]') as string[]
    const wheelSizes: string[]  = searchParams.getAll('wheelSizes[]') as string[]
    const materials: string[] = searchParams.getAll('materials[]')  as string[]
    const targetUsings: string[]  = searchParams.getAll('targetUsings[]')  as string[]
    const prices: string  = searchParams.get('prices') as string

    const query = createQueryFilter(brands, wheelSizes, materials, targetUsings, prices)

    useEffect(() => {
        const promiseFilter =  dispatch(getProductsByFilter({category: category_id, page: count, queryParams: query}))
        return () => {
            promiseFilter.abort()
        }
    }, []);
}

const createQueryFilter = (brands : string[], wheelSizes  : string[], materials : string[], targetUsings : string[], prices: string) => {
    let query = ''
        brands.map((brand) => {
            query += `brands[]=` + brand.replace(' ', '-') + '&'
        })
        wheelSizes.map((wheelSize) => {
            query += `wheelSizes[]=` + wheelSize.replace(' ', '-') + '&'
        })
        materials.map((material) => {
            query += `materials[]=` + material.replace(' ', '-') + '&'
        })
        targetUsings.map((targetUsing) => {
            query += `targetUsings[]=` + targetUsing.replace(' ', '-') + '&'
        })
        if(prices !== null && prices.split('-')[1] == '0') return query
        query += `prices=` + prices + '&'
    return query
}
export {getQueryOnURL, createQueryFilter}
