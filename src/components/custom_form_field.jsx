export const CustomerFormField = ({ label, cName, type, value, placeholder, onChange }) => {
    return (
        <>
            <div className="login-field-with-label">
                <p className="login-label">
                    <label For={cName}>{label}</label>
                </p>
                <input className="login-field" type={type} placeholder={placeholder} name={cName} value={value} onChange={onChange} />
            </div>
        </>
    )
};