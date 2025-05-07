import { Component , OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ImageCardComponent } from '../image-card/image-card.component';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  
    title = 'productfetching';
    products : any[]=[]// to hold all products
    category :any[]=[]// to hold all category 
    
    constructor(private api :ApiService, private route :Router){}
  
    ngOnInit(): void {
      this.getAllProducts();
    }
  
  
    getAllProducts(){
      this.api.getProducts().subscribe({
        next:(res:any)=>{
          console.log(res)
          this.products = res
          this.products.forEach((product:any)=>{
            !this.category.includes(product.category) && this.category.push(product.category)
          })
          
          console.log(this.category)
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
      
    }

    filterProducts(key:string,value:string){
      this.products = this.products.filter((product:any)=>
        product[key].includes(value)
      )
      console.log(this.products)
    }

    viewImage(id:any){
      this.route.navigateByUrl(`viewImage/${id}`)
    }
    handleImageClick(productsId: number) {
      console.log('Clicked Product ID:', productsId);
      this.viewImage(productsId)
      // Show modal, navigate, etc.
      
    }
  

}

