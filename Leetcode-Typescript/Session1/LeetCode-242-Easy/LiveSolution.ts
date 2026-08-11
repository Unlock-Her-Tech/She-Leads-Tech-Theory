export function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  if (str1.length === 0 || str2.length === 0) {
    return false;
  }

  const str1Map = new Map<string, number>();
  const str2Map = new Map<string, number>();

  for (let index = 0; index < str1.length; index++) {
    if (str1Map.has(str1[index])) {
      str1Map.set(str1[index], str1Map.get(str1[index]) + 1);
    } else {
      str1Map.set(str1[index], 1);
    }
  }

  for (let index = 0; index < str2.length; index++) {
    if (str2Map.has(str2[index])) {
      str2Map.set(str2[index], str2Map.get(str2[index]) + 1);
    } else {
      str2Map.set(str2[index], 1);
    }
  }

  for (const [key, value] of str2Map) {
    console.log(str1Map.get(key));
    if (str1Map.get(key) === undefined) {
      return false;
    }
    if (str1Map.get(key) !== str2Map.get(key)) {
      return false;
    }
  }

  return true;
}
