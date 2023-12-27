import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../firebase";

const useAddProduct = () => {
  const ref = collection(firestore, "products");
  return useFirestoreCollectionMutation(ref);
};

export default useAddProduct;
