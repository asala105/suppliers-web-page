export interface Supplier {
  id: string;
  name: string;
  vatNumber: string;
}

export type AddSupplierInput = Omit<Supplier, "id">;

export type EditSupplierInput = Supplier;
