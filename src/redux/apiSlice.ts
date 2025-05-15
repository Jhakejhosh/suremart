import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseURL = "https://dummyjson.com"


export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        getProducts: builder.query<TransformProductResponse, void>({
            query: () => '/products',
            transformResponse: (response: ProductResponse): TransformProductResponse => { 
                const transformProduct = response.products.map(item => ({
                    ...item, quantity: 0
                }))
                return {
                    ...response,
                    products: transformProduct
                }
            }    
        }),
    }),
})

export const {useGetProductsQuery} = api

interface ReviewsType {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

interface DimensionsType {
    width: number, 
    height: number,
    depth: number
}

interface MetaType {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrcode: string
}

export interface ApiProductType {
    id: number,
    title: string, 
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: DimensionsType,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: ReviewsType[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: MetaType,
    images: string[],
    thumbnail: string,
}
export interface ProductType extends ApiProductType {
    quantity: number
}

interface ProductResponse {
    products: ApiProductType[],
    total: number,
    skip: number,
    limit: number
}
interface TransformProductResponse {
    products: ProductType[],
    total: number,
    skip: number,
    limit: number
}