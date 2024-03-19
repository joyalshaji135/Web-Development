var Person = {
    name: "Joyal Shaji",
    age: 23,
    place: "Kottayam",
    education: "MCA"
}

console.log("All Items Are Print"+Person);

console.log("Only Name Print"+Person.name);

console.log("Person['age']"+Person['age']);

for(x in Person)
{
    console.log("Object ["+x+"] : "+Person[x]);
}
