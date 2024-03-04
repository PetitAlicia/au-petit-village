import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { SecondProductComponent } from './second-product/second-product.component';
import { ThirdProductComponent } from './third-product/third-product.component';
import { FourthProductComponent } from './fourth-product/fourth-product.component';
import { FifthProductComponent } from './fifth-product/fifth-product.component';
import { SixthProductComponent } from './sixth-product/sixth-product.component';
import { SeventhProductComponent } from './seventh-product/seventh-product.component';
import { EighthProductComponent } from './eighth-product/eighth-product.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsComponent } from './mentions/mentions.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "product", component: ProductComponent },
    { path: "second-product", component: SecondProductComponent },
    { path: "third-product", component: ThirdProductComponent },
    { path: "fourth-product", component: FourthProductComponent },
    { path: "fifth-product", component: FifthProductComponent },
    { path: "sixth-product", component: SixthProductComponent },
    { path: "seventh-product", component: SeventhProductComponent },
    { path: "eighth-product", component: EighthProductComponent },
    { path: "contact", component: ContactComponent },
    { path: "mentions", component: MentionsComponent }
];
