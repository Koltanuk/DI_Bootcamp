import { greet } from "./greetings.js";

import {displayColorMessage, displayErrorMessage} from "./colorful-message.js";
import { read_file } from "./files/read-file.js";



greet("Yana");

console.log(displayColorMessage("Message"));
console.log(displayErrorMessage("Error"));



try{
    let data = await read_file("./files/file-data.txt");
    console.log(displayColorMessage(data));
}catch (error){
    console.log(error);
}
