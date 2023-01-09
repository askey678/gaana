import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../common/constant";
import Artistrow from "../Components/Artistrow";

const Artists=()=>{
    //maintaining the state using useState
   const [artists, setArtists]= useState([])

   //Loading page automatically using useEffect
   //here we providing artists in [] :- it will Accepts the variable and keep watching the change,
   //which means whenever there is any change in variable state we providing here(artists), it calls the first parameter that is an anonymous function: {}
 // keep the second parameter empty to execute something when the component gets loaded

   useEffect(()=>{
    console.log("all artist get loaded")
    getArtist()
   },[])
   

   const getArtist=() =>{
    axios.get(url + '/artist').then(response => {
        const result = response.data
        if(result.status === 'success'){
            setArtists(result.data)
        }
        else{
            alert('error while loading list of artist')
        }
    })
   }

    return(
        <div>
            <h1 className="page-title"> Artists</h1>
            <Link to="/add-artist">
            <a className="btn btn-success">Add Arstist</a>
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th></th>
                    <th>Name</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                    {artists.map((artist)=> {
                        return <Artistrow artist={artist} />
                       
                    }
                    )}
                </tbody>
            </table>
        </div>
    )

}
export default Artists;