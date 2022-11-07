/**
 * This is part of an unimplemented feature - sorting by level for each interval.
 * If implemented, this would replace the system currently implemented in Game.ts.
 */
// let ripplesPerInterval = {
// 	PO: [[2, 2], [7, 1], [-5, 1], [-2, -2], [-3, 3]],
// 	M7: [[1, 2], [-1, 0], [2, -3], [-3, -2]],
// 	M6: [[-1, 2], [2, -1], [-3, 0], [0, -3], [4, 1], [-5, -2]],
// 	P5: [[7, 0], [2, 1], [4, 3], [0, -1], [-2, -3], [-5, 0], [-3, 2]],
// 	P4: [[5, 0], [0, 1], [2, 3], [-2, -1], [3, -2]],
// 	M3: [[4, 0], [-1, 1], [1, 3], [-3, -1], [2, -2]],
// 	M2: [[2, 0], [-3, 1], [-1, 3], [-5, -1], [0, -2], [4, 2]],
// }

// let ripplesPIDividedEMHard = {
// 	PO: {Easy: [[2, 2], [-2, -2]], Medium: [[-5, 1]], Hard: [[-3, 3], [7, 1]]},
// 	P5: {Easy: [[0, -1], [-5, 0]], Medium: [[-3, 2], [2, 1], [-2, -3]], Hard: [[4, 3], [7, 0]]},
// 	P4: {Easy: [[0, 1], [-2, -1]], Medium: [[5, 0], [2, 3]], Hard: [[3, -2]]},
// 	M3: {Easy: [[-1, 1], [1, 3]], Medium: [[4, 0], [2, -2]], Hard: [[-3, -1]]},

// 	M7: {Easy: [[-1, 0], [1, 2]], Medium: [], Hard: [[2, -3], [-3, -2]]},
// 	M6: {Easy: [[-1, 2], [-3, 0]], Medium: [[2, -1], [0, -3]], Hard: [[4, 1], [-5, -2]]},
// 	M2: {Easy: [[2, 0], [0, -2]], Medium: [[-3, 1], [4, 2], [-1, 3]], Hard: [[-5, -1]]}
// }

// let ripplesPerLevelerino = []
// let rankedLevels = ripplesPIDividedEMHard
// let easiesA = [
// 	...rankedLevels.M3.Easy, 
// 	...rankedLevels.P4.Easy, 
// 	...rankedLevels.P5.Easy,
// 	...rankedLevels.PO.Easy]
// let easiesB = [
// 	...rankedLevels.M2.Easy, 
// 	...rankedLevels.M6.Easy, 
// 	...rankedLevels.M7.Easy, 
// ]
// let mediumsA = [
// 	...rankedLevels.M3.Medium, 
// 	...rankedLevels.P4.Medium, 
// 	...rankedLevels.P5.Medium,
// 	...rankedLevels.PO.Medium]

// let mediumsB = [
// 	...rankedLevels.M2.Medium, 
// 	...rankedLevels.M6.Medium, 
// 	...rankedLevels.M7.Medium, ]

// let hardsA = [
// 	...rankedLevels.M3.Hard, 
// 	...rankedLevels.P4.Hard, 
// 	...rankedLevels.P5.Hard,
// 	...rankedLevels.PO.Hard, 
// ]
// let hardsB = [
// 	...rankedLevels.M2.Hard, 
// 	...rankedLevels.M6.Hard, 
// 	...rankedLevels.M7.Hard, ]
// let easies = [...easiesA, ...easiesB]
// let mediums = [...mediumsA, ...mediumsB]
// let hards = [...hardsA, ...hardsB]
