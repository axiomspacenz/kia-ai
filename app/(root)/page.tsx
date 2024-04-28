import { Collection } from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'
import { SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async ({ searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1
  const searchQuery = searchParams?.query as string || ''

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className='sm:flex-center hidden h-96 flex-col gap-4 rounded-[20px] bg-gradient-to-r from-purple-400 to bg-purple-600 border bg-cover bg-no-repeat p-10 shadow-inner'>
        {/* <h1 className='text-5xl text-center text-white font-bold py-2 px-4'>
          Explore your creative imagination with <span className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-white text-5xl text-center font-bold'>Kea AI</span>
        </h1> */}
        <h1 className='text-5xl text-center text-white font-semibold tracking-tight py-2 px-4 max-w-[40rem]'>
          Edit Images Effortlessly with ArtifiQ AI Editor
        </h1>
        <h5 className='text-md text-center text-white font-regular tracking-tight py-2 px-4 max-w-[40rem]'>
          Choose from the options below to start editing your image:
        </h5>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 5).map((link) => (
            <Link key={link.label} href={link.route} className='flex-center felx-col gap-2'>
              <li>
                <Image src={link.icon} width={24} height={24} alt='icons' className='flex-center w-fit bg-white rounded-full p-4' />
              </li>
              <p className='p-14-medium text-center text-white'>{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className='sm:mt-12'>

        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home