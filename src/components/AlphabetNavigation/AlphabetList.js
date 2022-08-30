import classes from "../../Style.module.css";
import AlphabetListItem from "./AlphabetListItem";

const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const AlphabetList = (props) => {
    return (
        <ul className={classes.alphabet__navigation}>
            {ALPHABET.map(letter => <AlphabetListItem key={letter} text={letter} getLetter={props.getLetter}/>)}
        </ul>
    );
};

export default AlphabetList;