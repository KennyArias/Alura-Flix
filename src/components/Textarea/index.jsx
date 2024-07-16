const Textarea = (props) => {
    const handleChange = (e) => {
        props.setValue(e.target.value);
    }
    return(
        <>
            <label>Descripción</label>
            <textarea
            placeholder={props.placeholder}
            required={props.required}
            value={props.value}
            onChange={handleChange}
            />
        </>
    )
}

export default Textarea;