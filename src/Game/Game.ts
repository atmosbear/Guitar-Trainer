/// <reference path="./Types.d.ts"/>
import { writable } from "svelte/store"
import { findSoundFileName, play } from "./Sounds.js"

export function createFretboard(weirdStringsOK: boolean = false): Fretboard {
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
	n.forEach((string: string[], y: number) => {
			let s: Note[] = []
			string.forEach((name: string, x: number) => {
				let isActive = true
				if (!weirdStringsOK && y < 2) {
					isActive = false
				}
				let note: Note = {x, y: Math.abs(y-5), name, isActive, soundFile: ""}
				let soundFile = findSoundFileName(note)
				note.soundFile = soundFile
				s.push(note)
				everyNote.push(note)
			})
		strings.push(s)
	})
	function findFret(x: number, y: number) {
		if (y >= 6) {
			return undefined
		} else if (y >= gs.fretboard.strings[0].length) {
			return undefined}
		return this.strings[Math.abs(5-y)][x]
	}
	return {strings, findFret, everyNote}
}

function generatePossibleQs(fretboard: Fretboard, userPossibleQs: Note[] = []): Note[] {
	let possibles: Note[] = []
	if (userPossibleQs.length === 0) {
		fretboard.everyNote.forEach((possible) => {
			if (possible.isActive) {
				possibles.push(possible)
			}
		})
	} else {
		return userPossibleQs
	}
	return possibles
}
export let ripplesPerLevel: [number, number][][] = [
	[[-1, 1], [0, 1], [1, 1]],
	[[2, 2], [1, 0], [-1, 0]],
	[[-1, -1]]
]
export function generatePossibleAs(level: number, Q: Note, fretboard: Fretboard): Note[] {
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
			if (fret.isActive) {
				possibleAs.push(fret)
			}
		} catch (e){
			// console.log(e)
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
	return {Q, A}
}

export class GameState {
	public level: number
	public start: Function
	public outOf: number
	public started: boolean
	public skipped: number
	public devMode: boolean
	public userScore: number
	public fretboard: Fretboard
	public createNewRound: Function
	public playRoundsNotes: Function
	public topStringsAllowed: boolean
	public guidingHighlightsOn: boolean
	public currRound: Round | undefined
	constructor(level: number, weirdMode = false, fretboard: Fretboard = createFretboard(weirdMode)) {
		this.fretboard = fretboard
		this.level = level
		this.createNewRound = () =>{ this.currRound = createRound(this.level, this.fretboard)}
		this.playRoundsNotes = (delay: number) => {setTimeout(() => {play(gs.currRound.Q)}, delay); setTimeout(() => {play(gs.currRound.A)}, delay + 1000)}
		this.currRound = {Q: {x: -100, y: -100, name: "placeholder", isActive: false, soundFile: undefined}, A: {x: -100, y: -100, name: "placeholder", isActive: false, soundFile: undefined}}
		this.userScore = 0
		this.outOf = 0
		this.skipped = 0;
		this.guidingHighlightsOn = true;
		this.devMode = true;
		this.topStringsAllowed = weirdMode;
		this.started = false
		this.start = () => {this.createNewRound(); this.playRoundsNotes(0); this.started = true}
	}
}

export let gs = new GameState(3)
export let gStore = writable(gs)
// gs.currRound
// gs.createNewRound()
// generatePossibleAs(2, {x: 0, y: 5, name: "E"}, gs.fretboard)