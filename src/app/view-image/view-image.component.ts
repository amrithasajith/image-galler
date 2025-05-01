import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-image',
  standalone: true,
  imports: [],
  templateUrl: './view-image.component.html',
  styleUrl: './view-image.component.css'
})
export class ViewImageComponent implements OnInit {

  imgId :any =''
  image :any=""

  constructor (private ar: ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
    this.ar.params.subscribe((res:any)=>{
      console.log(res)
      this.imgId = res.id
      console.log(this.imgId)
      this.viewAImg()

    })
  }
  viewAImg(){
    this.api.getProductById(this.imgId).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.image = res
      },
      error:(err:any)=>{
        console.log(err)
      }
      
    })
  }

}
