import classes from "../../Style.module.css";

const PaginationButton = (props) => {

    const clickHandler = () => {
          props.setPage(props.pageNumber - 1);

          props.setActivePage(props.pageNumber);
    };

    return (
        <li className={classes.pagination__list}>
            <button className={`${classes['pagination__button']} ${props.active ? classes['pagination__button--active'] : ''}`} onClick={clickHandler}>{props.pageNumber}</button>
        </li>
    );
};

export default PaginationButton;