type params = {
    timeinMilli: number;
    name: string;
    isPro: boolean;
    anyPromise: () => Promise<any>;
}

const demofunction = ({ timeinMilli, name, isPro, anyPromise }: params): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("running....")
        setTimeout(() => {
            anyPromise()
                .then(() => {
                    resolve(name);
                })
                .catch((error) => {
                    reject(error);
                });
        }, timeinMilli);
    });
};

// Example usage:
const exampleParams: params = {
    timeinMilli: 8000,
    name: "Alice",
    isPro: true,
    anyPromise: () => Promise.resolve("Success"),
};

demofunction(exampleParams)
    .then(result => console.log(result))
    .catch(error => console.error(error));

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