import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { GetprofileComponent } from './getprofile/getprofile.component';
import { ProfsectionComponent } from './profsection/profsection.component';
import { BlogComponent } from './blog/blog.component';
import { ShowblogsComponent } from './showblogs/showblogs.component';
import { BlogprofileComponent } from './blogprofile/blogprofile.component';
<<<<<<< HEAD
import { ChatComponent } from './chat/chat.component';
=======
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
>>>>>>> 75a5e7afd1828f9f15327a0481536ea03b5c01ce
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'profile-user',component:ProfileUserComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'login', component:SecurityComponent},
  {path:'recommendation',component:RecommendationComponent},
  {path: 'tax-calculator',component:TaxCalculatorComponent},
  {path:'getprofile',component:GetprofileComponent},
  {path:'profsection',component:ProfsectionComponent},
  {path:'blog',component:BlogComponent},
  {path:'showblogs',component:ShowblogsComponent},
  {path:'blogprofile',component:BlogprofileComponent},
  {path:'chatservice',component:ChatComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

