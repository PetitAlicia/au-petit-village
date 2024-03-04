import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product = [
    {link:"/product", image:"https://www.zupimages.net/up/24/10/mjr1.png", name: "Figurine d'Obélix - Pile d'albums", price: "90,00 €"},
    {link:"/second-product", image:"https://www.zupimages.net/up/24/10/hh40.png", name: "Figurine d'Astérix et Idéfix - Pile d'albums", price: "90,00 €"},
    {link:"/third-product", image:"https://www.zupimages.net/up/24/10/1bjl.png", name: "Figurine d'Astérix", price: "20,00 €"},
    {link:"/fourth-product", image:"https://www.zupimages.net/up/24/10/8iue.png", name: "Figurine d'Obélix et Idéfix ", price: "20,00 €"},
    {link:"/fifth-product", image:"https://www.zupimages.net/up/24/10/thl9.png", name: "Figurine de Panoramix", price: "20,00 €"},
    {link:"/sixth-product", image:"https://www.zupimages.net/up/24/10/h3v2.png", name: "Figurine d'Astérix - PAF!", price: "39,99 €"},
    {link:"/seventh-product", image:"https://www.zupimages.net/up/24/10/4ht2.png", name: "Figurine d'Astérix - Ça m'énerve!", price: "48,99 €"},
    {link:"/eighth-product", image:"https://www.zupimages.net/up/24/10/kug5.png", name: "Figurine d'Idéfix - Cœur", price: "34,99 €"}
  ]

  constructor() { }
}
