const Input = ({ type, id, value, handleChange, error }) => {
    return (
        <>
            <input
                type={type}
                class="form-control"
                id={id}
                value={value}
                onChange={handleChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
}
 
export default Input;