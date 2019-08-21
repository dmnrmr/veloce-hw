# Create simple template parser
Please complete the following programming exercise.

### Instalation
To keep thing simple we use The Angular CLI (command-line interface tool)
https://angular.io/cli 

```sh
npm install -g @angular/cli
```

and then in project directory use

```sh
npm install
```

```sh
ng serve
```

In your browser, open http://localhost:4200/

## Task 1

You have been provided with an sample HTML in textarea.
Your task is to:

1) Detect html tags with placeholders prefixed with "#placeholder_"
```html
<div #placeholder_first_name></div>
```
2) When user presses "Parse template" button, form with input fields parsed from that HTML should be displayed
For example if template contains:
```html
<div #placeholder_first_name></div>
<div #placeholder_last_name></div>
```

- Form with two input fields should be displayed:
> first_name
> last_name

3) When user fills the form with values and presses "Display result" button, html code with injected form values should be displayed:

For example if users fills form with 

> first_name: Alex
> last_name: Jones

The result displayed should be:

```html
<div #placeholder_first_name><ng-container>Alex</ng-container></div>
<div #placeholder_last_name><ng-container>Jones</ng-container></div>
```


#### Note
User can change HTML and add more div's with placeholders like:

```html
<div #placeholder_first_name></div>
<div #placeholder_last_name></div>
...
<div #placeholder_age></div>
<div #placeholder_address></div>
```

so the form should be dynamic and support a many field as many placeholders you have in your HTML!

### Task1 Expected Result:

[![N|Solid](https://i.ibb.co/b6hRhB8/task1.png)](https://nodesource.com/products/nsolid)

## Task 2 
This task is optional

When user navigates to page 'Task 2' by clicking on the link 'Task2' 
Task2 angular component should use result HTML from the Task 1 as the component template.

For example result:

```html
<div #placeholder_first_name><ng-container>Alex</ng-container></div>
<div #placeholder_last_name><ng-container>Jones</ng-container></div>
```

Should ne rendered and displayed as

>Alex
>Jones 



