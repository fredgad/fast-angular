import { Route } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { MeatingRoomComponent } from '../pages/meating-room/meating-room.component';
import { PrivateRoomComponent } from '../pages/private-room/private-room.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'meating-room',
    component: MeatingRoomComponent
  },
  {
    path: 'private-room',
    component: PrivateRoomComponent
  }
];
