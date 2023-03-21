// Assuming the csv file is stored in a variable called csvData
// and has the format: firstname lastname,title,mobile

import { readCsvFile } from "./get_csv";
import { getRandomChinesePhoneNumber, getRandomInt } from "./get_phone";

// Define an interface for the contact object
interface Contact {
    name: string;
    title: string;
    department: string;
    mobile: string;
    enterprise_mailbox: string;
  }
  


  // A function to get a random contact from the csv data
  export function getRandomContact(): Contact {
    let csvPath = "data/characters_data.csv";
    const nameList = [];
    readCsvFile(csvPath).then((names)=>{
      nameList.concat(names)
    }).catch((err) => {
      console.log(err);
    })
    // Get a random index between 0 and the number of lines
    let index = getRandomInt(0, nameList.length - 1);
    // Get the firstname and lastname from the first field
    let [firstname, lastname] = nameList[index].split(" ");
    // Get the title from the second field
    let title = firstname;
    // Get the mobile from the third field
    let mobile = getRandomChinesePhoneNumber();
    // Generate the department from the lastname
    let department = lastname;
    // Generate the enterprise mailbox from the firstname and lastname
     let mailbox = `${firstname}.${lastname}@outlook.com`;
    
     // Return an object with all the contact details
     return {
      name: `${firstname} ${lastname}`,
      title: title,
      department: department,
      mobile: mobile,
      enterprise_mailbox: mailbox,
     };
  }
  