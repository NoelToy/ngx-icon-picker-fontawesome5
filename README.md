# Angular Icon Picker With Font Awesome 5


* ==> **Library still in work in progress**
* Largely inspired by [ngx-icon-picker](https://github.com/tech-advantage/ngx-icon-picker)


Angular IconPicker Directive/Component with no dependencies required.

This is an Icon Picker Directive/Component for Angular 2+.

### Installing and usage

    npm install https://github.com/NoelToy/ngx-icon-picker-fontawesome5/tarball/master --save
    
##### Load the module for your app:

```typescript
import { IconPickerModule } from 'ngx-icon-picker';

@NgModule({
  ...
  imports: [
    ...
    IconPickerModule
  ]
})
```

##### Use it in your HTML template:

```html
<input [iconPicker]="icon" (iconPickerSelect)="onIconPickerSelect(newIcon)"/>
```

Available inputs and output :

```typescript
[iconPicker]                // The icon to select in the grid.

[ipWidth]                    // Use this option to set icon picker dialog width (default: '230px').
[ipHeight]                   // Use this option to force icon picker dialog height (default: 'auto').
[ipMaxHeight]                // Use this option to force icon picker dialog max-height (default: '200px').

[ipIconPack]                 // Icon pack (Font Awesome / Bootstrap Glyphicon /Font AWesome5): 'fa', 'bs', 'fa5','all' (default: 'all').
[ipFallbackIcon]             // Is used when the icon is undefined (default: 'fa fa-user-plus').
[ipPosition]                 // Dialog position: 'right', 'left', 'top', 'bottom' (default: 'right').
[ipPlaceHolder]              // Search input placeholder (default: 'Search icon...').

(iconPickerSelect)           // On selected icon value.

```

    
### Installing from a brand new @angular/cli project

Version of @angular/cli used is V1.7.4.

* Generate a new project (here we use LESS preprocessor) : `ng new myproject --style less`
* `cd myproject`
* Update *package.json* with : 
  ```
      "bootstrap": "3.3.7",
      "font-awesome": "4.7.0",
  ```
  or with npm command :
  ```
  npm install --save bootstrap@3.3.7
  npm install --save font-awesome@4.7.0
  ```
* Install dependancies : `yarn install` (or `npm install`).
* Update *styles.less* with :
```less
@import '~bootstrap/less/bootstrap.less';
@import '~font-awesome/less/font-awesome.less';
```
* Import **IconPickerModule** in `app.module.ts` (also **CommonModule** and **ReactiveFormsModule**): 
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { IconPickerModule } from 'ngx-icon-picker/dist/index';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    IconPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* Update the template `app.component.html` : 
```html
<div class="container">
  <div [formGroup]="myFormGroup">
    <label>Icon</label>
    <div class="input-group">
        <span class="input-group-addon"><i [ngClass]="iconCss.value"></i></span>
        <input type="text" name="iconCss" class="form-control"
               formControlName="iconCss"
               [iconPicker]="icon"
               [ipPosition]="'bottom'"
               [ipWidth]="'250px'"
               [ipPlaceHolder]="'Choose an icon'"
               [ipFallbackIcon]="fallbackIcon"
               (iconPickerSelect)="onIconPickerSelect($event)"/>
      </div>
  </div>
</div>
```

* Update the component `app.component.ts` : 
```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.less']
})
export class AppComponent implements OnInit {
  myFormGroup: FormGroup;
  iconCss = new FormControl();
  fallbackIcon = 'fa fa-user';
  icon: string;

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({iconCss: this.iconCss});
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }
}
```
* Start your project with `yarn start` (or `npm start`) and go to _localhost:4200_