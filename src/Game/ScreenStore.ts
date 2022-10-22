import { writable } from "svelte/store"

let screen: string | "welcome" | "?" | "game" | "levelChanger" = "game"
export let screenStore = writable(screen)
