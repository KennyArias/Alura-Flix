import { useContext } from "react"
import { CategoryContext } from "../../Context/Context"

const OptionList = (props) =>{
    const { titles } = useContext(CategoryContext);
    const handleChange = (e) => {
        props.setValue(e.target.value);
    }
    return <>
        <label>Categoría</label>
        <select required={props.required} value={props.value} onChange={handleChange}>
            <option value="" disable defaultValue="" hidden>Seleccione una categoría</option>
            {titles.map( (title, index) => <option key={index} value={title}>{title}</option>)}
        </select>
    </>
}

export default OptionList;