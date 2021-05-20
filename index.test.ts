import {obleos} from './index'

describe("Obleos sigil handling", ()=> {

  it("treats plain text as such", ()=> {
    const result = obleos`Hello obleos!`
    expect(result).toBe("Hello obleos!")
  })


    it("treats plain text as such (template on next line)", ()=> {
      const result = obleos`
Hello obleos!`
      expect(result).toBe("Hello\nobleos!")
    })

    it("treats plain text as such (template on two lines)", ()=> {
      const result = obleos`Hello
obleos!`
      expect(result).toBe("Hello\nobleos!")

    })
})

