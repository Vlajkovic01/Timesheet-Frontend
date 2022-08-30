import classes from "../../Style.module.css";
import Alphabet from "../../components/AlphabetNavigation/Alphabet";
import CategoryList from "./CategoryList";
import CreateCategoryModal from "./CreateCategoryModal";
import {Fragment, useRef, useState} from "react";

const Categories = () => {
    const inputSearch = useRef();
    const [modal, setModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState(null);

    const showModalHandler = () => {
        setModal(prevState => !prevState);
    };

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        setSearchQuery(inputSearch.current.value);
    };

    const getAlphabetLetter = (letter) => {
        setSearchQuery(letter);
    };

    return (
        <Fragment>
            <CreateCategoryModal onClose={showModalHandler} modal={modal}/>
            <div className={classes.wrapper}>
                <section className={classes['content']}>
                    <div className={classes['main-content']}>
                        <h2 className={classes['main-content__title']}>Category</h2>
                        <div className={classes['table-navigation']}>
                            <button onClick={showModalHandler}
                                    className={`${classes['table-navigation__create']} ${classes['btn-modal']}`}><span>Create new category</span>
                            </button>
                            <form className={classes['table-navigation__input-container']} onSubmit={searchSubmitHandler}>
                                <input type="text" className={classes['table-navigation__search']} ref={inputSearch}/>
                                <button type="submit" className={classes.icon__search}></button>
                            </form>
                        </div>
                        <Alphabet getLetter={getAlphabetLetter}/>
                        <CategoryList searchQuery={searchQuery}/>
                    </div>
                    <div className={classes.pagination}>
                        {/*TODO implement pagination component after fetching a data*/}
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Categories;