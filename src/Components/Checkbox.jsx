function Checkbox(props) {
    return (
        <label>
            <input
                type="checkbox"
                checked={props.value}
                onChange={props.onChange}
            />
            {props.label}
        </label>
    );
};

export default Checkbox;