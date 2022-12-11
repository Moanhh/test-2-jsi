import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
// import RecommendedMeals from './RecommendedMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />

     
    </Fragment>
  );
};

export default Meals;
