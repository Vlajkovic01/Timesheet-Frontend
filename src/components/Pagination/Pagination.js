import classes from "../../Style.module.css"
import PaginationButton from "./PaginationButton";
import {useState} from "react";

const Pagination = ({numberOfPages, setPage}) => {
    const listNumberOfPages = Array.from({length: numberOfPages}, ((_, i) => i + 1));

    const [activePage, setActivePage] = useState(1);

    const activeHandler = (pageNumber) => {
        setActivePage(prevState => (prevState !== pageNumber) ? pageNumber : null);
    };

    const previousPageHandler = () => {
        setPage(activePage - 2); // because on back first page is 0, on the front first page is 1;
        setActivePage(prevState => prevState - 1);

    };

    const nextPageHandler = () => {
        setPage(activePage)
        setActivePage(prevState => prevState + 1);
    };

    return (
        <div className={classes.pagination}>
            <ul className={classes.pagination__navigation}>
                {(activePage > 1) && <li className={classes.pagination__list}>
                    <button onClick={previousPageHandler} className={classes.pagination__button}>Previous</button>
                </li>}
                {listNumberOfPages.map(pageNumber => <PaginationButton setActivePage={activeHandler}
                                                                       active={activePage === pageNumber}
                                                                       setPage={setPage} key={pageNumber}
                                                                       pageNumber={pageNumber}/>)}
                {(activePage < numberOfPages) && <li className={classes.pagination__list}>
                    <button onClick={nextPageHandler} className={classes.pagination__button}>Next</button>
                </li>}
            </ul>
        </div>
    );
};

export default Pagination;