function Node(key, value) {
  this.key = key
  this.value = value
  this.next = null
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  clear() {
    this.length = 0
    this.head = null
  }

  insert(key, value) {
    let node = new Node(key, value)
    let currentNode = this.head

    if (!currentNode) {
      this.head = node
      this.length++
      return node
    }
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this.length += 1
    return node
  }

//regular find
  find(key) {
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.key === key){
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    } return false
  }

//find but return the value
  findButReturnValue(key) {
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.key === key){
        return currentNode.value
      } else {
        currentNode = currentNode.next
      }
    } return -1
  }

//see if linked list contains key
  contains(key) {
    var currentNode = this.head
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.key === key){
        return true
      } else {
        currentNode = currentNode.next
      }
    } return false
  }


//finds the node whose next value is the target node
  findByNext(key) {
    let currentNode = this.head

    if(!currentNode) {
      return null
    } else if (!currentNode.next && currentNode.key === key){
      return clear()
    } else {
      while(currentNode.next){
        if(currentNode.next.key === key){
          return currentNode
        } else {
          currentNode = currentNode.next
        }
      } return null
    }
  }

//cleaner remove using findByNext
  removeWithFindByNext(key) {
    let currentNode = this.head

    const findByNext = function(key) {
      if(!currentNode) {
        return null
      } else if (!currentNode.next && currentNode.key === key){
        return clear()
      } else {
        while(currentNode.next){
          if(currentNode.next.key === key){
            return currentNode
          } else {
            currentNode = currentNode.next
          }
        } return null
      }
    }

    let foundNode = findByNext(key)
    if (foundNode === null){
      return null
    } else {
      foundNode.next = foundNode.next.next
      return this.length--
    }
  }

//brute force
  removeIt(key) {
    let currentNode = this.head

    if(!currentNode){
      return null
    } else {
      while(currentNode){
        if(currentNode.key === key){
          if(!currentNode.next){
            this.head = null
            return this.length--
          } else {
            currentNode = currentNode.next
            this.length--
            return this.head = currentNode
          }
        } else if (currentNode.next.key === key){
          currentNode.next = currentNode.next.next
          return this.length--
        } else if (currentNode.next !== null){
          currentNode = currentNode.next
        } else {
          return null
        }
      }
    }
  }

}

export default class HashTable {
  constructor() {
    this.length = 0
    this.table = {}
  }

  //ht.hash("name")
    // generates a hash for the key "name"
  hash( str ) {
    const inputString = str
    const strToArray = inputString.toLowerCase().split('')
    const alphabit = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const hashed = []

    for( var i = 0; i < strToArray.length; i++ ){
      hashed.push(alphabit.indexOf(strToArray[i]) * (i + 1) * 13)
    }
    return ( hashed.reduce(( a,b ) => a + b, 0 ) % 101 )
  }

  //ht.size()
    // returns the number of key-value pairs in the hash table.
  size() {
    return this.length
  }

  //ht.put("name", "Zanzibar")
    // adds a key-value pair to the hash table, deal with collisions using chaining
  put(key, value) {
    const node = new Node(key, value)
    const linkedList = new LinkedList()
    const table = this.table
    const hashedKey = hash(key)

    if( !(hashedKey in table) ) {
      table.hashedKey = linkedList.insert(key, value)
      return this.length++
    } else {
      let collidingLinkedList = table[hashedKey]
      collidingLinkedList.insert(node)
      return this.length++
    }
  }

  //ht.get("name")
    // returns the key associated with key.
  get(key) {
    const table = this.table
    const hashedKey = hash(key)

    if(!(hashedKey in table)){
      return -1
    } else {
      let linkedListValue = table[hashedKey]
      return linkedListValue.findButReturnValue(key)
    }
  }

  //ht.contains("name")
    // returns true if the hash table contains the key.
  contains(key) {
    const table = this.table
    const hashedKey = hash(key)

    if(!(hashedKey in table)){
      return false
    } else {
      let linkedListValue = table[hashedKey]
      return linkedListValue.contains(key)
    }
  }

  //ht.iterate((k, v) => console.log(`${k}: ${v}`))
    // takes a callback function and passes it each key and value in sequence.
  iterate(){

  }

  //ht.remove("name")
    // removes a key-value pair by key.
  remove(key){
    const table = this.table
    const hashedKey = hash(key)

    if(!(hashedKey in table)){
      return false
    } else {
      let linkedListValue = table[hashedKey]
      linkedListValue.removeIt(key)
      return this.length--
    }
  }

}
