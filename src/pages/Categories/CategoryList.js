import CategoryListItem from "./CategoryListItem";

const CATEGORIES = [{name: 'Test name 1'}, {name: 'Test name 2'}, {name: 'Test name 3'}]; //dummy data for testing

const CategoryList = (props) => {
    return (
        <div>
            {CATEGORIES.map(category => <CategoryListItem key={category.name} name={category.name}/>)}
        </div>
    );
};

export default CategoryList;