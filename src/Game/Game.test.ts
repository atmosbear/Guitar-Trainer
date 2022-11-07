import { describe, expect, it } from "vitest"
import { generatePossibleAs, gs } from "./Game"

describe("test", () => {
	it("should contain the right notes", () => {
		let pa = generatePossibleAs(1, {x: 0, y: 0, name: "E", isActive: true, soundFile: ""}, gs.fretboard)
		expect(pa).toContain(gs.fretboard.findFret(0, 1))
		expect(pa).toContain(gs.fretboard.findFret(1, 1))
		expect(pa).to.not.contain(gs.fretboard.findFret(0, 0))
		expect(pa).to.not.contain(gs.fretboard.findFret(2, 2))
		pa = generatePossibleAs(2, {x: 0, y: 0, name: "E", isActive: true, soundFile: ""}, gs.fretboard)
		expect(pa).toContain(gs.fretboard.findFret(0, 1))
		expect(pa).toContain(gs.fretboard.findFret(1, 1))
		expect(pa).toContain(gs.fretboard.findFret(2, 2))
		expect(pa).toContain(gs.fretboard.findFret(1, 0))
		expect(pa).to.not.contain(gs.fretboard.findFret(0, 0))
	})
	it("should work even on y = 5", () => {
		let pa = generatePossibleAs(1, {x: 0, y: 5, name: "E", isActive: true, soundFile: ""}, gs.fretboard)
		expect(pa).to.not.contain(gs.fretboard.findFret(0, 0))
		expect(pa).to.not.contain(gs.fretboard.findFret(0, 4))
	})
}) 