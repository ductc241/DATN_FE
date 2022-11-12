import PriceSetting from "../modules/priceSetting/priceSetting";
import ShipMentsForm from "../modules/transaction/shipments/ShipmentsForm";
import ShipmentsTable from "../modules/transaction/shipments/shipmentsTable";
import {
  CategoryCreatePage,
  CategoryListPage,
  CategoryUpdatePage
} from "../pages/category";
import DashboardPage from "../pages/DashboardPage";
import {
  ProductCreatePage,
  ProductListPage,
  ProductUpdatePage
} from "../pages/product";
import SoQuyListPage from "../pages/SoQuy/SoQuyListPage";
import SuplierPage from "../pages/supplier/SupllierPage";

import IRoute from "../types/router.type";
import * as routerPaths from "./routes.paths";

export const appRoutes: IRoute[] = [
  {
    key: 1,
    path: routerPaths.PATH_DASHBOARD,
    component: <DashboardPage />
  },

  {
    key: 2,
    path: routerPaths.PATH_PRODUCTS,
    component: <ProductListPage />
  },
  {
    key: 3,
    path: routerPaths.PATH_PRODUCTS_ADD,
    component: <ProductCreatePage />
  },
  {
    key: 4,
    path: routerPaths.PATH_PRODUCTS_UPDATE,
    component: <ProductUpdatePage />
  },
  {
    key: 5,
    path: routerPaths.PATH_IMPORT_SHIPMENT,
    component: <ShipmentsTable />
  },
  {
    key: 6,
    path: routerPaths.PATH_SUPPLIER,
    component: <SuplierPage />
  },
  {
    key: 7,
    path: routerPaths.PATH_CATEGORY,
    component: <CategoryListPage />
  },
  {
    key: 8,
    path: routerPaths.PATH_CATEGORY_ADD,
    component: <CategoryCreatePage />
  },
  {
    key: 9,
    path: routerPaths.PATH_CATEGORY_UPDATE,
    component: <CategoryUpdatePage />
  },
  {
    key: 10,
    path: routerPaths.PATH_SoQuy,
    component: <SoQuyListPage />
  },
  {
    key: 11,
    path: routerPaths.PATH_PRICE_SETTING,
    component: <PriceSetting />
  },
  {
    key: 12,
    path: routerPaths.PATH_IMPORT_SHIPMENT_ADD,
    component: <ShipMentsForm />
  }
];
