import classes from "../../Style.module.css";
import AlphabetList from "./AlphabetList";

const Alphabet = (props) => {
    return (
        <div className={classes.alphabet}>
            <AlphabetList getLetter={props.getLetter}/>
        </div>
    );
};

export default Alphabet;