import { Button, Navbar, TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch } from 'react-icons/ai'
import React from 'react'

export default function Header() {
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitepspace-nowrap text-sm sm:text-xl  font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Ash's</span>
            Blog
        </Link>
        <form>
            <TextInput
            type='text'
            placeholder='search'
            rightIcon={AiOutlineSearch}
            className='hidden lg-inline'
            />
        </form>

        <Button className='w-20 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch/>
        </Button >

      </Navbar>
    </div>
  )
}
