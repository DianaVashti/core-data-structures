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
  // find(key) {
  //   var currentNode = this.head
  //   if (!currentNode) {
  //     return null
  //   }
  //   while (currentNode) {
  //     if (currentNode.key === key){
  //       return currentNode
  //     }
  //   } return false
  // }

//find but return the value
  findButReturnValue(key) {
    const node = this.find(key)
    return node
      ? node.value
      : null
  }

//see if linked list contains key
  has(key) {
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
  // removeWithFindByNext(key) {
  //   let currentNode = this.head
  //   let foundNode = this.findByNext(key)
  //
  //   if (foundNode === null){
  //     return null
  //   } else {
  //     foundNode.next = foundNode.next.next
  //     return this.length--
  //   }
  // }

//brute force
  // removeIt(key) {
  //   const previousNode = this.findByNext(key)
  //   if (previousNode){
  //     const node = prevNode.next
  //     previousNode.next = node.next
  //     return node
  //   }
  //   return null
  // }

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

}

export default class HashTable {
  constructor() {
    this.length = 0
    this.table = {}
  }

  //ht.iterate((k, v) => console.log(`${k}: ${v}`))
    // takes a callback function and passes it each key and value in sequence.
  iterate( callback ){
    Object.keys(this.table).forEach( key => { callback(key, this.table[key]) })
  }

  //ht.hash("name")
    // generates a hash for the key "name"
  hash( str ) {
    if( !(typeof str === "string") ){
      return null
    } else {
      const lowerCaseString = str.toLowerCase()
      const alphabit = Array(26).fill().map((_, index) => String.fromCharCode(index + 97))
      const hashed = []

      for( var i = 0; i < lowerCaseString.length; i++ ){
        hashed.push(alphabit.indexOf(lowerCaseString[i]) * (i + 1) * 107)
      }
      return ( hashed.reduce(( a,b ) => a + b, 0 ) % 101 )
    }
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
    const hashedKey = this.hash( key )

    if( !(hashedKey in table) ) {
      table[hashedKey] = linkedList.insert(key, value)
      return this.length++
    } else {
      table[hashedKey].insert(node)
      return this.length++
    }
  }

  //ht.get("name")
    // returns the value associated with key.
  get(key) {
    const table = this.table
    const hashedKey = this.hash(key)

    if(!(hashedKey in table)){
      return -1
    } else {
      const linkedListValue = table[hashedKey]
      return linkedListValue.value
    }
  }

  //ht.contains("name")
    // returns true if the hash table contains the key.
  contains(key) {
    const linkedList = this.table[this.hash(key)]
    return linkedList
      ? true
      : false
  }

  //ht.remove("name")
    // removes a key-value pair by key.
  remove(key){
    const table = this.table
    const hashedKey = this.hash(key)
    // const linkedList = this.table[this.hash(key)]
    // console.log('+++++++++->', linkedList)

    if(!(hashedKey in table)){
      return false
    } else {
      // const linkedList = this.table[this.hash(key)]
      const linkedList = this.table[this.hash(key)]
      console.log('+++++++++->', linkedList)
      console.log('--------->', linkedList.key)
      this.LinkedList.removeBy(linkedList.key)
      return this.length--
    }
  }

}
