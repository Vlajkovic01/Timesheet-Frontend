import CategoryListItem from "./CategoryListItem";
import categoryService from "../../api/services/categoryService";
import {useEffect, useState} from "react";

const CategoryList = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCategories(await categoryService.getCategories(props.searchQuery))
        }
        fetchData();
    }, [props.searchQuery]);

    return (
        <div>
            {categories.map(category => <CategoryListItem key={category.name} name={category.name}/>)}
        </div>
    );
};

export default CategoryList;