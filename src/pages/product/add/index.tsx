import ComboBoxForm from "@/components/general/ComboBoxForm";
import ShadowCard from "@/components/general/ShadowCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAddProduct from "@/firebase/mutations/useAddProduct";
import useUploadAssets from "@/firebase/mutations/useUploadAssets";
import MainLayout from "@/layouts/mainLayout";
import { ProductFormSchemeType, productFormScheme } from "@/schemes/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const AddProductForm = () => {
  const { mutateAsync: addProduct } = useAddProduct();
  const { mutateAsync: uploadAssets } = useUploadAssets();
  const form = useForm<ProductFormSchemeType>({
    resolver: zodResolver(productFormScheme),
    defaultValues: {
      name: "",
      brand: "",
      stock: "",
    },
  });

  const handleAddProduct = async (value: ProductFormSchemeType) => {
    try {
      const image = await uploadAssets(value.image);
      value.image = image;

      await addProduct({
        ...value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShadowCard>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleAddProduct)}
          className="space-y-3 mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <p>Product Name</p>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <p>Brand Name</p>
                <FormControl>
                  <ComboBoxForm
                    options={frameworks}
                    value={field.value}
                    placeholder="Select Brand"
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <p>Stock</p>
                <FormControl>
                  <Input placeholder="Stock" {...field} type="number" />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          {/* //TODO DO MORE RESEARCH HOW TO UPLOAD FILE */}
          <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <p>Product Field</p>
                <FormControl>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input
                      value={value?.filename}
                      id="picture"
                      type="file"
                      {...field}
                      onChange={(e) => {
                        const selectedFile =
                          e.target.files && e.target.files[0];
                        if (selectedFile) {
                          onChange(selectedFile);
                        }
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <Button type="submit">Add Product</Button>
        </form>
      </Form>
    </ShadowCard>
  );
};

const AddProductPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-viridian-950 font-semibold">Add product</p>
        <AddProductForm />
      </div>
    </MainLayout>
  );
};

export default AddProductPage;
