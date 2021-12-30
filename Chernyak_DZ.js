class StoreModel {
    #price
    constructor(objname = '', gender = '', size = '', price = 0) {
        this.setPrice = function (price) {
            if (/^\d+(\d{1})*(\.\d{1,2})?$/.test(price)) {
                this.#price = price
            } else {
                throw new Error("Incorrect price")
            }
        }
        this.getPrice = function () {
            return this.#price
        }
        this.toString = function () {
            return `StoreModel: {objname: ${this.objname}, gender: ${this.gender}, size:${this.size}, price: ${this.#price}}`
        }
        this.objname = objname
        this.gender = gender
        this.size = size
        if (price !== 0) {
            this.setPrice(price)
        }
    }
}
const jacket = new StoreModel('jacket','m','XL')
Object.freeze(jacket)
try{
    jacket.setPrice(123.78)
} catch (ex) {
    console.log (`${ex.message}`)
}
// try{
//     jacket.setPrice('try')
//     // console.log(jacket)
// } catch (ex) {
//     console.log (`Example 2: ${ex.message}`)
// }
// try{
//     jacket.setPrice(-56.67)
//     // console.log(jacket)
// } catch (ex) {
//     console.log (`Example 3: ${ex.message}`)
// }
console.log(jacket.toString())



