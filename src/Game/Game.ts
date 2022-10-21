/// <reference path="./Types.d.ts"/>

import { writable } from "svelte/store"

function createFretboard(): Fretboard {
	let n: string[][] = [
		["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
		["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
		["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
		["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
		["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
		["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
	]
	let strings: Note[][] = []
	let everyNote: Note[] = []
	n.forEach((string, y) => {
		let s: Note[] = []
		string.forEach((name, x) => {
			s.push({x, y: Math.abs(y-5), name})
			everyNote.push({x, y: Math.abs(y-5), name})
		})
		strings.push(s)
	})
	function findFret(x, y) {
		if (y >= 6) {
			return undefined
		} else if (y >= gs.fretboard.strings[0].length) {
			return undefined}
		return this.strings[Math.abs(5-y)][x]
	}
	return {strings, findFret, everyNote}
}

function generatePossibleQs(fretboard: Fretboard, PossibleQs: Note[] = []): Note[] {
	if (PossibleQs.length === 0) {
		PossibleQs = fretboard.everyNote // can't I just use a default up there? It's from the other parameter, tho... investigate later.
	}
	return PossibleQs
}

export function generatePossibleAs(level: number, Q: Note, fretboard: Fretboard): Note[] {
	let ripplesPerLevel: [number, number][][] = [
		[[-1, 1], [0, 1], [1, 1]],
		[[2, 2], [1, 0], [-1, 0]], 
	]
	let ripplesInLevel: [number, number][] = []
	for (let i = 1; i <= level ;i ++) {
		if (ripplesPerLevel[i-1] !== undefined)
			{ripplesInLevel.push(...ripplesPerLevel[i-1])}
	}		
	let possibleAs: Note[] = []
	ripplesInLevel.forEach(
		(ripple) => {
		try {
			let fret = fretboard.findFret(ripple[0] + Q.x, ripple[1] + Q.y)
			possibleAs.push(fret)
		} catch (e){
			console.log(e)
		}
	})
	possibleAs = possibleAs.filter((possibleA) => {return possibleA !== undefined }, "hi")
	return possibleAs
}

function rand<T>(array: T[]): T {
	return array[Math.floor(Math.random()*array.length)]
}

function createRound(level, fretboard: Fretboard): Round {
	function getNewQ(): Note {
		return rand(generatePossibleQs(fretboard))
	}
	function getNewA(): Note {
		return rand(generatePossibleAs(level, Q, fretboard))
	}
	let Q = getNewQ()
	let numLoops = 0
	while (generatePossibleAs(level, Q, fretboard).length === 0 && numLoops < 20) {
		Q = getNewQ()
		numLoops++
	}
	let A = getNewA()
	console.log(A)
	return {Q, A}
}

class GameState {
	public fretboard: Fretboard
	public level: number
	public currRound: Round
	public createNewRound: Function
	constructor(level: number, fretboard: Fretboard = createFretboard()) {
		this.fretboard = fretboard
		this.level = level
		this.createNewRound = () =>{ this.currRound = createRound(this.level, this.fretboard)}
		this.currRound = createRound(level, fretboard)
	}
}

export let gs = new GameState(2)
gs.createNewRound()
export let gStore = writable(gs)
// gs.currRound
// gs.createNewRound()
// generatePossibleAs(2, {x: 0, y: 5, name: "E"}, gs.fretboard)