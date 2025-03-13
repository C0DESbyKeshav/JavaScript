//* Use export to Resuse a Code Block
const capitalizeString1 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Exporting the Function:
  export { capitalizeString1 };
  
  // Exporting the Variable:
  export const foo = "bar";
  export const bar = "foo";
  