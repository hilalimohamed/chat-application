// 'use client'

// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import img from '@/public/images/profile.jpeg'
// import { FaPencil } from 'react-icons/fa6'
// import { BsEmojiSmile } from 'react-icons/bs'
// import { useForm } from 'react-hook-form'
// import { useSession } from 'next-auth/react'

// type FormValues = {
//   yourName: string
//   aboutYou: string
// }

// export default function Page() {
//   const [first, setFirst] = useState(false)
//   const [second, setSecond] = useState(false)
//   const [third, setThird] = useState(true)
//   const [fourth, setFourth] = useState(true)

//   //   const user = await getUser()
//   const session = useSession()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       yourName: session.data?.user?.name || '',
//       aboutYou: 'mohammed',
//     },
//   })
//   const [yourName, setYourName] = useState(session?.data?.user?.name || '')
//   const [aboutYou, setAboutYou] = useState('mohammed')
//   const handleFirstButton = () => {
//     setFirst(!first)
//   }

//   const handleSecondButton = () => {
//     setSecond(!second)
//   }

//   const mouseMove = () => {
//     setThird(!third)
//   }

//   const mouseLeave = () => {
//     setThird(!third)
//   }
//   const mouseMoveF = () => {
//     setFourth(!fourth)
//   }

//   const mouseLeaveF = () => {
//     setFourth(!fourth)
//   }

//   const onSubmit = (data: FormValues) => {
//     console.log(data)
//   }
//   const onSubmit2 = (data: FormValues) => {
//     console.log(data)
//   }

//   const handleYourNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value
//     if (inputValue.length <= 25) {
//       setYourName(inputValue)
//     }
//   }

//   const handleAboutYouChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value
//     if (inputValue.length <= 130) {
//       setAboutYou(inputValue)
//     }
//   }

//   useEffect(() => {
//     if (session.status === 'authenticated') {
//       console.log(session.data.user)
//     } else {
//       console.log('sir tl3b')
//     }
//   }, [])

//   return (
//     <div className="lg:pl-[260px] lg:pr-3 lg:pt-20">
//       <div className="border-2 border-gray-200 lg:py-20 flex justify-center place-items-center flex-col relative">
//         <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-sky-500 absolute -top-16">
//           <Image
//             src={img}
//             alt="cover photo"
//             height={200}
//             width={200}
//             className="h-full"
//           />
//         </div>
//         <div className="pt-20 flex gap-10">
//           <div>
//             {first ? (
//               <div>
//                 <form
//                   onClick={handleSubmit(onSubmit)}
//                   className="flex flex-col gap-2"
//                 >
//                   <input
//                     type="text"
//                     placeholder="your name"
//                     {...register('yourName', {
//                       required: 'This field is required',
//                       pattern: {
//                         value: /^[A-Za-z]+( [A-Za-z]+)*$/,
//                         message:
//                           'Only letters and a single space between words are allowed',
//                       },
//                       maxLength: {
//                         value: 25,
//                         message: 'Exceeds 25 characters limit',
//                       },
//                       minLength: {
//                         value: 3,
//                         message: 'Must be at least 3 characters',
//                       },
//                     })}
//                     className="border-b-2 text-sm focus:placeholder:text-sky-400 focus:bg-slate-100 focus:rounded focus:border-b-2 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-500 py-2 pl-2"
//                     onChange={handleYourNameChange}
//                     value={yourName}
//                   />
//                   {errors.yourName && (
//                     <span
//                       style={{ fontSize: '11px' }}
//                       className="text-red-500 -mt-2 -mb-2"
//                     >
//                       {errors.yourName.message}
//                     </span>
//                   )}
//                   <div className="flex justify-end items-center gap-2">
//                     <div className="border border-gray-300 rounded p-1.5 hover:bg-gray-300 cursor-pointer">
//                       <BsEmojiSmile size={16} />
//                     </div>
//                     {third ? (
//                       <div
//                         onMouseMove={mouseMove}
//                         className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded"
//                       >
//                         Rakm
//                       </div>
//                     ) : (
//                       <button
//                         onMouseLeave={mouseLeave}
//                         className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded"
//                       >
//                         Done
//                       </button>
//                     )}
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               <div className="flex gap-5 items-center">
//                 <h1 className="font-bold text-lg text-gray-800">
//                   {session.data?.user?.name || ''}
//                 </h1>
//                 <div
//                   onClick={handleFirstButton}
//                   className="cursor-pointer hover:bg-slate-100 hover:text-gray-700 hover:rounded p-1.5 text-gray-800"
//                 >
//                   <FaPencil size={14} />
//                 </div>
//               </div>
//             )}
//           </div>
//           <div>
//             {second ? (
//               <div>
//                 <form
//                   onClick={handleSubmit(onSubmit2)}
//                   className="flex flex-col gap-2"
//                 >
//                   <input
//                     type="text"
//                     placeholder="About You"
//                     {...register('aboutYou', {
//                       required: 'This field is required',
//                       maxLength: {
//                         value: 130,
//                         message: 'Exceeds 130 characters limit',
//                       },
//                       minLength: {
//                         value: 5,
//                         message: 'Must be at least 5 characters',
//                       },
//                     })}
//                     value={aboutYou}
//                     onChange={handleAboutYouChange}
//                     className="border-b-2 text-sm focus:placeholder:text-sky-400 focus:bg-slate-100 focus:rounded focus:border-b-2 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-500 py-2 pl-2"
//                   />
//                   {errors.aboutYou && (
//                     <span
//                       style={{ fontSize: '11px' }}
//                       className="text-red-500 -mt-2 -mb-2"
//                     >
//                       {errors.aboutYou.message}
//                     </span>
//                   )}
//                   <div className="flex justify-end items-center gap-2">
//                     <div className="border border-gray-300 rounded p-1.5 hover-bg-gray-300 cursor-pointer">
//                       <BsEmojiSmile size={16} />
//                     </div>
//                     {fourth ? (
//                       <div
//                         onMouseMove={mouseMoveF}
//                         className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded"
//                       >
//                         Rakm
//                       </div>
//                     ) : (
//                       <button
//                         onMouseLeave={mouseLeaveF}
//                         className="border-none bg-sky-500 text-white py-0.5 px-1.5 rounded"
//                       >
//                         Done
//                       </button>
//                     )}
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               <div className="flex gap-5 items-center">
//                 <h1 className="font-semibold text-lg text-gray-800">
//                   About You
//                 </h1>
//                 <div
//                   onClick={handleSecondButton}
//                   className="cursor-pointer hover:bg-slate-100 hover:text-gray-700 hover:rounded p-1.5 text-gray-800"
//                 >
//                   <FaPencil size={14} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import getUser from '@/app/action/getUser'
import ProfilePage from './components/ProfilePage'

export default async function page() {
  const user = await getUser()
  return (
    <div className="lg:pl-80 lg:pr-3 lg:pt-20 dark:bg-[#282828]">
      <ProfilePage user={user} />
    </div>
  )
}
