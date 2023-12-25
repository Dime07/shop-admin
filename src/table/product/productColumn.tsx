import { ColumnDef } from "@tanstack/react-table";

export type Product = {
  id: string;
  name: string;
  brand: string;
  stock: string;
  image: string;
};

export const productColumns: ColumnDef<Product>[] = [
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
