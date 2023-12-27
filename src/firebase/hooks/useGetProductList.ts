import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import { firestore } from "../firebase";

const useGetProductList = () => {
  const ref = collectionGroup(firestore, "products");
  const query = useFirestoreQuery(["products"], ref);

  const productList = query.data
    ? query.data.docs.map((docSnapshot) => {
        return { ...docSnapshot.data(), id: docSnapshot.id };
      })
    : [];

  return { productList, ...query };
};

export default useGetProductList;
