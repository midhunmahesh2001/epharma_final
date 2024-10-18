import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'landing',
        pathMatch:'full'
    },
    {
        path:'landing',
        component:LandingComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'product',
        component:ProductComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    }
];
