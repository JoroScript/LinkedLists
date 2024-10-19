function LinkedList(){
    let list= {
            head: null
        }
    
    function contains(value){
        let result=list.head;
        while(result!==null){
            if(result.value==value){
                return true;
            }
            console.log(result.value);
            result=result.nextNode;
        }
        return false;
    }
    function find(value){
        let result=list.head;
        let count=0;
        while(result!==null){
            if(result.value==value){
                return count;
            }
            result=result.nextNode;
            count++;
        }
        return null;
    }
    function at(index){
        let result=list.head;
        for(let i=0; i<index; i++){
            result=result.nextNode;
        }
        return result;
    }
   function tail(){
    return findLastNode(list.head);
   }
    
    function head(){
        return list.head;
    }
    function toString(){
        let result=list.head;
        let print=''
        while(result!==null){
            print+=`(${result.value}) -> `
            result=result.nextNode;
        }
        print+=`${result}`;
        return print;
    }
    function size(){
        let result=list.head;
        let count=0;
        while(result!==null){
            count++;
            result=result.nextNode;
        }
        return count;
    }
    function insertAt(value,index){
        let result=list.head;
        for(let i=0; i<index-1; i++){
            result=result.nextNode;
        }
        let next=result.nextNode;
        result.nextNode=Nodee(value);
        result.nextNode.nextNode=next;

    }
    function removeAt(index){
        let result=list.head;
        for(let i=0; i<index-1; i++){
            result=result.nextNode;
        }

        result.nextNode=result.nextNode.nextNode

    }
    function pop(){
        let result=list.head;
        while(result.nextNode.nextNode!==null){
                        result=result.nextNode;
        }
        let popped=result.nextNode.value;
        result.nextNode=null;
        return popped;
    }

    function append(value){

    if(list.head==null){
        list.head=Nodee(value);
    }
    
    else{
        let lastNode=findLastNode(list.head)
        lastNode.nextNode=Nodee(value);     
    }

    }

    function prepend(value){
    let firstNode=list.head;
    let newFirst=Nodee(value);
    list.head=newFirst;
    newFirst.nextNode=firstNode;
    }

    return {list,append,prepend,size,head,tail,at,pop,contains,find,toString,insertAt,removeAt}

  


}

function findLastNode(list) //tail
{
if(list.nextNode==null){
    return list;
}
return findLastNode(list.nextNode);
}

let linkedList1 = LinkedList();
linkedList1.append(5);
linkedList1.append(6);
linkedList1.append(7);
linkedList1.prepend(4);
linkedList1.show();
console.log(linkedList1.head());
console.log(linkedList1.tail());
console.log(linkedList1.size());
console.log(linkedList1);
console.log(linkedList1.at(4));
console.log('------------')
console.log(linkedList1.tail());
console.log(linkedList1.pop());
console.log(linkedList1.tail());
console.log(linkedList1.contains(4));
console.log(linkedList1.find(4));
console.log(linkedList1.toString());
linkedList1.insertAt('labadai',1)
console.log(linkedList1.at(1));
console.log(linkedList1.toString());
linkedList1.removeAt(2);
console.log(linkedList1.toString());

function Nodee(value=null){
    return {
        value: value,
        nextNode: null,
    }
}
// linkedList1.show();

// class LinkedList{

//     constructor(){
//         return {
//             head: "",
//             value: null,
//             next: null,
//         }
//     }

//     show: console.log()
// }