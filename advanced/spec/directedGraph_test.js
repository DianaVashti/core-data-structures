import chai, { expect } from 'chai'
import DirectedGraph from '../src/directedGraph'

describe.only('DirectedGraph', () => {

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addVertex(V)', () => {
    it('Adds a new vertex to the graph', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      expect(dg.count()).to.equal(1)
    })
    it('Returns null if vertex already exists', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      expect(dg.addVertex('V1')).to.equal(null)
    })
  })

  context('hasVertex(V)', () => {
    it('Returns true of the graph has a given vertex', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      expect(dg.hasVertex("V1")).to.be.true
    })
    it('Returns false if the graph does not contain a given vertex', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      expect(dg.hasVertex("V3")).to.be.false
    })
  })

  context('addDirection(V1. V2)', () => {
    it('Adds V2 to the array of pointers for the V1 vertex', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.count()).to.equal(2)
      expect(dg.hasDirection('V1', 'V2')).to.be.true
    })
    it('Returns null if direction already exists', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.count()).to.equal(2)
      expect(dg.addDirection('V1', 'V2')).to.equal(null)
    })
  })

  context('hasDirection(V1, V2)', () => {
    it('Returns true if pointer between V1 and V2 exits', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.count()).to.equal(2)
      expect(dg.hasDirection('V1', 'V2')).to.be.true
    })
    it('Returns false if no such pointer exists', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.count()).to.equal(2)
      expect(dg.hasDirection('V2', 'V1')).to.be.false
    })
  })

  context('visit(v1, vertex => console.log(vertex))', () => {
    it('does some really weird shit', () => {
      const dg = new DirectedGraph()
      //i am not yet sure how to test console logs?
    })
  })

  context('findPaths(V1, V2)', () => {
    it('Returns an array of arrays detailing the possible path from V1 to V2', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addVertex('V3')
      dg.addVertex('V4')
      dg.addDirection('V1', 'V2')
      dg.addDirection('V1', 'V4')
      dg.addDirection('V2', 'V3')
      dg.addDirection('V4', 'V3')
      expect(dg.count()).to.equal(4)
      expect(dg.findPaths('V1', 'V3')).to.equal( [['V1', 'V2', 'V3'],['V1', 'V4', 'V3']] )
    })
  })

  context('removeDirection(V1, V2)', () => {
    it('Removes V2 from the array of pointers for V1', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.hasDirection('V1', 'V2')).to.be.true
      dg.removeDirection('V1', 'V2')
      expect(dg.count()).to.equal(2)
      expect(dg.hasDirection('V1', 'V2')).to.be.false
    })
    it('Returns null if no such direction exisited', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      expect(dg.hasDirection('V1', 'V2')).to.equal(null)
    })
  })

  context('getSeparatedVertices()', () => {
    it('Returns all totally unconnected vertices', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addVertex('V3')
      dg.addDirection('V1', 'V3')
      expect(dg.getSeparatedVertices()).to.equal('V2')
    })
    it('Returns null if the graph is connected', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addVertex('V3')
      dg.addDirection('V1', 'V2')
      dg.addDirection('V2', 'V3')
      expect(dg.getSeparatedVertices()).to.equal(null)
    })
  })

  context('removeVertex(V1)', () => {
    it('Removes a vertex and all pointers aimed at it', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addVertex('V3')
      dg.addDirection('V1', 'V2')
      dg.addDirection('V2', 'V3')
      dg.removeVertex('V2')
      expect(dg.hasDirection('V1', 'V2')).to.be.false
    })
    it('Returns null if no such vertex exists', () => {
      const dg = new DirectedGraph()
      dg.addVertex('V1')
      dg.addVertex('V2')
      dg.addDirection('V1', 'V2')
      expect(dg.removeVertex('V3')).to.equal(null)
    })
  })

})
