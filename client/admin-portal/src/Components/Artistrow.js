import { url } from "../common/constant";
const Artistrow=({artist})=>{
    return(
        <tr>
            <td>{artist.id}</td>
            <td><img src={url+'/'+artist.thumbnail} alt="" className="thumbnail-sm"/></td>
            <td>{artist.firstname} {artist.lastname}</td>
            <td>{}</td>
        </tr>
        )

}
export default Artistrow;