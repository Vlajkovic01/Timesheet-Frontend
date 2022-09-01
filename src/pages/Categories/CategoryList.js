import CategoryListItem from "./CategoryListItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../redux/category/categorySlice";

const CategoryList = (props) => {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.category);


    useEffect(() => {
        dispatch(getCategories(props.searchQuery));
    }, [props.searchQuery]);

    return (
        <div>
            {categories.map(category => <CategoryListItem key={category.id} id={category.id} name={category.name}/>)}
        </div>
    );
};

export default CategoryList;