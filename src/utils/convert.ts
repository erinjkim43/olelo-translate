const CHAR_TO_ENTITY: Record<string, string> = {
  "\u02BB": "&#699;",  // ʻokina
  "\u0100": "&#256;",  // Ā
  "\u0101": "&#257;",  // ā
  "\u0112": "&#274;",  // Ē
  "\u0113": "&#275;",  // ē
  "\u012A": "&#298;",  // Ī
  "\u012B": "&#299;",  // ī
  "\u014C": "&#332;",  // Ō
  "\u014D": "&#333;",  // ō
  "\u016A": "&#362;",  // Ū
  "\u016B": "&#363;",  // ū
};

const HAWAIIAN_CHARS = /[\u02BB\u0100\u0101\u0112\u0113\u012A\u012B\u014C\u014D\u016A\u016B]/;

function encodeEntities(word: string): string {
  let result = "";
  for (const char of word) {
    result += CHAR_TO_ENTITY[char] ?? char;
  }
  return result;
}

function convertWord(word: string): string {
  if (HAWAIIAN_CHARS.test(word)) {
    return `<span lang="haw">${encodeEntities(word)}</span>`;
  }
  return word;
}

export function convertText(input: string): string {
  return input
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .map((word) => convertWord(word))
        .join(" ")
    )
    .join("\n");
}
