function findLongest(str) {

//   let spl = str.split(' ');
//   let longest = 0
//   console.log(spl)
//   for (let i = 0; i <= spl.length-1; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length
//     }
// }
// return longest;

    const spl = str.split(' ');
    const newSpl = spl.map((item)=> item.length );
    return Math.max(...newSpl);
}