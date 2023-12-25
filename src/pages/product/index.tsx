import DataTable from "@/components/general/DataTable";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/mainLayout";
import { productColumns } from "@/table/product/productColumn";
import { PlusIcon } from "lucide-react";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Floral Summer Dress",
    brand: "FashionCo",
    stock: "10",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+1",
  },
  {
    id: "2",
    name: "Leather Jacket",
    brand: "TrendyWear",
    stock: "5",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+2",
  },
  {
    id: "3",
    name: "Classic Denim Jeans",
    brand: "DenimStyle",
    stock: "8",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+3",
  },
  {
    id: "4",
    name: "Formal Black Suit",
    brand: "EleganceWear",
    stock: "3",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+4",
  },
  {
    id: "5",
    name: "Vintage Floral Blouse",
    brand: "RetroChic",
    stock: "12",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+5",
  },
  {
    id: "6",
    name: "Casual Sneakers",
    brand: "SportySteps",
    stock: "15",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+6",
  },
  {
    id: "7",
    name: "Striped Polo Shirt",
    brand: "CasualTrends",
    stock: "6",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+7",
  },
  {
    id: "8",
    name: "Fashionable Sunhat",
    brand: "SunStyle",
    stock: "9",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+8",
  },
  {
    id: "9",
    name: "Elegant Evening Gown",
    brand: "EveningElegance",
    stock: "4",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+9",
  },
  {
    id: "10",
    name: "Stylish Winter Coat",
    brand: "WinterWardrobe",
    stock: "7",
    image: "https://dummyimage.com/300x400/ccc/000&text=Product+10",
  },
];

const Product = () => {
  return (
    <MainLayout>
      <div className="flex justify-between mb-4">
        <p className="text-xl text-viridian-950 font-semibold">Product list</p>
        <Button className="bg-viridian-800 flex items-center gap-2">
          <PlusIcon />
          Add Product
        </Button>
      </div>
      <DataTable columns={productColumns} data={DUMMY_DATA} />
    </MainLayout>
  );
};

export default Product;
