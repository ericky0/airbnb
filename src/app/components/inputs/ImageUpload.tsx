'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any
}

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload = ({onChange, value}: ImageUploadProps) => {

  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url)
  }, [onChanges])

  return (
    <CldUploadWidget 
      onUpload={handleUpload}
      uploadpreset=''
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
          >

          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload