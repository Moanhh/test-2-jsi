# Midterm Test II - JavaScript Intensive - 04/12/2022

## Introduction

Have a really great but not sleepy, my fellow students. Welcome to the second project test coming for this semester. We are almost reaching the end of this course. I have to say "Well done! Everyone has done well, great jobs".

As I have mentioned during the class. After this test, we will be moving on the final project. This will be different than your previous courses, so one great advice is focused on what we have studied and you will be good enough

Anyway, back to the test, we will move on the theme of restaurant today. I am hungry, and I know you will feel the same with me - Raising the hand for hungry. We will work on the restaurant website, where you can select food, get them order, and calculate the total amount.

## What provided you should care about the

You should focus most on these files mostly (Not just these files) as the instruction to complete the projects.

-   **AvailableMeals.js**: This the files where you can see the food show up on the main screen. Focus on the DUMMY_MEALS arrays containing all the food items

-   **CardItem.js**: This is the decoraition of card files, which will show you mostly how it work

-   **Cart.js**: This files contains all the food added to the cart. This is really important since this is the different data structure

## What you need to work on for this project

1. Follow with the **AvailableMeals.js**, see the line 33 with variable _AvailableMeals_

2. We have used the map functionality in above. Now, create a new component called Searched Bar - whenever user enter the input, we and filter what items to be shown up on the screen

3. Follow by the Node class as below

```javascript
class Node {
    constructor(newName, newAge) {
        //Node is class containing main data members (name, age, images - covered in React components), and Prev and Next - linking to another Node
        this.prev = null;
        this.next = null;
        this.name = newName;
        this.age = newAge;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(newName, newAge) {
        const newNode = new Node(newName, newAge);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Adding new Node to the end of the list
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    print() {
        if (this.head != null) {
            let newNode = this.head;
            while (newNode != null) {
                console.log(`[${newNode.name}, ${newNode.age}]`);
                newNode = newNode.next;
            }
        }
    }
}
```

Now, we learn about Node and Doubly Linked List, follow by the core structure above. I want you to change data structure to Doubly Linked List (Including Remove, Insert new Item as I have implemented the function in the files)

4. I am going back to Vietnam soon, and I really miss Vietnamese Food. List for me at least 10 Vietnamese Restaurants that I should eat (Don't care about the money, I will pay all) [Bonus]

## Submitting the Project

When you finished the coding and testing program, create a new git repository and push there. Then send the link (and might the website link) over my email `dpham4@binghamton.edu`, then you finish the work

>>>>>>> 
# test-2-jsi
# test-2-jsi
