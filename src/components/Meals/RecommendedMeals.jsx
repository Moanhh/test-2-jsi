import React from 'react'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import classes from './rcmMeals.module.css'

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

const RecommendedMeals = () => {

  const rcmFood = highlight.map((meal,index) => (
    <MealItem key={index}  id={meal.id} name={meal.name} amount={meal.description} price={meal.price}/>
  ))


  return (
    <section className={classes.meals}>
    <Card>
      <ul>{rcmFood}</ul>
    </Card>
  </section>
  )
}

export default RecommendedMeals