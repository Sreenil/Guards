import { CanDeactivateFn } from '@angular/router';

export const adminGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(localStorage.getItem('admin')=='admin')
    {return true;}
  else
  {
    alert('Need Admin Access')
    return false;}
};
