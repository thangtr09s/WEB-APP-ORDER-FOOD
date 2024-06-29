import axios from "axios"

export const getSearchValue = async (value) => {
    const res = await axios.get(`https://music-demo123123.000webhostapp.com/api/search-products?product_name=${value}`)
    return res.data
}