import React, {useState} from 'react'

export default function imageSearch({searchText}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-4 mx-auto'>
        <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <div className='flex items-center border-b-2 border-gray-400 py-2'>
                <input onChange={e=>setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Search Image Term...'/>
                <button className='flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-xl' type='submit'>
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}
