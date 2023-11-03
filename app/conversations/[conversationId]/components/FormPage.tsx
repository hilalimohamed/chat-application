'use client'

import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2'
import { BsEmojiSmile } from 'react-icons/bs'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import Input from './Input'
import { CldUploadButton } from 'next-cloudinary'

const FormPage = ({ conversationId }: { conversationId: any }) => {
  console.log('hola:  >>  ', conversationId[0]?.id)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
      text: data.message,
      conversationId: conversationId[0]?.id,
    })
  }

  const uploadImage = (image: any) => {
    axios.post('/api/messages', {
      image: image?.info?.secure_url,
      conversationId: conversationId[0]?.id,
    })
  }

  return (
    <div className="py-3 px-4 z-50 bg-white border-t border-l border-gray-400 flex items-center gap-2 lg:gap-4 w-full dark:bg-[#1F1F1F] dark:border-gray-600 dark:border-opacity-10">
      <CldUploadButton
        uploadPreset="kqq7a2ic"
        options={{ maxFiles: 1 }}
        onUpload={uploadImage}
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <BsEmojiSmile size={30} className="text-sky-500 cursor-pointer" />
        <Input
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message here"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  )
}

export default FormPage
