import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Select, Table } from "../../../components";
import { ITableColumn } from "../../../components/Table/Table.types";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const TransactionTable = (props: Props) => {
  const [isLoading, setIsloading] = useState(false);
  const columns: ITableColumn[] = [
    {
      title: "Mã nhập hàng",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Thời gian",
      dataIndex: "import_date",
      key: "import_date"
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "shipments",
      key: "shipments"
    },
    {
      title: "Cần trả NCC",
      dataIndex: "import_price_totail",
      key: "import_price_totail"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status"
    }
  ];

  const dataSource = [
    {
      id: 1,
      import_date: "20/10/2022",
      shipments: "Nguyeenx Xuan Dai",
      import_price_totail: 10000000,
      status: 1
    },
    {
      id: 2,
      import_date: "20/10/2022",
      shipments: "Nguyeenx Xuan Dai",
      import_price_totail: 10000000,
      status: 1
    },
    {
      id: 3,
      import_date: "20/10/2022",
      shipments: "Nguyeenx Xuan Dai",
      import_price_totail: 10000000,
      status: 1
    },
    {
      id: 4,
      import_date: "20/10/2022",
      shipments: "Nguyeenx Xuan Dai",
      import_price_totail: 10000000,
      status: 1
    }
  ];
  return (
    <div>
      <div className="flex justify-between">
        <select className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <Link
          to="add-shipment"
          className="bg-green-500 hover:bg-green-600 px-6 py-[12px] rounded-md leading-6 cursor-pointer text-white text-sm font-medium "
        >
          Nhập hàng
        </Link>
      </div>
      <div className="mt-8">
        <Table column={columns} dataSource={dataSource} loading={isLoading} />
      </div>
    </div>
  );
};

export default TransactionTable;
