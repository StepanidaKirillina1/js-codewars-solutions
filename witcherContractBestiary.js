/*

https://www.codewars.com/kata/69b9359e8af0beedadc87db9

Geralt has taken on a new contract, but the peasants, as usual, didn't understand much. They cannot describe the creature itself, but they managed to tell him what it fears and hides from. You need to help Geralt check his Bestiary and accurately identify what he is hunting, so the witcher can properly prepare his oils and potions.

Your Task
Write a function identifyMonster(weaknesses, bestiary) that matches the monster's fears from the peasants' tales with the knowledge from the Bestiary. The function must return the name of the monster whose vulnerabilities include all the weaknesses listed by the peasants.

Input
weaknesses (Array of Strings): A list of weaknesses noticed by the peasants. For example: ["Igni", "Silver"].

bestiary (Object): A reference guide where the key is the monster's name and the value is an array of its known vulnerabilities.

Output
monster_name (String): The name of the identified monster.

If no creature from the Bestiary fits the description, the function should return the string "Unknown monster".

Example
const bestiary = {
  "Griffin": ["Grapeshot", "Hybrid Oil", "Aard"],
  "Noonwraith": ["Yrden", "Moon Dust", "Specter Oil"],
  "Drowner": ["Igni", "Necrophage Oil"]
};

identifyMonster(["Igni", "Necrophage Oil"], bestiary); 
// Returns: "Drowner"

identifyMonster(["Yrden", "Moon Dust"], bestiary); 
// Returns: "Noonwraith" (since these vulnerabilities are in its list)

identifyMonster(["Silver", "Garlic"], bestiary); 
// Returns: "Unknown monster"
Notes / Constraints
The weaknesses array will always contain at least one element.
A monster is considered a match if it has all the weaknesses from the provided weaknesses array (even if the Bestiary lists additional vulnerabilities for it).
In the tests, exactly one monster will match any valid set of weaknesses.

*/

function identifyMonster(observedWeaknesses, bestiary) {
    for (let key in bestiary) {
        let isWeakness = true;

        for (let weakness of observedWeaknesses) {
            if (!bestiary[key].includes(weakness)) {
                isWeakness = false;
                break;
            }
        }

        if(isWeakness) {
            return key;
        }
    }

    return "Unknown monster";
}
