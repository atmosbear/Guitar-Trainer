interface Note {
	x: number
	y: number
	name: string
	isActive: boolean
}
type GuitarString = Note[]
interface Fretboard {
	strings: GuitarString[]
	findFret: Function
	everyNote: Note[]
}
interface Round {
	Q: Note
	A: Note
}