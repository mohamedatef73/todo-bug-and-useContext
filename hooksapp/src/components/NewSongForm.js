import React, { useState } from 'react'

const NewSongForm = ({addSong}) =>{
    const [title, setTitle] = useState('');
   const handleSubmit = (e) =>{
       e.preventDefault();
       addSong(title);
       setTitle('')

   }

    return(
        <form onSubmit={handleSubmit}>
            <label>new song</label> &nbsp;&nbsp;
            <input type = 'text' required value={title}
             onChange={(e)=> setTitle(e.target.value) } />&nbsp;
            <input type = 'submit'/>
        </form>
    )
}
export default NewSongForm