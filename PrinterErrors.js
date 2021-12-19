function printerError(s) {
    // your code
    const errorCounter = s.split('').reduce((acc,currentValue)=>{
        if(currentValue.charCodeAt(0) > 109){return acc+=1}
        return acc
    },0)
    return `${errorCounter}/${s.length}`
}