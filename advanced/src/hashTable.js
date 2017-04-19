function Node(key, value) {
  this.key = key
  this.value = value
  this.next = null
}

const LinkedList = class LinkedList {
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
      }
    } return false
  }

//find but return the value
  findButReturnValue(key) {
    const node = this.find(key)
    return node ? node.value : null
  }

//see if linked list contains key
  contains(key) {
    return !!this.find(key)
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
    let foundNode = this.findByNext(key)

    if (foundNode === null){
      return null
    } else {
      foundNode.next = foundNode.next.next
      return this.length--
    }
  }

//brute force
  removeIt(key) {
    const previousNode = this.findByNext(key)
    if (previousNode){
      const node = prevNode.next
      previousNode.next = node.next
      return node
    }
    return null
  }

}

export default class HashTable {
  constructor() {
    this.length = 0
    this.table = {}
  }

  //ht.iterate((k, v) => console.log(`${k}: ${v}`))
    // takes a callback function and passes it each key and value in sequence.
  iterate( callback ){
    let table = this.table
    let arrayOfKeys = Object.keys(table)

    for( let i = 0; i < arrayOfKeys.length; i++ ){
      callback( arrayOfKeys[i], table[arrayOfKeys[i]] )
    }
  }

  //ht.hash("name")
    // generates a hash for the key "name"
  hash( str ) {
    const lowerCaseString = str.toLowerCase()
    const alphabit = Array(26).fill().map((_, index) => String.fromCharCode(index + 97))
    const hashed = []

    for( var i = 0; i < lowerCaseString.length; i++ ){
      hashed.push(alphabit.indexOf(lowerCaseString[i]) * (i + 1) * 107)
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
    const node = new Node( key, value )
    const linkedList = new LinkedList()
    const table = this.table
    const hashedKey = hash( key )

    if( !(hashedKey in table) ) {
      table.hashedKey = linkedList.insert(key, value)
      return this.length++
    } else {
      table[hashedKey].insert(node)
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
    const linkedList = this.table[hash(key)]
    return linkedList
      ? linkedList.contains(key)
      : false
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
