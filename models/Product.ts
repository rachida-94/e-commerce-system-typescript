export class Product{
    
    title:string
    price:number
    discountPercentage: number;
    rating: number;
    description:string
    category:string
    image:string
    constructor(title:string,
    price:number,
    discountPercentage:number,
    rating:number,
    description:string,
    category:string,
    image:string){
        this.title=title
        this.price=price
        this.discountPercentage=discountPercentage
        this.category= category
        this.image=image
        this.description=description
        this.rating=rating
    }

    displayDetails():string {return `${this.title}, ${this.category},${this.image},${this.description},${this.rating} , $${this.price.toFixed(2)}`
}
    getPriceWithDiscount():number{
        const discount=this.price *this.discountPercentage/100
         return Number((this.price-discount).toFixed(2))
    }
}

