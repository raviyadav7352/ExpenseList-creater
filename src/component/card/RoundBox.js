import "./RoundBox.css"

const RoundBox = (props) => {
    const classes = "card " + props.className
    return <div className={classes}>{props.children}</div>
}
export default RoundBox;