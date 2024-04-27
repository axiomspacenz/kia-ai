import { Collection } from '@/components/shared/Collection'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async ({ searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1
  const searchQuery = searchParams?.query as string || ''

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className='home'>
        <h1 className='home-heading'>
          Unleash Your Imagination with Kia AI
        </h1>
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
          totalPages={images?.totalImages}
          page={page}
        />
      </section>
    </>
  )
}

export default Home