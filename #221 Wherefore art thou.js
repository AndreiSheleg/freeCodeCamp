function whatIsInAName(collection, source) {
let sourceKeys = Object.keys(source)
let collectionFilter = collection.filter(el => 
sourceKeys.every(key => el[key] === source[key])
)
return collectionFilter
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
