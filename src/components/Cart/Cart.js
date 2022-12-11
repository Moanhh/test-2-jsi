import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

  

  class Node {
    constructor(element, index) {
        //Node is class containing main data members (name, age, images - covered in React components), and Prev and Next - linking to another Node
        // this.head = null;
        this.tail = null;
        this.element = element;
        // this.index = index;
    }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }
  addItem(element) {

      const newNode = super.addItem(element)

      const prevElement = super.getElementAt(this.size()-1);
      newNode.prev = prevElement || null;
      this.tail = newNode;
      // if (this.head === null) {
      //     this.head = newNode;
      //     this.tail = newNode;
      // } else {
      //     //Adding new Node to the end of the list
      //     this.tail.next = newNode;
      //     newNode.prev = this.tail;
      //     this.tail = newNode;
      // }
  }

  remove() {
    this.tail = null;
  }
}

  //TODO: Now we are having this carCtx to be main dataStructure, Now change to Doubly Linked List. Remember, if there is no Doubly Linked List, your answer will not be counted
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // const cartItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(id);
  // };

  // const cartItemAddHandler = (item) => {
  //   cartCtx.addItem({ ...item, amount: 1 });
  // };

  const doublyLinkedList = new DoublyLinkedList();

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={doublyLinkedList.remove}
          onAdd={doublyLinkedList.addItem}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
