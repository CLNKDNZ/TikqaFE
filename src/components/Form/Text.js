export const Text = ({ name, id, placeholder, desc, onChange,}) => {
    return (
        <div className="formInput inputModelV2 mb20">
            <label htmlFor="locatorVal">{name}</label>
            <input id={id} onChange={onChange} type="text" placeholder={placeholder}/>
            {
                desc ? <span>{desc}</span> : null
            }
        </div>
    )
}
