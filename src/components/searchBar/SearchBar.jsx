import React, {useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import FoodList from '../../assets/data/FoodList'
import MealItem from '../Meals/MealItem/MealItem'
// import MealItemForm from '../Meals/MealItem/MealItemForm'

function SearchBar() {

    const [Dish, setDish] = useState("");


  return (
    <>

    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="search_box">
              <input type="text" placeholder='Search....'
            //    onChange={handleSearch}/>
            onChange={(e) => setDish(e.target.value)}/>
                <span>
                <i className="ri-search-line"></i>
                </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Container>
        <Row>
          {Dish.length === 0 ? (
            <>
             <h1 className="text-center fs-">No prodducts are found!</h1>
             <ul className='list'>
                {FoodList.map((item) => (
                    <li key={item.id}  className="listItem">
                        <MealItem   name={item.name} amount={item.description} price={item.price}/>
                    </li>
                ))}
            </ul>
            </>
           
          ) : (
            <ul className='list'>
                {FoodList.filter((item) =>
                item.name.toLowerCase().includes(Dish)).map((item) => (
                    <li key={item.id}  className="listItem">
                        <MealItem   name={item.name} amount={item.description} price={item.price}/>
                        
                    </li>
                ))}
            </ul>
          )}
        </Row>
      </Container>
    </section>
    </>
    
  )
}

export default SearchBar