import DUMMY_MEALS from "./AvailableMeals"
import MealItem from "./Components/MealItem/MealItem";
import './MealsList.scss';


const MealsList = () => {
    const mealsList = DUMMY_MEALS.map((item) => 
        <MealItem
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
        />
    );

    return (
        <ul className="meal-list-container">
            {mealsList}
        </ul>

    )
}

export default MealsList;
