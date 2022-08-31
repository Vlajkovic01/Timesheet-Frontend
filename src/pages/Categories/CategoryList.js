import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {


    return (
        <div>
            {props.categories.map(category => <CategoryListItem key={category.id} id={category.id} name={category.name} onDelete={props.onDelete}/>)}
        </div>
    );
};

export default CategoryList;