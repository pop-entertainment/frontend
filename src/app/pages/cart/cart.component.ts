import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartStore } from '../../stores';
import { SubmitOrderDialogComponent } from './submit-order-dialog/submit-order-dialog.component';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    BackButtonComponent,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly dialog = inject(MatDialog);

  readonly cartStore = inject(CartStore);

  hasOrdered = false;

  openSubmitDialog(): void {
    const dialogRef = this.dialog.open(SubmitOrderDialogComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Submit') {
        this.cartStore.clearCart();
        alert('Заказ оформлен, ждите звонка!');
      }
    });
  }
}
