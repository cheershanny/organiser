'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const AddItem = () => {
  const router = useRouter();
  return (
    <button className="btn btn-secondary" onClick={() => router.push(`/crucial_task`)}>Add</button>
  )
}

export default AddItem