import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductsByFilter} from "../slice/product.slice";
import {useAppDispatch} from "../configs/store";

function getQueryOnURL(category_id: number, page: number) {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const brands: string[] = searchParams.getAll('brands[]') as string[]
    const wheelSizes: string[] = searchParams.getAll('wheelSizes[]') as string[]
    const materials: string[] = searchParams.getAll('materials[]') as string[]
    const targetUsings: string[] = searchParams.getAll('targetUsings[]') as string[]
    const prices: string = searchParams.get('prices') as string
    const newProduct : string | null = searchParams.get('newProduct')
    const sort: string | null= searchParams.get('sort') as string
    const bestSale: string | null = searchParams.get('bestSale')
    const additional: number | null = getValueAdditional(newProduct, sort, bestSale)
    const query = createQueryFilter(brands, wheelSizes, materials, targetUsings, prices, additional)

    useEffect(() => {
        const promiseFilter = dispatch(getProductsByFilter({category: category_id, page: page, queryParams: query}))
        return () => {
            promiseFilter.abort()
        }
    }, []);
}

const getValueAdditional = (newProduct: string | null, sort: string | null, bestSale: string | null) => {
    if (newProduct !== null) return 0
    if (bestSale !== null) return 3
    if (sort !== null) {
        if (sort === 'asc') return 1
        if (sort === 'desc') return 2
    }
    return null
}

const createQueryFilter = (brands: string[], wheelSizes: string[], materials: string[], targetUsings: string[], prices: string, additional: string | number | null) => {
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

    if (additional !== null) {
        switch (Number(additional)) {
            case 0:
                query += `newProduct=true&`
                break
            case 1:
                query += `sort=asc&`
                break
            case 2:
                query += `sort=desc&`
                break
            case 3:
                query += `bestSale=true&`
                break
        }
    }
    if (prices !== null && prices.split('-')[1] == '0') return query
    query += `prices=` + prices + '&'
    return query
}
export {getQueryOnURL, createQueryFilter}
