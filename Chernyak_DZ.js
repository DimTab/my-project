function Store(objname,gender,brand,season,subtype,color,size,material){
    if(!new.target){
        return new Store(objname,gender,brand,season,subtype,color,size,material)
    }
    this.objname=objname
    this.gender=gender
    this.brand=brand
    this.season=season
    this.subtype=subtype
    this.color=color
    this.size=size
    this.material=material
}
const jacket = Store(`Jacket`,`m`,`ZARA`,`winter`,`long sleeve`,`white`,`XL`, `wool`)
const tshirt = Store(`T-shirt`,`f`,`GUCCI`,`summer`,`tiny`,`pink`,`S`, `cotton`)
console.log(jacket,tshirt)


