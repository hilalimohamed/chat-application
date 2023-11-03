'use client'

import React from 'react'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary'

export default function ImagePage({ user }: { user: any }) {
  // const updateProfileImage = async () => {
  //   try {
  //     // console.log(data)
  //     await axios
  //       .put('/api/update', {
  //         id: user.id,
  //         // image: data.yourName,
  //       })
  //       .then((res) => console.log(res.data))
  //     // .finally(() => setFirst(!first))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const updateProfileImage = (image: any) => {
    axios.put('/api/update/imgProfile', {
      image: image?.info?.secure_url,
      id: user.id,
    })
  }
  return (
    <div>
      <CldUploadButton
        uploadPreset="kqq7a2ic"
        options={{ maxFiles: 1 }}
        onUpload={updateProfileImage}
      >
        <Image
          src={user?.image || img}
          alt="cover photo"
          height={200}
          width={200}
          className="h-full cursor-pointer bg-white dark:bg-[#282828]"
        />
      </CldUploadButton>
    </div>
  )
}
// >
//   <HiPhoto size={30} className="text-sky-500" />
