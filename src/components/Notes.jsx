import React, { useState, useRef } from 'react';
import { styles } from '../style';

const Notes = () => {
  
  let [noteList, setNoteList] = useState([]);
  
  const inputElement = useRef();

  const addNote = () => {
    let newNote = inputElement.current.value
    setNoteList(noteList => noteList.concat([newNote]))
  }

  return (
    <section className='w-full my-5 border-4 rounded-lg border-black px-6'>
        <ul className={`${styles.flexCenter} sm:flex-row sm:flex-wrap flex-col gap-3 list-none w-full mt-4`}>
            {noteList.map((note, index) => 
                <li key={`note-${index + 1}`} className={`w-full p-3 h-16 text-black rounded-lg border-danger border-2 flex text-[20px] items-center`}>
                    <div className='bg-danger rounded-full text-white p-5 w-10 h-10 flex justify-center items-center mr-5'>
                        {index + 1}
                    </div>{note}
                </li>
            )}
        </ul>
        <div className='w-full flex flex-col gap-3 items-center mt-5'>
            <input type="text" placeholder='add a note' className='rounded-lg w-full px-2 py-4 border-2 border-black text-[20px] focus:outline-none' ref={inputElement} />
            <button className='text-white bg-primary w-fit py-2 px-6 rounded-lg mb-4' onClick={addNote} >
                Add Note
            </button>
        </div>
    </section>
  )
}

export default Notes