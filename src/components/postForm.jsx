import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImages, setSelectedImages] = useState([]);
  console.log(selectedImages)

  const onDrop = useCallback((acceptedFiles) => {
    const fileWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setSelectedImages((prev) => [...prev, ...fileWithPreview]);
  }, []);

  //dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

  const onSubmit = (data) => {

   const formData = new FormData()
   formData.append("title", data.title)
   formData.append("content", data.content)
   selectedImages.forEach((file)=> {
    formData.append("images",file)
   })
   senDataToApi(formData)
  };


  const senDataToApi = (formData) => {
     
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      {/* Title Field */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post title"
        />
        {errors.title && <p className="text-red-400">{errors.title.message}</p>}
      </div>

      {/* Content Field */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          {...register("content")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post content"
        />
      </div>

      {/*  yaha muni chai image  */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <div
          {...getRootProps()}
          className={`mt-1 p-4 border-2 border-dashed rounded-md cursor-pointer ${
            isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-sm text-gray-500">
            {isDragActive
              ? "Drop the images here..."
              : "Drag & drop images here, or click to select files"}
          </p>
        </div>
      </div>



      {selectedImages.length > 0 && (
        <div className=" grid grid-cols-5 gap-3 mt-3">
          {selectedImages.map((file, index) => (
            <img
              className=" h-24 w-full"
              key={index}
              src={file.preview}
              alt={`file-${index}-preview`}
            />
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
