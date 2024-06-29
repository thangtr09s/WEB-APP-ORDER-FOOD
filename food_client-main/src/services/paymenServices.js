export const postPayment = async (value) => {
  try {
    await axios.post(`https://music-demo123123.000webhostapp.com/api/order`);
  } catch (error) {
    console.log(error);
  }
};
