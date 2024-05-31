// type params = {
//     timeinMilli: number;
//     name: string;
//     isPro: boolean;
//     anyPromise: () => Promise<any>;
// }

// const demofunction = ({ timeinMilli, name, isPro, anyPromise }: params): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log("running....")
//         setTimeout(() => {
//             anyPromise()
//                 .then(() => {
//                     resolve(name);
//                 })
//                 .catch((error) => {
//                     reject(error);
//                 });
//         }, timeinMilli);
//     });
// };

// // Example usage:
// const exampleParams: params = {
//     timeinMilli: 8000,
//     name: "Alice",
//     isPro: true,
//     anyPromise: () => Promise.resolve("Success"),
// };

// demofunction(exampleParams)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// enum MonsterType {
//     godZilla,
//     MonsterZero,
//     Kong
// }

// interface Monster {
//     color: string,
//     age: number,
//     type: MonsterType
// }

// const HybridOne: Monster = {
//     color: "gray",
//     age: 100,
//     type: MonsterType.godZilla
// }

// const displayMonster = (monster: Monster): void => {
//     const MonsterTypeName = MonsterType[monster.type]
//     if (typeof MonsterTypeName === "string") {
//         console.log({
//             ...monster,
//             type: MonsterTypeName
//         })
//     }
// }

// displayMonster(HybridOne)

// const num: number = 5;

// const checkEven = (anyNumber: number): boolean => {
//     return anyNumber % 2 === 0 ? true : false
// }

// const flag: boolean = checkEven(num)
// console.log(flag)

// const names: string[] = ["charlie", "david", "ali", "max"]
// const res: boolean = names.some(name => name.length > 6)
// console.log(res)

// let a:number = 99
// let b:number = 1

// a = a+b
// b = a-b
// a = a-b

// console.log(a,b)

// let data = [
//     [
//         {
//             vuln: 'xss'
//         },
//         {
//             vuln: 'sqli'
//         },
//         {
//             vuln: 'cors'
//         },
//         {
//             vuln: 'xmli'
//         },
//         {
//             vuln: 'request-smuggling'
//         }
//     ],
//     [
//         {
//             vuln: 'cors'
//         },
//         {
//             vuln: 'xmli'
//         },
//         {
//             vuln: 'request-smuggling'
//         }
//     ],
//     [
//         {
//             vuln: 'xss'
//         },
//         {
//             vuln: 'xmli'
//         },
//         {
//             vuln: 'request-smuggling'
//         }
//     ]
// ]

// let count = {
//     "xss": 0,
//     "request-smuggling": 0,
//     "xmli": 0,
//     "cors": 0,
//     "sqli": 0
// }

// data.map((row) => {
//     row.map((item) => {
//         count[item.vuln]++
//     })
// })

// console.log(count)