function spinalCase(str) {
  let unCamelCase = str.replace(/([a-z])([A-Z])/g, '$1 $2')
  let dashReplacer = unCamelCase.replace(/[^A-Za-z-]/g,'-')
  let lowercaser = dashReplacer.toLowerCase()
  return lowercaser
}

spinalCase('This Is Spinal Tap');
