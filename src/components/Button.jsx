const Button = (props) => {
    const { text, type } = props;
    const handleOnClick = (e) => {
        e.preventDefault();
        console.log("Congrutilations! React Button clicked!");
    }
    return <button onClick={handleOnClick} type={type}>{text}</button>
}
export default Button;