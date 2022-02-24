module.exports = function check(str, bracketsConfig) {
  let isTrue = [];
  let stack = [];
   for (let bracket of str) {
     bracketsConfig.forEach(el => {
        if (bracket == el[0] && bracket == el[1]) {
           if (!stack.includes(bracket)) {
              stack.push(el[1])
           }
           else {
              if (stack.pop() !== bracket) {
              isTrue.push(false)
           }}
        }
        else if (bracket == el[0]) {
           stack.push(el[1])
        }
        else if (bracket == el[1]) {
           if (stack.pop() !== bracket) {
              isTrue.push(false)
           }
        }
     })
   }
  return (stack.length !== 0 || isTrue.includes(false)) ? false : true
}
