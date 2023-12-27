import { ColumnDef } from "@tanstack/react-table";

export type ProductType = {
  id: string;
  name: string;
  brand: string;
  stock: string;
  image: string;
};

export const productColumns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
];
