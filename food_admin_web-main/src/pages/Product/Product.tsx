import { HeadingTable } from "components";
import { useLocalStorage } from "react-use";
import { useQueries } from "@tanstack/react-query";

import Table from "./components/Table";
import ProductCreate from "./components/ProductCreate";
import ProductView from "./components/ProductView";
import ProductDelete from "./components/ProductDelete";
import { getProducts } from "services/productServices";
import ProductUpdate from "./components/ProductUpdate";

const Product = () => {
  const [id, setId, clearId] = useLocalStorage("id");
  const [products] = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: getProducts,
      },
    ],
  });

  return (
    <div>
      <p className="headline">Quản lý sản phẩm </p>

      <HeadingTable>
        <Table data={products?.data} setId={setId} />
      </HeadingTable>

      <ProductCreate />

      <ProductView id={id} />

      <ProductUpdate id={id} />

      <ProductDelete id={id} clearId={clearId} />
    </div>
  );
};

export default Product;
