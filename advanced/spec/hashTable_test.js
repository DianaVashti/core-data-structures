import chai, { expect } from 'chai'
import HashTable from '../src/hashTable.js'


describe('HashTable', () => {

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('hash()', () => {
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

  context('put()', () => {
    it('Adds a new key-value pair to the hash table', () => {
      const ht = new HashTable()
      ht.put("Azazel", "Demon")
      ht.put("Beelzebub", "Bug")
      expect(ht.size()).to.equal(2)
      expect(ht.get("Azazel")).to.equal("Demon")
    })
  })
})
