import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitOrderDialogComponent } from './submit-order-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SubmitOrderDialogComponent', () => {
  let component: SubmitOrderDialogComponent;
  let fixture: ComponentFixture<SubmitOrderDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<SubmitOrderDialogComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        NoopAnimationsModule,
        SubmitOrderDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        provideNgxMask()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with phone control and required validator', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.get('phone')).toBeTruthy();
    expect(
      component.form.get('phone')?.hasValidator(Validators.required)
    ).toBeTrue();
  });

  it('should mark phone control as invalid if empty', () => {
    const phoneControl = component.form.get('phone');
    phoneControl?.setValue('');
    expect(phoneControl?.valid).toBeFalse();
    expect(phoneControl?.hasError('required')).toBeTrue();
  });

  it('should mark phone control as valid if value provided', () => {
    const phoneControl = component.form.get('phone');
    phoneControl?.setValue('+79991234567');
    expect(phoneControl?.valid).toBeTrue();
  });

  it('should render dialog title', () => {
    const titleElement = fixture.debugElement.query(
      By.css('h2[mat-dialog-title]')
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain(
      'Подтвержение заказа'
    );
  });

  it('should render phone input with mask and placeholder', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input[formControlName="phone"]')
    );
    expect(inputElement).toBeTruthy();
    expect(inputElement.attributes['mask']).toBe('(000) 000 00 00');
    expect(inputElement.attributes['prefix']).toBe('+7');
    expect(inputElement.attributes['placeholder']).toBe('+7');
  });

  it('should call dialogRef.close() when onNoClick is triggered', () => {
    const cancelButton = fixture.debugElement.query(
      By.css('button[mat-button]:first-child')
    );
    cancelButton.triggerEventHandler('click', null);
    expect(dialogRefSpy.close).toHaveBeenCalledWith();
  });

  it('should call dialogRef.close("Submit") when onYesClick is triggered', () => {
    const submitButton = fixture.debugElement.query(
      By.css('button[mat-button]:last-child')
    );
    submitButton.triggerEventHandler('click', null);
    expect(dialogRefSpy.close).toHaveBeenCalledWith('Submit');
  });

  it('should render cancel and submit buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button[mat-button]'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent).toContain('Отменить');
    expect(buttons[1].nativeElement.textContent).toContain('Подтвердить');
  });
});
