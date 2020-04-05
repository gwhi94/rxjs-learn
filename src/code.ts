import { Observable } from 'rxjs';

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hello')
        observer.next('World')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch(err) {
        observer.error(err)
    }
}); 

//arrow function in place of traditional function()
//observer read values from observable
var observer = observable.subscribe(
    (x:any) => addItem(x),
    (err:any) => addItem('error'),
    () => addItem('completed')    
);

setTimeout(() => {
    observer.unsubscribe()
}, 6000)



function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}