import {useState} from "react";
export const Select = ({ name, id, options, onChange}) => {
    return (
        <div className="formInput inputModelV2 mb20">
            <label className="pl52" htmlFor="action">{name}</label>
            <select
                name={name}
                id={id}
                onChange={onChange}
                defaultValue={options[0].value}
            >
                {options.map((option,key) => (
                    <option
                        key={key}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}