import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormLogComponent } from './form-log/form-log.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ProductComponent } from './product/product.component';
import { Sanpham1Component } from './sanpham1/sanpham1.component';
import { ThanhcongcuComponent } from './thanhcongcu/thanhcongcu.component';
import { FooterComponent } from './footer/footer.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { GiohangComponent } from './giohang/giohang.component';
import { TrangChuComponent } from './trangchu/trangchu.component';

const routes: Routes = [
  { path: 'dangky', component: FormComponent },
  { path: 'dangnhap', component: FormLogComponent },
  { path: 'trangchu', component: TrangChuComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'sanpham', component: ProductComponent},
  { path: 'chitietsp', component: Sanpham1Component },
  { path: 'header', component: ThanhcongcuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'thanhtoan', component: ThanhtoanComponent },
  { path: 'giohang', component: GiohangComponent },
  { path: '', redirectTo: '/sanpham', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
