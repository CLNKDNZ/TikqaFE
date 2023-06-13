import {useState} from "react";
export const Select = ({ name, id, options, onChange, selected}) => {
    return (
        <div className="formInput inputModelV2 mb20">
            <label className="pl52" htmlFor="action">{name}</label>
            <select
                name={name}
                id={id}
                onChange={onChange}
                defaultValue={selected || options[0]?.id}
            >
                {options.map((option,key) => (
                    <option
                        key={key}
                        value={option.id}
                    >
                        {option.name || option.eventName}
                    </option>
                    //TODO: Fix this
                ))}
            </select>
        </div>
    )
}