
import { url } from "../common/constant"
const Albumrow = ({album}) =>{
    return (
        <tr>
            <td>{album.id}</td>
            <td>
                <img src={url + '/'+album.thumbnail} className="thumbnail-sm" />
            </td>
            <td>{album.title}</td>
            <td>{album.Firstname} {album.Lastname}</td>
            <td>{album.duration}</td>
            <td></td>
        </tr>
    )
}


export default Albumrow