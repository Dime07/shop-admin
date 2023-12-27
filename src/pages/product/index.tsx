import DataTable from "@/components/general/DataTable";
import { Button } from "@/components/ui/button";
import useGetProductList from "@/firebase/hooks/useGetProductList";
import MainLayout from "@/layouts/mainLayout";
import { ProductType, productColumns } from "@/table/product/productColumn";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Product = () => {
  const { productList } = useGetProductList();
  return (
    <MainLayout>
      <div className="flex justify-between mb-4">
        <p className="text-xl text-viridian-950 font-semibold">Product list</p>
        <Link to={{ pathname: "/product/add" }}>
          <Button className="bg-viridian-800 flex items-center gap-2">
            <PlusIcon />
            Add Product
          </Button>
        </Link>
      </div>
      <DataTable columns={productColumns} data={productList as ProductType[]} />
    </MainLayout>
  );
};

export default Product;
