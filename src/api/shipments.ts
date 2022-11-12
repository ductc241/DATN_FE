import instance from "./instance";

export const listShipments = () => {
  const url = `/import_shipments`;
  return instance.get(url);
};

export const addShipments = (data: any) => {
  const url = `/import_shipments`;
  return instance.post(url, data);
};

export const getOneShipment = (id: number | string | undefined) => {
  const url = `/import_shipments/${id}`;
  return instance.get(url);
};

export const deleteShipment = (id: number | string | undefined) => {
  const url = `/import_shipments/${id}`;
  return instance.delete(url);
};

export const getSuppliersApi = () => {
  const url = `/suppliers`;
  return instance.get(url);
};

export const getDataSupplierProductApi = (id: number) => {
  const url = `suppliers/${id}?_embed=products1`;
  return instance.get(url);
};

export const getProFormShipments = () => {
  const url = `/products1`;
  return instance.get(url);
};
