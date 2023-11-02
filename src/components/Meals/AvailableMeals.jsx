import { DUMMY_MEALS } from '../../data/dummy-meals';
import Card from '../UI/Card';
import { AvailableMealsComponent } from './AvailableMeals.styeld';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <AvailableMealsComponent>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </AvailableMealsComponent>
  );
};

export default AvailableMeals;
