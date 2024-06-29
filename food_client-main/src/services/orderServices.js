import axios from "axios"

export const getOrders = async(phone) => {
    const res = await axios.get(`https://music-demo123123.000webhostapp.com/api/orders?phone=${phone}&order_status=1`)

    return res.data
}