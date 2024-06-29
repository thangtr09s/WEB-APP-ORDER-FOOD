import HeadLine from "../../components/HeadLine";

const Contact = () => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <HeadLine>THÔNG TIN LIÊN HỆ</HeadLine>

      <i className="pt-4 px-7">Cửa hàng Gaming Gears BOSSGEAR BMT:</i>

      <ul className="flex flex-col gap-4 pt-4 list-disc px-7">
        <li>
          <strong>Địa chỉ: </strong>
          <span className="text-sm font-light">
            G19 Tôn Đức thắng, P.Tân An, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk
          </span>
        </li>
        <li>
          <strong>SDT: </strong>
          <span className="text-sm font-light">0979.301.857</span>
        </li>
        <li>
          <strong>ZALO: </strong>
          <span className="text-sm font-light">0979.301.857</span>
        </li>
        <li>
          <strong>FANFACE: </strong>
          <a href={"https://www.facebook.com/Bossgear.BMT/"} className="text-sm font-light">
            https://www.facebook.com/Bossgear.BMT/
          </a>
        </li>

        <li>
          <strong>SHOPEE: </strong>
          <a href={"https://www.facebook.com/Bossgear.BMT/"} className="text-sm font-light">
            https://shp.ee/irckxgf
          </a>
        </li>
        <li>
          <strong>EMAIL: </strong>
          <a href={"mailto:Shopbossgear@gmail.com"} className="text-sm font-light">Shopbossgear@Gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
