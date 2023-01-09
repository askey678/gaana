import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { url } from "../common/constant";

const AddAlbum = () => {

    const [thumbnails, setThumbnail] = useState(undefined)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState(-1)
    const [duration, setDuration] = useState('')

    // creating another useState hook to catch Artist from get request and use them in drop down box.
    const [artists, setArtists]=useState([])



    useEffect(() => {
        getAllArtist()
    }, [])

    const navigate = useNavigate()

    const onThumbselect = (event) => {
        // const file=event.target.files[0]
        // console.log(file)
        setThumbnail(event.target.files[0])
    }

    const addAlbumtodb = () => {
        if (title.length === 0) {
            alert('select title')
        }
        else if (artist === -1) {
            alert('select artist')
        }
        else if (!thumbnails) {
            alert('select thumbnail')
        }
        else if (duration.length === 0) {
            alert('select duration')
        }
        else {
            //send data to db in Form Data format
            const body = new FormData()
            body.append('title', title)
            body.append('thumbnail', thumbnails)
            body.append('artistId', artist)
            body.append('duration', duration)

            // generating post request using axios 
            axios.post(url + '/album', body).then(response => {
                const result = response.data
                if (result.status === 'success') {
                    alert('Album added successfully')
                    navigate('/album')

                }
                else {
                    alert('error while adding album to database')
                }
            })
        }
    }
    const getAllArtist = () => {
        axios.get(url + '/artist').then(response => {
            const result = response.data;
            if (result.status === 'success') {
                if(result.data.length>0){
                setArtist(result.data[0].id)

                setArtists(result.data)
                }
            }
            else {
                alert('error while getting artist from database')
            }

        })
    }





    return (
        <div>
            <h1 className="page-title">Add Album</h1>

            <div className="row">
                <div className="mb-3">
                    <label htmlFor="">Title</label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Artist</label>
                    <select className="form-control">
                        {artists.map((artist) => {
                                return (<option>
                                    {artist.firstname} {artist.lastname}
                                </option>
                                )
                            })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Thumbnail</label>
                    <input onChange={onThumbselect} type="file" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Duration</label>
                    <input onChange={(e) => { setDuration(e.target.value) }} type="text" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={addAlbumtodb}>Add Album</button>
                    &nbsp;
                    <Link to="/album">
                        <a className="btn btn-warning">Back </a>
                    </Link>
                 
                </div>

            </div>
        </div>
    )

}
export default AddAlbum;