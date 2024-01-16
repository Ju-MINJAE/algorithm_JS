// Queue - 먼저 들어온 것이 먼저 나가는 선입선출의 형태의 자료구조.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

var Q = new Queue();
Q.enqueue('First');
Q.enqueue('Second');
Q.enqueue('Third');

Q.dequeue();
console.log(Q);

//  시간복잡도 : 삽입O(1) 제거O(1) 탐색O(N) 접근O(N)
