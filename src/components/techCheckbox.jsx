export default function TechCheckbox({ id, name, checked, onClick, onChange }) {
    return (
        <>
            <div className="filter-checkbox-container">
                <input type='checkbox' name={name} checked={checked} onClick={onClick} onChange={onChange} />
                <label htmlFor={id}>{name}</label>
            </div>
        </>
    )
}