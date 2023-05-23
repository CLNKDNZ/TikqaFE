import { useEffect, useState } from "react";

const SelectArea = ({ name, options, selectHandle }) => {
    const [selected, setSelected] = useState([]);

    selectHandle = selectHandle || (() => {});

    useEffect(() => {
        selectHandle(selected);
    }, [selected]);

    const handleSelect = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelected([...selected, parseInt(value)]);
        } else {
            setSelected(selected.filter((item) => item !== parseInt(value)));
        }
    };

    const handleSelectAll = (e) => {
        const { checked } = e.target;
        if (checked) {
            setSelected(options.map((item) => parseInt(item.id)));
        } else {
            setSelected([]);
        }
    };

    return (
        <>
            <div className="checkTitle mt37">{name}</div>
            <div className="deviceSelect">
                <ul>
                    <li
                        className={
                            selected.length === options.length ? "checkedBox" : ""
                        }
                    >
                        <label className="containerBox">
                            Tümü
                            <input
                                type="checkbox"
                                value="all"
                                onChange={handleSelectAll}
                                checked={selected.length === options.length}
                            />
                            <span className="checkmarkBox"></span>
                        </label>
                    </li>
                    {options.map((option, key) => (
                        <li key={key}
                        className={
                            selected.includes(option.id) ? "checkedBox" : ""
                        }
                        >
                            <label className="containerBox">
                                {option.name}
                                <img src={option.img} />
                                <input
                                    type="checkbox"
                                    value={option.id}
                                    checked={selected.includes(option.id)}
                                    onChange={handleSelect}
                                />
                                <span className="checkmarkBox"></span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SelectArea;
