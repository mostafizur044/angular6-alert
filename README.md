# Algular 6 Alert/Toster Service

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Use:


First import `AlertModule` in your module, afterthat import `AlertService` at your component. Call `alert` to show alert. You have to pass an object as aurgument.

Ex: `this.service.alert({  
      classname: 'success' / 'info' / 'warning' / 'danger' / ''  
      message: 'any message'  
      autoRemove: true/false, [auto remove alert (optional)]  
      timer: number, [in ms default 3000ms]  
      options: {  [it is optional]  
        position: fixed, absolute, relative [default: fixed]  
        top: number [default top: 0px]  
        bottom: number  
        left: true/false [default center]  
        right: true/false  
      }  
    })`  
    
selector Tag: `<alert-popup></alert-popup>
