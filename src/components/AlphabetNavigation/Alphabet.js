import classes from "../../Style.module.css";
import AlphabetList from "./AlphabetList";

const Alphabet = () => {
    return (
        <div className={classes.alphabet}>
            <AlphabetList/>
        </div>
    );
};

export default Alphabet;