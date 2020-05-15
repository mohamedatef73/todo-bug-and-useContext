import React,{useState} from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'

const SongList =() =>{
    const [songs,setSongs] = useState([
        {title: 'rab god' , id: 1},
        {title:'i can do it' , id:2},
        {title:'never say never', id:3}
      ])

     const addSong = (title) =>{
         setSongs([...songs,{title:title , id: uuid()}])
      }
    
    return(
        <div className='song-list'>
            <ul>
            {songs.map(song =>{
                return(
                    <li key={song.id}>{song.title} </li> 
                )
            })}
            </ul>

        <NewSongForm addSong ={addSong}/>            
            
        </div>
    )
}
export default SongList