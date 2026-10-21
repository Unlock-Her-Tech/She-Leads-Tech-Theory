// Creates a SimpleArray with restricted functionality for use in a SimpleList.
// Do not edit this!
export function createSimpleArray<T>({ capacity }: { capacity: number }): T[] {
  return Object.seal(
    new Proxy(Array.from({ length: capacity }), {
      get(target, prop) {
        if (prop === Symbol.toPrimitive) {
          return () => {
            const values = Object.keys(target)
              .filter((key) => /^\d+$/.test(key))
              .sort((key1, key2) => Number(key1) - Number(key2))
              .map((key) => JSON.stringify(target[Number(key)]));
            return `[${values.join(", ")}]`;
          };
        }
        if (typeof prop === "string" && /^\d+$/.test(prop)) {
          return target[Number(prop)];
        }
        if (prop in target) {
          throw new Error(
            `Avoid accessing forbidden method/property \`${String(prop)}\`!`,
          );
        }
        return undefined;
      },
      set(target, prop, value) {
        if (typeof prop === "string" && /^\d+$/.test(prop)) {
          target[Number(prop)] = value;
          return true;
        }
        throw new Error(
          `Avoid accessing forbidden method/property \`${String(prop)}\`!`,
        );
      },
    }),
  );
}
