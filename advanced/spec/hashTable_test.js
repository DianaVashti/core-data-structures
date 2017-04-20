import chai, { expect } from 'chai'
import HashTable from '../src/hashTable.js'


describe('HashTable', () => {

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('hash(key)', () => {
    it('Returns the hashed interger value of a given string', () => {
      const ht = new HashTable()
      expect(ht.hash("Azazel")).to.equal(2)
      expect(ht.hash("Beelzebub")).to.equal(17)
      expect(ht.hash("Choronzon")).to.equal(28)
    })
    it("Always returns the same hashed integer for the same string", () => {
      const ht = new HashTable()
      expect(ht.hash("Azazel")).to.equal(2)
      expect(ht.hash("Azazel")).to.equal(2)
    })
    it("Returns null if provided input is not a string", () => {
      const ht = new HashTable()
      expect(ht.hash(23)).to.be.null
    })
  })

  context('put(key, value)', () => {
    it('Adds a new key-value pair to the hash table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      expect(ht.get("Azazel")).to.equal("Demon")
    })
  })

  context('get(key)', () => {
    it('Returns the value associated with a key', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      expect(ht.get("Azazel")).to.equal("Demon")
    })
    it('Returns -1 if the key does not exist in the table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      expect(ht.get("Choronzon")).to.equal(-1)
    })
  })

  context('remove(key)', () => {
    it('removes a key-value pair by key', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      ht.remove("Azazel")
      expect(ht.size()).to.equal(1)
      expect(ht.contains("Azazel")).to.be.false
    })
    it('Returns false if the key does not exist in the table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      expect(ht.remove("Choronzon")).to.equal.false
    })
  })

  context('contains(key)', () => {
    it('Returns a true if the table contains a given key', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      expect(ht.size()).to.equal(1)
      expect(ht.contains("Azazel")).to.be.true
    })
    it('Returns false if the table does not contain a given key', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      expect(ht.size()).to.equal(1)
      expect(ht.contains("Beelzebub")).to.be.false
    })
  })

  context('size()', () => {
    it('Returns the length of the table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      expect(ht.size()).to.equal(1)
    })
    it('Returns 0 if the table is empty', () => {
      const ht = new HashTable()
      expect(ht.size()).to.equal(0)
    })
  })

  context('iterate(callback)', () => {
    it('Runs a callback function on each key in the table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      ht.iterate((k, v) => console.log(`${k}: ${v}`))
    })
  })



})
