import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trangchu/trangchu.component';
import { ProductComponent } from './product/product.component';
import { ThanhcongcuComponent } from './thanhcongcu/thanhcongcu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormLogComponent } from './form-log/form-log.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { Sanpham1Component } from './sanpham1/sanpham1.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { ThanhbenComponent } from './thanhben/thanhben.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ProductComponent,
    ThanhcongcuComponent,
    FooterComponent,
    FormComponent,
    FormLogComponent,
    LienheComponent,
    Sanpham1Component,
    GiohangComponent,
    ThanhtoanComponent,
    ThanhbenComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
