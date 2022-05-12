import {Router, Resolver} from '@vaadin/router';

const router = new Router(document.querySelector('.root'));
router.setRoutes([
  {path: '/welcome', component: 'home-page'},
  {path: '/chatpage', component: 'chat-page'}
]);