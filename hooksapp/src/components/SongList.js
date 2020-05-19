import React,{useState} from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'

const SongList =() =>{
    const [songs,setSongs] = useState([])

     const addSong = (title) =>{
         setSongs([...songs,{title:title , id: uuid()}])
      }

      const removeSong = (id) =>{
          setSongs(songs.filter(singer => singer.id !== id ))
      }
    
    return(
        <div className='song-list'>
            <ul>
            {songs.map(song =>{
                return(
                    <li style={{color:'pink'}} key={song.id}
                     onClick = {() => removeSong(song.id)}>
                        {song.title}</li> 
                )
            })}
            </ul>

        <NewSongForm addSong ={addSong}/>            
            
        </div>
    )
}
export default SongList