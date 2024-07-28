// import React from 'react'

export default function Hobbies() {
  return (
    <div className='border rounded-lg p-6 mr-14 shadow-lg shadow-gray-200 mt-7'>
            <h4 className="text-xl font-semibold text-buttons mb-6">Hobbies</h4>
            <div>
                <p className='font-semibold text-buttons mb-6'>Add Hobbies</p>
                <textarea name="Hobbies" id="Hobbies" className='resize-none w-[630px] h-[143px] p-4 outline-none border-gray-300 border rounded' placeholder='Type your hobbies here'></textarea>

            </div>
            <p className='text-[10px] text-buttons mt-5 font-semibold ml-4'>Max 3 separate them with comma</p>
    </div>
  )
}
