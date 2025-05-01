import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewImageComponent } from './view-image/view-image.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'viewImage/:id',component:ViewImageComponent}
];
