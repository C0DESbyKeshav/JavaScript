//* Understand the Differences Between import and require
// In past people would use the require function to import functions and code from other files.
// But now, we have 'import' and 'export'
// You can export code in one file and then import it in another file.
// It also allows you to only import certain functions from a file or certain variables.

import { capitalizeString } from "./export1.js";
// Here, (./) means the current directory.
// .js is assumed so no need to include that (DEPENDS ON THE CODE EDITOR)

const cap = capitalizeString("ridhav");
console.log(cap);
