class StoreModel{
    constructor(objname,gender,brand,season,subtype,color,size,material) {
        this.objname= objname || ''
        this.gender= gender || ''
        this.brand=brand ||''
        this.season=season || ''
        this.subtype=subtype ||''
        this.color=color || ''
        this.size=size || 0
        this.material=material ||''
        }
    }
const jacket = new StoreModel (`Jacket`,`m`,`ZARA`,`winter`,`long sleeve`,`white`,`XL`, `wool`)
console.log(jacket)
const tshirt = new StoreModel(`T-shirt`,`f`,`GUCCI`,`summer`,`tiny`,`pink`,`S`, `cotton`)
console.log(tshirt)


