type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export const Input = (props: InputProps) => {

// vvv this is an example of destructuring props 
export const Input = ({ value, handleChange }: InputProps) => {

    // this works if handleChange is passed as props or if it is defined in the component as well
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return (
        <div>
            {/* <input type="text" value={props.value} onChange={props.handleChange}/>
            <input type="text" value={props.value} onChange={handleInputChange}/> */}

            {/* this is following the destrucuring pattern */}
            <input type="text" value={value} onChange={handleChange}/>
            <input type="text" value={value} onChange={handleInputChange}/>
        </div>

    )
}