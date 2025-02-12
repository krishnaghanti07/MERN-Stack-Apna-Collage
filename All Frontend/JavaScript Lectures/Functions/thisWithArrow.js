
const students = {

    name : "Aman" ,
    marks : 95 ,

    prop : this , // Global-Scope (Window Object) ('this' for object is 'Global-Scope')

    getName : function () {
        console.log(this.name); // Function-Scope (Calling Object) ('this' for function is 'Calling-Object')
    } ,

    getMarks : () => {
        console.log(this) ; // Parent's-Scope (Window Object) ('this' for Arrow-function is 'Parent's Scope') (Lexical Scope)
        console.log(this.marks) ;
    },

    getInfo1 : function() {
        setTimeout(() => {
            console.log(this); // Actual Object   (Parent's Scope)  (Lexical Object)
        } , 2000);
    },

    getInfo2 : function() {
        setTimeout(function () {
            console.log(this); // Window Object   (Function Scope)  (calling Object)
        } , 2000);
    }
}