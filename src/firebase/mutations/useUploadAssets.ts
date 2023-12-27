import { useMutation } from "react-query";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const useUploadAssets = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      const storageRef = ref(storage, `files/${file.name}`);
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);

      return downloadURL;
    },
  });
};

export default useUploadAssets;
