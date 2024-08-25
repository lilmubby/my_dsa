const pinInput = {
  "00": "",
  // "01": "",
  "02": "",
  // "03": "CCC",
  // "04": "BHGHHB",
  // "05": "CCC",
  // "06": "BHGHHB",
  // "10": "CCC",
  // "12": "",
  // "13": "",
}
function findDuplicateIndex(obj) {
  // Create an object to keep track of value occurrences(Keys)
  const valueToKeys = {};

  // Iterate over the entries in the object
  for (const [key, value] of Object.entries(obj)) {
    // console.log(value);
      if (valueToKeys[value]) {
          valueToKeys[value].push(key);
      } else {
          valueToKeys[value] = [key];
      }
  }

  // Find all keys with duplicate values
  const duplicates = []
  for (const [value, keys] of Object.entries(valueToKeys)) {
      if (keys.length > 1 || value === "") {
        duplicates.push(...keys)
      }
  }

  return duplicates;
}
const lol = {"00": 'CMAU', "01": 'CMAYC', "02": 'NDHFDIHI', "03": 'CISYH', "10": 'CISYH'}

const groupByIndex = (obj, index) => {
  const result = {}
  for (const key in obj) {
    if (key.startsWith(index)) {
      if (!result[index]) {
        result[index] = {}
      }
      result[index][key] = obj[key]
    }
  }
  return result
}

// console.log(findDuplicateIndex(pinInput));

const firstManifest = [
  {
      "tripNumber": "SRTP13065",
      "bargeName": "Second Barge",
      "tugName": "Tug 2",
      "captainName": "Yk Bruv",
      "pickUpLocation": "GDNL Terminal, Apapa",
      "deliveryLocation": "APM Terminal, Apapa",
      "containerNumber": null,
      "cargoType": "Export",
      "containerSize": "20 FT",
      "shippingLine": "CMA",
      "cargoCondition": "N/A",
      "clientName": "",
      "bookingNumber": "",
      "sealNumber": "N/A",
      "commodity": "N/A",
      "grossWeight": "10.0",
      "vgm": "N/A",
      "vessel": ""
  },
  {
      "tripNumber": "SRTP13065",
      "bargeName": "Second Barge",
      "tugName": "Tug 2",
      "captainName": "Yk Bruv",
      "pickUpLocation": "GDNL Terminal, Apapa",
      "deliveryLocation": "APM Terminal, Apapa",
      "containerNumber": null,
      "cargoType": "Export",
      "containerSize": "20 FT",
      "shippingLine": "CMA",
      "cargoCondition": "N/A",
      "clientName": "",
      "bookingNumber": "",
      "sealNumber": "N/A",
      "commodity": "N/A",
      "grossWeight": "10.0",
      "vgm": "N/A",
      "vessel": ""
  },
  {
      "tripNumber": "SRTP13065",
      "bargeName": "Second Barge",
      "tugName": "Tug 2",
      "captainName": "Yk Bruv",
      "pickUpLocation": "GDNL Terminal, Apapa",
      "deliveryLocation": "APM Terminal, Apapa",
      "containerNumber": null,
      "cargoType": "Export",
      "containerSize": "20 FT",
      "shippingLine": "CMA",
      "cargoCondition": "N/A",
      "clientName": "",
      "bookingNumber": "",
      "sealNumber": "N/A",
      "commodity": "N/A",
      "grossWeight": "10.0",
      "vgm": "N/A",
      "vessel": ""
  }
]

const secondManifest = [
  {
      "tripNumber": "SRTP13065",
      "bargeName": "Second Barge",
      "tugName": "Tug 2",
      "captainName": "Yk Bruv",
      "pickUpLocation": "Five Star Logistics, Tin Can Island",
      "deliveryLocation": "Greenview, Apapa",
      "containerNumber": null,
      "cargoType": "Empty Transfer",
      "containerSize": "20 FT",
      "shippingLine": "N/A",
      "cargoCondition": "N/A",
      "clientName": "",
      "bookingNumber": "N/A",
      "sealNumber": "N/A",
      "commodity": "N/A",
      "grossWeight": "N/A",
      "vgm": "N/A",
      "vessel": "N/A"
  },
  {
      "tripNumber": "SRTP13065",
      "bargeName": "Second Barge",
      "tugName": "Tug 2",
      "captainName": "Yk Bruv",
      "pickUpLocation": "Five Star Logistics, Tin Can Island",
      "deliveryLocation": "Greenview, Apapa",
      "containerNumber": null,
      "cargoType": "Empty Transfer",
      "containerSize": "20 FT",
      "shippingLine": "N/A",
      "cargoCondition": "N/A",
      "clientName": "",
      "bookingNumber": "N/A",
      "sealNumber": "N/A",
      "commodity": "N/A",
      "grossWeight": "N/A",
      "vgm": "N/A",
      "vessel": "N/A"
  }
]

const input = [
  "ARKU2372585",
  "ARKU2374700",
  "ARKU2375270",
  "ARKU2407167",
  "APZU3094173"
]


const groupPins = (id, pinInput, manifest) => {
  const index = manifest.reduce((acc, curr, idx) => {
    if (!curr.containerNumber) {
      acc.push(idx);
    }
    return acc
  }, []);

  // const pins = pinInput.reduce((acc, curr, index) => {
  //   acc[String(id) + String(index)] = curr;
  //   return acc
  // }, {})
  const obj = {}
  for (let i = 0; i < index.length; i++) {
    
    obj[String(id) + String(index[i])] = pinInput[i]
    
  }

  return index
}

// console.log(groupPins(0, input, firstManifest));

const bargePins = {
  "0": {
      "00": "CMAU",
      "01": "HFUBDDCB",
      "02": "JSDBDHBS"
  },
  "1": {
      "10": "SDSHBDHB",
      "11": "SDJNJFDCUFBUF"
  }
}

const getPinInputs = (pininput, id) => {
  let pin = {}
  // for (const key in bargePins) {
  //   if (key === id) {
  //     Object.assign(pin, bargePins[key]);
  //   } else {
  //     {}
  //   }
  // }

  // const pinArr = Object.values(pininput)
  // .reduce((acc, curr, index) => {
  //   acc = {...acc, ...curr}
  //   return acc
  // }, {})

  // const flattenedObject = {};
  // Object.values(pininput).forEach(subObject => {
  //     Object.assign(flattenedObject, subObject);
  // });
  // return flattenedObject;
  // return pinArr
  return pininput[id]
}

console.log(getPinInputs(bargePins, 0));
// console.log(groupByIndex(getPinInputs(bargePins), 1));

const indie = {
  "0": {
      "00": "CMAU",
      "01": ""
  },
  "1": {
      "10": "CMAU"
  }
}

function extractPinInputItems(arg) {
  const obj = {}
  for (const key in arg) {
    Object.assign(obj, arg[key])
  }
  return obj
}

// console.log(extractPinInputItems(indie));