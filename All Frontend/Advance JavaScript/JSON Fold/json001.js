const jsonString = '{"name": "Srikrishna", "age": 22, "location": "West Bengal"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);
// Output: { name: 'Srikrishna', age: 22, location: 'West Bengal' }

console.log(jsonObject.name);  // Output: Srikrishna
console.log(jsonObject.age);   // Output: 22
console.log(jsonObject.location);  // Output: West Bengal
