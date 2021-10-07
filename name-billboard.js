function billboard(name, price = 30){
    return name.split('').reduce(index => index + price,0)
}