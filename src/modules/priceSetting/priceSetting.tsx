import { useEffect, useState } from "react";
import { getProFormShipments } from "../../api/shipments";
import { Table, TextField } from "../../components";
import FormatNumber from "../../components/formatNumber/formatNumber";
import { ITableColumn } from "../../components/Table/Table.types";

const PriceSetting = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await getProFormShipments();
      setDataSource(data);
    };
    getData();
  }, []);

  const colums: ITableColumn[] = [
    {
      title: "Mã hàng",
      dataIndex: "id",
      key: 1
    },
    {
      title: "Tên hàng",
      dataIndex: "name",
      key: 2
    },
    {
      title: "Giá nhập / 1SP",
      dataIndex: "import_price",
      key: 3,
      render: (record) => {
        return <FormatNumber number={record.import_price} />;
      }
    },
    {
      title: "Giá Bán / 1SP",
      dataIndex: "price",
      key: 4,
      render: (record) => {
        return (
          <div>
            <TextField
              name="gia_ban"
              value={record.price}
              type="number"
              // onChange={(e: any) => setValue(e.target.value)}
            />
          </div>
        );
      }
    },
    {
      title: "Lãi / 1SP",
      dataIndex: "",
      key: 5,
      render: (record) => {
        return <FormatNumber number={record.price - record.import_price} />;
      }
    }
  ];

  return (
    <div
      className="grid grid-cols-[1fr,4fr] gap-5
    "
    >
      <div className="border">Side Bar</div>
      <div className="border">
        <Table column={colums} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default PriceSetting;
