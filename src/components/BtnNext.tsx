import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

type BtnType = {
    onClick: () => void
    valid: boolean
}

export default function BtnNext({onClick, valid}: BtnType) {
  return (
    <button onClick={onClick} disabled={!valid} className={`${inter.className} transition duration-150 ease-linear bg-[#007BC0] text-white px-4 py-2 rounded justify-self-end mb-10 disabled:bg-gray-300 disabled:text-gray-400`}>Continuar</button>
    )
}
