import { BehaviorSubject } from 'rxjs';


var subject =  new BehaviorSubject('First')

subject.subscribe(
    data => addItem('Observable 1:' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

subject.next("1st sent")
subject.next('Observer 2 subscribing !')

var observer2 = subject.subscribe(
     data => addItem('Observer 2:' + data)
)

subject.next("2nd sent");
subject.next("3rd sent");

observer2.unsubscribe();

subject.next("final sent");

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}