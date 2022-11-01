import classes from "../../Style.module.css";
import Alphabet from "../../components/Alphabet/Alphabet";
import CategoryList from "./CategoryList";
import CreateCategoryModal from "./CreateCategoryModal";
import {Fragment, useEffect, useRef, useState} from "react";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/category/categorySlice";

const Categories = () => {
    const inputSearch = useRef();

    const [modal, setModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState({name:'', page:0});

    const dispatch = useDispatch();
    const {categories, numberOfPages} = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategories(searchQuery));
    }, [searchQuery]);

    const showModalHandler = () => {
        setModal(prevState => !prevState);
    };

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        setSearchQuery({name: inputSearch.current.value});
    };

    const setPageHandler = (pageNumber) => {
        setSearchQuery(prevState => ({...prevState, page: pageNumber}));
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
                            <form className={classes['table-navigation__input-container']}
                                  onSubmit={searchSubmitHandler}>
                                <input type="text" className={classes['table-navigation__search']} ref={inputSearch}/>
                                <button type="submit" className={classes.icon__search}></button>
                            </form>
                        </div>
                        <Alphabet/>
                        <CategoryList categories={categories} searchQuery={searchQuery}/>
                    </div>
                    <Pagination setPage={setPageHandler} numberOfPages={numberOfPages}/>
                </section>
            </div>
        </Fragment>
    );
};

export default Categories;