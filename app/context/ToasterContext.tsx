'use client'

import { Toaster } from 'react-hot-toast'

export default function ToasterContext() {
  return (
    <Toaster
      reverseOrder={true}
      position="top-right"
      toastOptions={{
        duration: 1500,
        success: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: 'black',
            borderRadius: '3px',
            borderLeft: '5px solid green',
          },
        },
        error: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: 'black',
            borderRadius: '2px',
            borderLeft: '5px solid red',
          },
        },
      }}
    />
  )
}
