import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { ModalEditComponent } from './modal-edit/modal-edit.component'; // Asegúrate de usar la ruta correcta

@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [
    TabsPage,
    ModalEditComponent, // Asegúrate de declarar ModalEditComponent aquí
  ],
})
export class TabsPageModule {}
