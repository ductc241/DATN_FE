import React from "react";

const TienLai = () => {
  return (
    <div>
      <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-0 border-0">
          <div className="md:col-span-2 xl:col-span-3">
            <h3 className="text-lg font-semibold">Tiền lỗ</h3>
          </div>
          {/* Snippet */}
          <div className="border mt-4 rounded-lg">Sơ đồ thống kê Tiền</div>
        </div>
      </div>
    </div>
  );
};

export default TienLai;
