import classes from "../../Style.module.css";
import AlphabetListItem from "./AlphabetListItem";
import {useState} from "react";

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const AlphabetList = () => {
    const [activeLetter, setActiveLetter] = useState(null);

    const activeHandler = (letter) => {
        setActiveLetter(prevState => (prevState !== letter) ? letter: null);
    };

    return (
        <ul className={classes.alphabet__navigation}>
            {ALPHABET.map(letter => <AlphabetListItem key={letter} active={activeLetter === letter} setActiveLetter={activeHandler} text={letter}/>)}
        </ul>
    );
};

export default AlphabetList;