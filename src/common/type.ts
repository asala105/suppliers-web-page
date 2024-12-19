export interface Supplier {
  id: number;
  name: string;
  vatNumber: string;
}

export type AddSupplierInput = Omit<Supplier, "id">;

export type EditSupplierInput = Supplier;
