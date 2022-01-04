import getAllProductsQuery from "../utils/queries/get-all-products"

type FetchParams = {
    query: string
}

const fetchApi = async ({ query }: FetchParams) => {
    const url = "http://localhost:4000/graphql"

    const res = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            query: getAllProductsQuery
        })
    })

    const { data, errors } =  await res.json()

    if(errors) {
        throw new Error(errors[0].message ?? errors.message)
    }
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {

    const products = await fetchApi({query: getAllProductsQuery})
    return products.data
}

export default getAllProducts