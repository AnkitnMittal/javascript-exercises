/*              ----- Entry Point -----
The file that is linked in HTML. This is the Entry Point so that
we can load from all dependencies of this js file.
*/

import defaultExport, { greeting, farewell } from "./one.js";

console.log(greeting);
console.log(farewell);