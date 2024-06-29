import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../contexts/AuthProvider";
import { getOrders } from "../../../../services/orderServices";
import CardItem from "../../../../components/CardItem";

const Order = () => {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["orders", user.phone],
    queryFn: () => getOrders(user.phone),
  });

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-7">
      {data.map((el, idx) => (
        <CardItem
          key={idx}
          name={el.product_name}
          id={el.id}
          image={el.product_image}
          to={`/account/${user.id}/order/${el.id}/status`}
        />
      ))}
    </div>
  );
};

export default Order;
