/* eslint-disable react/no-unescaped-entities */
import StartCard from '@/components/StartCard'
import { FiFileText } from 'react-icons/fi'

const page = () => {
  return (
    <div className='text-black'>
      <div>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-text-secondary'>Welcome back, John. Here's what's happening with your courses.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
        <StartCard 
        title='Total Courses'
        count={5}
        icon={<FiFileText className='text-primary' />}
        iconClass='text-primary'
        colorClass='border-primary'
        link='/dashboard'
        />
        <StartCard 
        title='Total Courses'
        count={5}
        icon={<FiFileText className='text-primary' />}
        iconClass='text-primary'
        colorClass='border-primary'
        link='/dashboard'
        />
        <StartCard 
        title='Total Courses'
        count={5}
        icon={<FiFileText className='text-primary' />}
        iconClass='text-primary'
        colorClass='border-primary'
        link='/dashboard'
        />
      </div>
    </div>
  )
}

export default page
