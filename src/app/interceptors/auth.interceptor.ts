import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
export const IS_TOKEN_REQUIRED = new HttpContextToken<boolean>(()=> false)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token')
  // INVERSR LE BOOLEAN ET CHANGERLE NOM POUR GERER L INVERSE du coup bloquer les route automatiquement
  if(req.context.get(IS_TOKEN_REQUIRED) === true){
      const authReq = req.clone({
        setHeaders: {
          "Authorization" : `Bearer ${token}` 
        }
      })
      return next(authReq);

  }
  return next(req)

};
