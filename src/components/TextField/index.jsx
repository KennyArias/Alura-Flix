const TextField = (props) =>{
    const handleChange = (e) =>{
        props.setValue(e.target.value);
    }
    return( <>
            <label >{props.label}</label>
            <input
                placeholder={props.placeholder}
                type="text"
                required={props.required}
                value={props.value}
                onChange={handleChange}
            />
        </>
    )
}

export default TextField;