function truthCheck(collection, pre) {
  let isTrue = collection.every( obj => obj[pre])
  return isTrue;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
