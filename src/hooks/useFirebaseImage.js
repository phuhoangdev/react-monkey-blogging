import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { useState } from "react";

export const useFirebaseImage = (setValue, getValues) => {
     const [progress, setProgress] = useState(0);
     const [image, setImage] = useState("");

     if (!setValue || !getValues) return;

     const handleUploadImage = (file) => {
          const storage = getStorage();
          const storageRef = ref(storage, "images/" + file.name);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
               "state_changed",
               (snapshot) => {
                    const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progressPercent);

                    switch (snapshot.state) {
                         case "paused":
                              console.log("Upload is paused");
                              break;
                         case "running":
                              console.log("Upload is running");
                              break;
                         default:
                              console.log("Nothing");
                    }
               },
               (error) => {
                    console.log("Error", error);
               },
               () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                         // console.log("File available at", downloadURL);
                         setImage(downloadURL);
                    });
               },
          );
     };

     const handleSelectImage = (e) => {
          const file = e.target.files[0];
          if (!file) return;

          setValue("image_name", file.name);
          handleUploadImage(file);
     };

     const handleDeleteImage = () => {
          const storage = getStorage();
          const imageRef = ref(storage, "images/" + getValues("image_name"));

          deleteObject(imageRef)
               .then(() => {
                    setProgress(0);
                    setImage("");
               })
               .catch((error) => {
                    console.log("error: ", error);
               });
     };

     return {
          image,
          progress,
          handleSelectImage,
          handleDeleteImage,
     };
};
