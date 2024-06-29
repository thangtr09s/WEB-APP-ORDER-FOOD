import ViewContentModal from "components/Modal/ViewContentModal";

interface OrderViewProps {
  description: string;
}

const OrderView = ({ description }: OrderViewProps) => {

  
  return <ViewContentModal  description={description} />;
};

export default OrderView;
