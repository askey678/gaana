import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { url } from "../common/constant"

const AddArtist = () =>{
    const [thumbnail, setThumbnail] = useState(undefined)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')


    // get called on whenever user select image. we can declare this as like we declare for firstname and lastname but for developing understanding we did it seperately
    const onFileSelect=(event)=>{
        setThumbnail(event.target.files[0])

    }

    // get the history
    // const history=useHistory()      // this useHistory not working in my system, so i will use useNavigate hook to do similar task
    const navigate=useNavigate()
    // use this history object and go wherever you want to go

    const addartisttoDB=()=>{
        if(firstname.length===0){
            alert('select first name')
        }else if(lastname.length===0){
            alert('select last name')
        }else if(!thumbnail){
            alert('select thumbnail')
        }else{
            // send data to database
            // there are two methods to upload data, one is in json format and other is formdata. we are here using formdata because we have thumbnail
            const body = new FormData()
            body.append('firstname', firstname)
            body.append('lastname', lastname)
            body.append('thumbnail', thumbnail)

            //send data to API
            // axios.post contains two parameters url and body
            axios.post(url + '/artist', body).then(response =>{
                const result=response.data
                if(result.status==='success'){
                    alert('successfully added a artist')
                    // on adding the artist successfully we want to go to the artist page programmatically not with the help of Link
                    // so we can use a hook useHistory from react-route-dom
                    // history.push('/artists')   useHistory hook not working, so using useNavigate
                    navigate('/myartist');

                }else{
                    alert('error while adding an artist')
                }
            })
        }
    }

    return(
        <div>
        <h1 className="page-title">Add Artist</h1>
        
        <div className="row">
            <div classname="mb-3">
                <label htmlFor="">First Name</label>
                <input onChange={(e) =>{setFirstname(e.target.value) }} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Last Name</label>
                <input onChange={(e)=>{setLastname(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Thumbnail</label>
                <input onChange={onFileSelect} accept="image/*" type="file" className="form-control"/>
            </div>
            <div className="mb-3">
                <button className="btn btn-success" onClick={addartisttoDB}>Add</button>
                &nbsp;
                <Link to="/myartist">
                    <a className="btn btn-warning">Back</a>
                </Link>

            </div>

        </div>

        </div>
    
        )

}
export default AddArtist