
export const File = ({ label = "", id, desc, onChange,}) => {
    return (
        <div className="formInput inputModelV2 mb20">
            <label htmlFor="addInput">{label}</label>
            <input id={id}
                   type="text"
                   onChange={onChange}
            />
            <button className="addfile">+ Dosya ekle</button>
            {
                desc ? <span>{desc}</span> : null
            }
        </div>
    )
}
