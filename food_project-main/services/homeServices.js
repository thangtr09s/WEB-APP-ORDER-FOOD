import axios from "axios";

export const getSellingProducts = async () => {
  try {
    const res = await axios.get(
      "https://music-demo123123.000webhostapp.com/api/products?type=ban-chay"
    );

    return res.data;
  } catch (error) {
    console.log("có lỗi xảy ra");
  }
};

export const getNewProducts = async () => {
  try {
    const res = await axios.get(
      "https://music-demo123123.000webhostapp.com/api/products?type=moi-nhat"
    );

    return res.data;
  } catch (error) {
    console.log("có lỗi xảy ra");
  }
};

export const getSuperDiscountProducts = async () => {
  try {
    const res = await axios.get(
      "https://music-demo123123.000webhostapp.com/api/products?type=sieu-giam-gia"
    );

    return res.data;
  } catch (error) {
    console.log("có lỗi xảy ra");
  }
};
