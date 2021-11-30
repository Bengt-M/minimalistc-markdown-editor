function Textarea(props) {

    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        props.onChange(newValue);
    };

    return (
        <div>
            <label>Edit Markdown Text</label>
            <br />
            <textarea
                value={props.text}
                onChange={onInputChange}
                readOnly={props.readOnly}
                rows={20}
                cols={50}
            />
        </div>
    );
}

export default Textarea