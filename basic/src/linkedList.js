'use strict'

function Node(data) {
  this.data = data
  this.next = null
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  clear() {
    this.length = 0
    this.head = null
  }

  insert(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      this.length += 1
      return node
    }
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this.length += 1
    return node
  }

  getHeadNode(data) {
    return this.head
  }

  contains(data) {
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.data === data){
        return true
      } else {
        currentNode = currentNode.next
      }
    } return false
  }

  insertFirst(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      this.length += 1
    } else {
      this.next = currentNode
      this.head = node
      node.next = currentNode
      this.length += 1
    }
  }

  find(data) {
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.data === data){
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    } return -1
  }

  findByNext(data) {
    let currentNode = this.head

    if(!currentNode) {
      return null
    } else if (!currentNode.next && currentNode.data === data){
      return clear()
    } else {
      while(currentNode.next){
        if(currentNode.next.data === data){
          return currentNode
        } else {
          currentNode = currentNode.next
        }
      } return null
    }
  }

  removeWithFind(data) {
    let currentNode = this.head
    const findByNext = function(data) {

      if(!currentNode) {
        return null
      } else if (!currentNode.next && currentNode.data === data){
        return clear()
      } else {
        while(currentNode.next){
          if(currentNode.next.data === data){
            return currentNode
          } else {
            currentNode = currentNode.next
          }
        } return null
      }
    }

    let foundNode = findByNext(data)
      if (foundNode === null){
        return null
      } else {
        foundNode.next = foundNode.next.next
        return this.length--
      }
  }

  removeBy(data) {
    let currentNode = this.head

    if(!currentNode){
      return null
    } else {
      while(currentNode){
        if(currentNode.data === data){
          if(!currentNode.next){
            this.head = null
            return this.length--
          } else {
            currentNode = currentNode.next
            this.length--
            return this.head = currentNode
          }
        } else if (currentNode.next.data === data){
          currentNode.next = currentNode.next.next
          return this.length--
        } else if (currentNode.next !== null){
          currentNode = currentNode.next
        } else {
          return alert("no such node exists")
        }
      }
    }
  }

  insertAfter(searchTerm, data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      return this.length += 1
    } else {
      while (currentNode) {
        if (currentNode.data === searchTerm){
          node.next = currentNode.next
          currentNode.next = node
          return this.length += 1
        } else {
          return -1
        }
      }
    }
  }

  insertBefore(searchTerm, data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      this.head = node
      return this.length += 1
    } else {
      while (currentNode) {
        if (currentNode.next.data === searchTerm){
          node.next = currentNode.next
          currentNode.next = node
          return this.length += 1
        } else {
          return -1
        }
      }
    }
  }

  removeFirst() {
    var node = new Node()
    var currentNode = this.head
    if (this.length === 0){
      return null
    } else {
      this.head = currentNode.next
      node = this.head
      this.length -= 1
    }
  }

  getTailNode(data) {
    var node = new Node(data)
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  remove() {
    var currentNode = this.head
    if (!currentNode || !currentNode.next){
      return null
    } else if (!currentNode.next.next){
      currentNode.next = null
      return this.length -= 1
    } else {
      while (currentNode.next.next){
        currentNode = currentNode.next
        currentNode.next = null
        return this.length -= 1
      }
    }
  }

}
