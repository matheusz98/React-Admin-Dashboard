import { Card } from "@mui/material";
import { cryptoOrders } from "../../../data/orderData";
import RecentOrdersTable from "./RecentOrdersTable";

const RecentOrders = () => {
  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
};

export default RecentOrders;
