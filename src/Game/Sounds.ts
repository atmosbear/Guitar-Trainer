/// <reference path="./Types.d.ts"/>param

import {Howl} from "howler"

export function findSoundFileName(note: Note): string | "ERROR" {
	let convertedName = `${note.x} ${note.y} ${note.name.replace("#", "s")}`
	let faile = ""
	soundList.forEach((fileName) => {
		// console.log("searching", fileName, "for", convertedName)
		// console.log("lets see", "Ello".includes("lo"))
		if (fileName.includes(convertedName)) {
			faile = `/sounds/MP3/${fileName}`
		}
	})
	if (faile === "") { // had to rewrite this like this, not sure why though.
		faile = "ERROR"
	}
	return faile
}

export function play(note) {
	var sound = new Howl({
		src: [note.soundFile],
		html5: false,
		loop: false,
		volume: 1,
	})
	note.soundFile
	sound.play()
	console.log("trying")
}

let soundList = [
	"12 5 E.mp3",
	"12 4 B 7 5 B.mp3",
	"12 0 E 7 1 E 2 2 E.mp3",
	"11 5 Ds.mp3",
	"11 4 As 6 5 As.mp3",
	"11 0 Ds 6 1 Ds 1 2 Ds.mp3",
	"10 5 D.mp3",
	"10 0 D 5 1 D 0 2 D.mp3",
	"9 5 Cs 14 4 Cs.mp3",
	"9 0 Cs 4 1 Cs.mp3",
	"8 5 C 13 4 C.mp3",
	"8 0 C 3 1 C.mp3",
	"7 3 D 3 4 D 12 2 D.mp3",
	"7 0 B 2 1 B.mp3",
	"6 3 Cs 2 4 Cs 11 2 Cs.mp3",
	"6 0 As 1 1 As.mp3",
	"5 5 A 10 4 A.mp3",
	"5 3 C 1 4 C 10 2 C.mp3",
	"5 0 A 0 1 A.mp3",
	"4 4 Ds 8 3 Ds 13 1 Ds.mp3",
	"4 2 Fs 9 1 Fs 14 0.mp3",
	"4 0 Gs.mp3",
	"3 5 Gs 9 4 Gs.mp3",
	"3 5 G 8 4 G 12 3 G.mp3",
	"3 3 As 8 2 As 13 1 As.mp3",
	"3 2 F 8 1 F 12 0 F.mp3",
	"3 0 G.mp3",
	"2 5 Fs 7 4 Fs 11 3 Fs.mp3",
	"2 3 A 7 2 A 12 1 A.mp3",
	"2 0 Fs.mp3",
	"1 5 F 6 4 F 10 3 F.mp3",
	"1 3 Gs 6 2 Gs 11 1 Gs.mp3",
	"1 0 F.mp3",
	"0 5 E 5 4 E 9 3 E.mp3",
	"0 4 B 4 3 B 9 2 B.mp3",
	"0 3 G 5 2 G 10 1 G.mp3",
	"0 0 E.mp3"
	]