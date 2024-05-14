import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'

const UpdateFood = () => {
  const navigate = useNavigate()
  const food = useLoaderData()

  const {
    _id,
    foodName,
    foodImage,
    // donatorName,
    // donatorImage,
    // requestDate, 
    quantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    // userEmail,
    // donar,
  } = food || {}

  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date(expiredDateTime) || new Date())
  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const foodName = form.foodName.value
    const foodImage = form.foodImage.value
    const quantity = form.quantity.value
    const email = form.email.value
    const expiredDateTime = startDate
    const pickupLocation = form.pickupLocation.value
    const additionalNotes = form.additionalNotes.value
    const foodData = {
      foodName,
      foodImage,
      quantity,
      pickupLocation,
      additionalNotes,
      donar: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    }

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/food/${_id}`,
        foodData
      )
      console.log(data)
      toast.success('Food Data Updated Successfully!')
      navigate('/myadded')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Food
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Food Name
              </label>
              <input
                id='job_title'
                name='job_title'
                defaultValue={foodName}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Expiry</label>

              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Food Image
              </label>
              <input
                id='job_title'
                name='job_title'
                defaultValue={foodImage}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Quantuty
              </label>
              <input
                id='max_price'
                defaultValue={quantity}
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Location
              </label>
              <input
                id='max_price'
                defaultValue={pickupLocation}
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              defaultValue={additionalNotes}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              cols='30'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateFood