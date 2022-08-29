class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/*
Above is the given linked list based queue; it should not be modified
Below is the NumSorter class that is to be refactored
*/
class NumSorter {
  constructor() {
    this.numList = new LinkedList();
    this.allowedNums = new LinkedList();
  }
  /*
  Add a number to the list of allowed numbers
  Should not have any duplicates in allowedNums
  */
  addAllowedNum(num) {
    let head =  this.allowedNums.head
    let node =this.allowedNums
    if(!head){
      node.enqueue(num)
      return `${num} added to allowedNums`
    }else {
      while(head.next){
        if(head.value===num){
          return `${num} already in allowedNums`
        }
        head=head.next
      }
      node.enqueue(num)
      return `${num} added to allowedNums`
    }
    // let head =  this.allowedNums.head
    // let node =this.allowedNums
    // console.log(node);
    // if(!head){
    //   let newNode = new LinkedListNode(num, null)
    //   node.head=newNode
    //   node.tail=newNode
    //   return `${num} added to allowedNums`
    // }else {
      
    //   // while(head.next){
    //   //   if(head.value===num){
    //   //     return `${num} already in allowedNums`
    //   //   }
    //   //   head=head.next
    //   // }
    //   let newNode = new LinkedListNode(num, node)
    //   console.log(newNode);
    //   node=newNode
    //   node.head.next=head
    //   return `${num} added to allowedNums`
    // }
    // if (!this.allowedNums.includes(num)) {
    // this.allowedNums.push(num);
    // return `${num} added to allowedNums`;
    // } else {
    // return `${num} already in allowedNums`;
    // }
  }

  /* Returns true if the number is allowed, false otherwise */
  isNumAllowed(num) {
    let head =this.allowedNums.head
    if(head.value===num){
      return true
    }
    while(head){
      if(head.value===num){
        return true
      }
      head=head.next
    }
    return false
    //     let head =  this.allowedNums.head
    // if(head.value===num){
    //   return true
    // }
    // while(head.next){
    //   if(head.value===num){
    //     return true
    //   }
    //   head=head.next
    // }
    // return false
    // return this.allowedNums.includes(num);
  }

  /*
  Add a new number to the back of the numList
  Returns value at the back of numList
  */
  addNumToBack(num) {
    let temp = this.isNumAllowed(num)
    const curr = this.numList
    if(temp){
      curr.enqueue(num)
    }    
    
        return curr.tail.value
    // if (this.isNumAllowed(num)) this.numList.push(num);
    // return this.numList[this.numList.length - 1];
  }

  /*
  Remove and return the first number in the numList
  If numList is empty, return undefined
  */
  getFirstNum() {
    let head =this.numList
    if(head.length>0){
      return head.dequeue()
    }else{
      return undefined
    }
    // if(this.numList.length > 0){
    // return this.numList.shift();
    // } else {
    // return undefined;
    // }
  }

  /* Returns the count of nums in numList */
  numCount() {
    let count = 0;
    let curr = this.numList.head
    while(curr){
      count++
      curr=curr.next
    }
    return count
    // let count = 0;
    // while (this.numList[count] !== undefined) {
    // count++;
    // }
    
    // return count;
  }

  /*
  Resets numList, builds a numlist of integers from 0 to amount
  Only include allowed numbers; returns amount of nums in numList
  */
  buildNumList(amount) {
    this.numList= new LinkedList()
    for (let i =0; i<=amount; i++){
      let temp = this.allowedNums.head
      while(temp){
        if(temp.value===i){
          this.numList.enqueue(i)
        }
        temp=temp.next
      }
    }
    return this.numCount();
    // this.numList = [];

    // for (let i = 0; i <= amount; i++) {
    // if (this.allowedNums.includes(i)) {
    // this.numList.push(i);
    // }
    // }

    // return this.numCount();
  }
}

/* Comment in code below to run local test */
const newNumSort = new NumSorter(3);
// console.log(newNumSort.addAllowedNum(0));   // '0 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 already in allowedNums'
// console.log(newNumSort.addAllowedNum(2));   // '2 added to allowedNums'

// console.log(newNumSort.isNumAllowed(1));    // true
// console.log(newNumSort.isNumAllowed(5));    // false

// console.log(newNumSort.addNumToBack(1));    // 1
// console.log(newNumSort.addNumToBack(2));    // 2
// console.log(newNumSort.addNumToBack(5));    // 2

// console.log(newNumSort.getFirstNum());      // 1
// console.log(newNumSort.getFirstNum());      // 2
// console.log(newNumSort.getFirstNum());      // undefined

// console.log(newNumSort.numCount());         // 0

// console.log(newNumSort.buildNumList(5));    // 3

// console.log(newNumSort.numCount());         // 3

module.exports = { NumSorter, LinkedList };

// class NumSorter {
//   constructor() {
//     this.numList = new Set();
//     this.allowedNums = new LinkedList();
//   }
//   /*
//   Add a number to the list of allowed numbers
//   Should not have any duplicates in allowedNums
//   */
//   addAllowedNum(num) {
//     const curr = this.allowedNums
//     if(!curr.head){
//       const newNode = new LinkedListNode(num, null)
//       curr.head = newNode
//       curr.tail = newNode
//       curr.length++
//       return `${num} added to allowedNums`
//     } else{
//       let head = curr.head
//       while(head){
//         if(head.value===num){
//           return `${num} already in allowedNums`
//         }
//         head=head.next
//       }
//       const newNode = new LinkedListNode(num, curr.head)
//       curr.head=newNode
//       curr.length++
//       return `${num} added to allowedNums`
//     }
//     // if (!this.allowedNums.includes(num)) {
//     // this.allowedNums.push(num);
//     // return `${num} added to allowedNums`;
//     // } else {
//     // return `${num} already in allowedNums`;
//     // }
//   }

//   /* Returns true if the number is allowed, false otherwise */
//   isNumAllowed(num) {
//     let head =  this.allowedNums.head
//     if(head.value===num){
//       return true
//     }
//     while(head.next){
//       if(head.value===num){
//         return true
//       }
//       head=head.next
//     }
//     return false
//     //return this.allowedNums.includes(num);
//   }
//   /*
//   Add a new number to the back of the numList
//   Returns value at the back of numList
//   */
//   addNumToBack(num) {
//     const curr = this.allowedNums
//     curr.enqueue(num)
//     return num
//     // if(!curr.head){
//     //   console.log(head);
//     //   node.enqueue(num)
//     //   return num
//     // }else {
//     //   node.enqueue(num)
//     //   return num
//     // }
//     // if (this.isNumAllowed(num)) this.numList.push(num);
//     // return this.numList[this.numList.length - 1];
//   }

//   /*
//   Remove and return the first number in the numList
//   If numList is empty, return undefined
//   */
//   getFirstNum() {
//     const curr = this.allowedNums
    
//     let removed = curr.head
//     let newHead = curr.head.next
//     curr.head = newHead
//     if(newHead){
//       return removed.value
//     }else{
//       return undefined
//     }
    
//     // if(this.numList.length > 0){
//     // return this.numList.shift();
//     // } else {
//     // return undefined;
//     // }
//   }

//   /* Returns the count of nums in numList */
//   numCount() {
    
//     // let count = 0;
//     // while (this.numList[count] !== undefined) {
//     // count++;
//     // }
    
//     // return count;
//   }

//   /*
//   Resets numList, builds a numlist of integers from 0 to amount
//   Only include allowed numbers; returns amount of nums in numList
//   */
//   buildNumList(amount) {
//     this.numList = [];

//     for (let i = 0; i <= amount; i++) {
//     if (this.allowedNums.includes(i)) {
//     this.numList.push(i);
//     }
//     }

//     return this.numCount();
//   }
// }