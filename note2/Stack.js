// Stack - 데이터를 차곡차곡 쌍하 올린 형태의 자료구조. 가장 마지막에 삽인된 자료가 가장 먼저 삭제되는 구조를 갖는다.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(23);
stack.push(24);
stack.push(25);

console.log(stack.pop());

//  시간복잡도 : 삽입O(1) 제거O(1) 탐색O(N) 접근O(N)
