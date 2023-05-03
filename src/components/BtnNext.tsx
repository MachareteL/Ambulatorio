import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

type BtnType = {
    onClick: () => void
}

export default function BtnNext({onClick}: BtnType) {
  return (
    <button onClick={onClick} className={`${inter.className} bg-[#007BC0] text-white px-4 py-2 rounded justify-self-end mb-10`}>Continuar</button>
    )
}
