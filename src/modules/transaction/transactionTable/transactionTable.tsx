import { Table } from "antd";
import { Button } from "../../../components";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const TransactionTable = (props: Props) => {
  return (
    <div className="border">
      <div className="flex justify-end">
        <Button>Tạo phiếu</Button>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default TransactionTable;
