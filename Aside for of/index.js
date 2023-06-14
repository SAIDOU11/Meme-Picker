const characters = [
  {
    title: "Fighter",
    emoji: "👊",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙",
    powers: ["magic", "invisibility", "necromancy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshidfting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  },
];

for (let character of characters) {
  for (let power of character.powers) {
    console.log(power);
  }
}
