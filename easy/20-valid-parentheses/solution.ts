const bracketMap = {
  ")": "(",
  "]": "[",
  "}": "{",
} as const;

const openingBrackets = ["(", "[", "{"];

type BracketKey = keyof typeof bracketMap;

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }
    if (stack[stack.length - 1] === bracketMap[currentBracket as BracketKey]) {
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length === 0;
}
