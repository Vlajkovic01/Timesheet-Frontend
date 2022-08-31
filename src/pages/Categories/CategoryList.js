import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {


    return (
        <div>
            {props.categories.map(category => <CategoryListItem key={category.name} name={category.name}/>)}
        </div>
    );
};

export default CategoryList;