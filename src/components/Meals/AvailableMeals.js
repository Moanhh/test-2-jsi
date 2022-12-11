import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import classe from '../Meals/MealsSummary.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const highlight = [
  {
    id: 'h1',
    name: 'Bánh đa cua Hải Phòng',
    description: 'A bowl of delicious and attractive noodles musts enough to converge in  five colors: pink brown of crab, brown noodles, green color of vegetable, green onion, lemon; fresh red colour of chili and yellow colour of dry onion. ',
    price: '30',
  },
  {
    id: 'h2',
    name: 'Bánh mỳ cay',
    description: 'delicious small bread, with pate and "chí chương"',
    price: '5',
  },
  {
    id: 'h3',
    name: 'Bánh bèo',
    description: 'Lớp bánh dẻo dai, phần nhân đẫm thịt cùng bát nước chấm làm từ nước xương ninh nhừ',
    price: '15',
  },
  {
    id: 'h3',
    name: 'Bánh bèo',
    description: 'Lớp bánh dẻo dai, phần nhân đẫm thịt cùng bát nước chấm làm từ nước xương ninh nhừ',
    price: '15',
  },
]


const AvailableMeals = ({data}) => {
  // const mealsList = DUMMY_MEALS.map((meal) => (
    //TODO: This is the first task, call a the MealItem, and make is correspond with the meal list below
  // );
  const mealsList = DUMMY_MEALS.map((meal,index) => (
    <MealItem key={index}  id={meal.id} name={meal.name} amount={meal.description} price={meal.price}/>
  ))
   
  const rcmFood = highlight.map((meal,index) => (
    <MealItem key={index}  id={meal.id} name={meal.name} amount={meal.description} price={meal.price}/>
  ))


  return (
    <>
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
    <>
    </>
    <section className={classe.summar}>
      <h2>Top 10 best dishes in Hải Phòng</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
    

    <section className={classes.meals}>
      <Card>
        <ul>{rcmFood}</ul>
      </Card>
    </section>

    
    </>
    

  );
};

export default AvailableMeals;
