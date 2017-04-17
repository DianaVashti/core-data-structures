const ht = new HashTable()

function Node(data) {
  this.data = data
  this.value = value
  this.next = null
}

export default class HashTable {
  constructor() {
    this.length = 0
  }

  //ht.size()
    // returns the number of key-value pairs in the hash table.
  size() {
    return this.length
  }

  //ht.put("name", "Zanzibar")
    // adds a key-value pair to the hash table, deal with collisions using chaining
  put() {

  }

  //ht.get("name")
    // returns the data associated with key.
  get() {

  }

  //ht.contains("name")
    // returns true if the hash table contains the key.
  contains() {

  }

  //ht.iterate((k, v) => console.log(`${k}: ${v}`))
    // takes a callback function and passes it each key and value in sequence.
  iterate(){

  }

  //ht.remove("name")
    // removes a key-value pair by key.
  remove(key){

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

}
