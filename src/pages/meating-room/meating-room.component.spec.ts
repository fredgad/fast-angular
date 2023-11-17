import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeatingRoomComponent } from './meating-room.component';

describe('MeatingRoomComponent', () => {
  let component: MeatingRoomComponent;
  let fixture: ComponentFixture<MeatingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeatingRoomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeatingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
