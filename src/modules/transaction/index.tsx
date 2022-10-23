import TransactionTable from "./transactionTable/transactionTable";

const Transaction = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-[1fr,4fr] gap-5">
        <div className="border pt-6">
          <span className="font-bold text-xl">Phiếu nhập hàng</span>
          <div></div>
        </div>
        <div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
