'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaPencil } from 'react-icons/fa6'
import { BsEmojiSmile } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { useClickOutside } from '@react-hookz/web'

export default function UpdateAbout({ user }: { user: any }) {
  type FormValues = {
    aboutYou: string
  }

  const [second, setSecond] = useState(false)
  const [fourth, setFourth] = useState(true)

  const ref = useRef(null)
  useClickOutside(ref, () => {
    setSecond(false)
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      aboutYou: 'about you',
    },
  })
  const [aboutYou, setAboutYou] = useState('about you')
  const [lenght, setLenght] = useState(aboutYou.length)

  const handleSecondButton = () => {
    setSecond(!second)
  }

  const mouseMoveF = () => {
    setFourth(!fourth)
  }

  const mouseLeaveF = () => {
    setFourth(!fourth)
  }

  const onSubmit2 = (data: FormValues) => {
    console.log(data)
  }

  const handleAboutYouChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue.length <= 130) {
      setAboutYou(inputValue)
      setLenght(inputValue.length)
    }
  }
  return (
    <div ref={ref}>
      {second ? (
        <div>
          <form
            onClick={handleSubmit(onSubmit2)}
            className="flex flex-col gap-2"
          >
            <input
              type="text"
              placeholder="About You"
              {...register('aboutYou', {
                required: 'This field is required',
                maxLength: {
                  value: 130,
                  message: 'Exceeds 130 characters limit',
                },
                minLength: {
                  value: 5,
                  message: 'Must be at least 5 characters',
                },
              })}
              value={aboutYou}
              onChange={handleAboutYouChange}
              className="border-b-2 text-sm focus:placeholder:text-sky-400 focus:bg-slate-100 rounded focus:rounded focus:border-b-2 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-500 py-2 pl-2 dark:bg-[#181818] dark:text-white"
            />
            {errors.aboutYou && (
              <span
                style={{ fontSize: '11px' }}
                className="text-red-500 -mt-2 -mb-2"
              >
                {errors.aboutYou.message}
              </span>
            )}
            <div className="flex justify-end items-center gap-2">
              <div className="border-2 border-gray-300 rounded p-1 hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-opacity-5 dark:hover:border-sky-500 dark:hover:text-sky-500">
                <BsEmojiSmile size={16} />
              </div>
              {fourth ? (
                <div
                  onMouseMove={mouseMoveF}
                  className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded dark:text-black"
                >
                  {lenght <= 9 && lenght !== 0 ? (
                    <div>0{lenght}/130</div>
                  ) : (
                    <div>{lenght}/130</div>
                  )}
                </div>
              ) : (
                <button
                  onMouseLeave={mouseLeaveF}
                  className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded dark:text-black"
                >
                  Done
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <h1 className="font-semibold text-lg text-gray-800 dark:text-white">
            About You
          </h1>
          <div
            onClick={handleSecondButton}
            className="cursor-pointer hover:bg-slate-100 hover:text-gray-700 hover:rounded p-1.5 text-gray-800 dark:text-white dark:hover:bg-opacity-10"
          >
            <FaPencil size={14} />
          </div>
        </div>
      )}
    </div>
  )
}
