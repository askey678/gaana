import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../common/constant";
import Albumrow from "../Components/Albumrow";
import { Link } from "react-router-dom";

const Albums=()=> {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        console.log('all albums got loaded')
        getAlbums()
    }, [])

    const getAlbums = () => {
        axios.get(url + '/album').then(response => {
            const result = response.data
            if (result.status === 'success') {
                setAlbums(result.data)
            }
            else {
                alert('error while loading list of albums')
            }
        })
    }

    return (
        <div>
            <h1 className="page-title">Albums</h1>
            <Link to="/add-album">
            <button className="btn btn-success">Add Album</button>
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album) => {
                        return <Albumrow album={album} />
                      
                    }
                    )
                    }

                </tbody>
            </table>
        </div>
    )

}
export default Albums;