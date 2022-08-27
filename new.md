1. Temporal Dead Zone
TDZ: термин для описания состояния, когда переменные недоступны. Они находятся в области видимости, но не объявлены.
Переменные существуют в TDZ с момента их привязки (когда переменная привязывается к области видимости, внутри которой она находится) до момента ее объявления (когда для этой переменной в памяти резервируется имя).

{
 	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
 	// This is the temporal dead zone for the age variable!
	let age = 25; // Whew, we got there! No more TDZ
	console.log(age);
}
Если обратиться к переменной age раньше, чем она была объявлена, это вызвало бы ошибку ReferenceError. Из-за TDZ.
Но var этого не сделает. var просто инициализируется по умолчанию в undefined, в отличие от другого объявления.


2. This — это ключевое слово, используемое в JavaScript, значение которого зависят от контекста в котором оно применяется.
Контекст this меняется в зависимости от его использования.
Когда мы пользуемся ключевым словом this, мы обращаемся с его помощью к некоему объекту. 

Если вы попытаетесь обратиться к ключевому слову this в глобальной области видимости, оно будет привязано к глобальному контексту, то есть — к объекту window в браузере.

Когда this используется внутри объекта, это ключевое слово ссылается на сам объект.Предположим, вы создали объект dog с методами и обратились в одном из его методов к this. Когда this используется внутри этого метода, это ключевое слово олицетворяет объект dog. Ключевое слово this относиться к тому объекту, в методе которого оно используется.

Когда обычная функция находится в глобальной области видимости, то ключевое слово this, использованное в ней, будет привязано к объекту window.
Однако если функция выполняется в строгом режиме, то в this будет записано undefined, так как в этом режиме запрещены привязки по умолчанию. 

Стрелочные функции ведут себя не так, как обычные функции. В стрелочных функциях this относится к глобальному контексту (к объекту window).

      var objArrow = {
          hello: () => this  // window
      };


3. Objects Built-in methods
   - Object.keys(obj) - Returns an array of the keys that the object contains.
   - Object.values(obj) - Returns an array of the values of each of the elements in the object.
   - Object.entries(obj) - Returns an array containing nested arrays for each key-value pair. The first element in each nested array is the key, and the second is the value. 
     Eg:

          obj = { a: 1, b: "b", c: [3,4,5] } 
          Object.entries(obj)
          >> [["a",1], ["b","b"], ["c",[3,4,5]]


   - Object.assign() - Copies a source objects properties to a target object       

   - Object.fromEntries(arr) - Creates a new object from an array of key-value pairs passed as the argument. Returns the new object.   


4. Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).

    - События мыши:

        click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
        contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
        mouseover / mouseout – когда мышь наводится на / покидает элемент.
        mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
        mousemove – при движении мыши.

    - События на элементах управления:

            submit – пользователь отправил форму <form>.
            focus – пользователь фокусируется на элементе, например нажимает на <input>.


    - Клавиатурные события:

        keydown и keyup – когда пользователь нажимает / отпускает клавишу.

    - События документа:

        DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

    - CSS events:

        transitionend – когда CSS-анимация завершена.




  1. User Interface events
        These occur as the result of any interaction with the browser window rather than the HTML page. In these events, we attach the event listener to the window object, not the document object. The various UI events are as follows.

        load
        The load event fires when the webpage finishes loading. It can also fire on nodes of elements like images, scripts, or objects.


        unload
        This event fires before the users leave the page, i.e., the webpage is unloading. Page unloading usually happens because a new page has been requested.

        error
        This event fires when the browser encounters a JavaScript error or an asset that doesn’t exist.

        resize
        It fires when we resize the browser window. But browsers repeatedly fire this event, so avoid using this event to trigger complicated code; it might make the page less responsive.

        scroll
        This event fires when the user scrolls up/down on the browser window. It can relate to the entire page or a specific element on the page.



  2. Focus and blur events
These events fire when the HTML elements you can interact with gain/ lose focus. They are most commonly used in forms and especially helpful when you want to do the following tasks:

To show tips or feedback to users as they interact with an element within a form. The tips are usually shown in the elements other than the one the user is interacting with.
To trigger form validation as a user moves from one control to the next without waiting to submit the form.
The different focus and blur events are as follows:

    focus
    This event fires, for a specific DOM node, when an element gains focus.

    blur
    This fires, for a specific DOM node, when an element loses focus.

    focusin
    This event is the same as the focus event. But Firefox doesn’t yet support the focusin event.

    focusout
    This is the same event as the blur event. This is a new event type in JavaScript, thus not supported in Firefox right now.


    The focus and blur events use the capture approach, while the focusin and focusout events use both capture and bubble approach of the event flow.



  3. Mouse events
  These events fire when the mouse moves or the user clicks a button. All the elements of the page support these events and use the bubbling approach. These actions work differently on touchscreen devices. Preventing the default behavior of mouse events can cause unexpected results. The various mouse events of JavaScript are as follows:

  - click
  This event fires when the user clicks on the primary mouse button (usually the left button). This event also fires if the user presses the Enter key on the keyboard when an element has focus.

    Touch-screen: A tap on the screen acts like a single left-click.

  - dblclick
  This event fires when the user clicks the primary mouse button, in quick succession, twice.

  Touch-screen: A double-tap on the screen acts like a double left-click.

    Accessibility: You can add the above two events to any element, but it’s better to apply it only on the items that are usually clicked, or it will not be accessible through keyboard navigation. All the mouse events discussed below cannot be triggered by the keyboard.

  - mousedown
  It fires when the user clicks down on any mouse button.

  Touch-screen: You can use the touchstart event.

  - Mouseup
  It fires when the user releases a mouse button.

  Touch-screen: You can use the touchend event.

  We have separate mousedown and mouseup events to add drag-and-drop functionality or controls in game development. Don’t forget a click event is the combination of mousedown and mouseup events.

  - mouseover
  It fires when the user moves the cursor, which was outside an element before, inside the element. We can say that it fires when we move the cursor over the element.

  - mouseout
  It fires when the user moves the cursor, which was inside an element before, outside the element. We can say that it fires when the cursor moves off the element.

  The mouseover and mouseout events usually change the appearance of graphics on our webpage. A prefered alternative to this is to use the CSS: hover pseudo-class.

  - mousemove
  It fires when the user moves the cursor around the element. This event is frequently triggered.

This is the right time to learn about JavaScripts Loops. MUST CHECK!!

4. Keyboard events
These events fire on any kind of device when a user interacts with a keyboard.

- input
This event fires when the value of an <input> or a <textarea> changes (doesn’t fire for deleting in IE9). You can use keydown as a fallback in older browsers.

- keydown
It fires when the user presses any key in the keyboard. If the user holds down the key, this event fires repeatedly.

- keypress
It fires when the user presses a key that results in printing a character on the screen. This event fires repeatedly if the user holds down the key. This event will not fire for the enter, tab, or arrow keys; the keydown event would.

- keyup
The keyup event fires when the user releases a key on the keyboard.

The keydown and keypress events fire before a character appears on the screen, the keyup fires after it shows.

To know the key pressed when you use the keydown and keypress events, the event object has a keyCode property. This property, instead of returning the letter for that key, returns the ASCII code of the lowercase for that key.

5. Form events
These events are common while using forms on a webpage. In particular, we see the submit event mostly in form of validation (checking form values). As described in our tutorial; Features of JavaScript, if the users miss any required information or enter incorrect input, validation before sending the data to the server is faster. The list below explains the different form of events available to the user.

- submit

This event fires on the node representing the <form> element when a user submits a form.

- change
It fires when the status of various form elements change. This is a better option than using the click event because clicking is not the only way users interact with the form.

- input
The input event is very common with the <input> and the <textarea> elements.

We often use the focus and blur events with forms, but they are also available in conjunction with other elements like links.

6. Mutation events and observers
Whenever the structure of the DOM tree changes, it triggers a mutation event. The change in the tree may be due to the addition or removal of a DOM node through your script. But these have an alternative that will replace them: mutation observers. The following are the numerous mutation events in JavaScript.

- DOMNodeInserted
It fires when the script inserts a new node in the DOM tree using appendChild(), replaceChild(), insertBefore(), etc.

- DOMNodeRemoved
This event fires when the script removes an existing node from the tree using removeChild(), replaceChild(), etc.

- DOMSubtreeModified
It fires when the structure of the DOM tree changes i.e. the above two events occur.

- DOMNodeInsertedIntoDocument
This event fires when the script inserts a node in the DOM tree as the descendant of another node already in the document.

- DOMNodeRemovedFromDocument
This event fires when the script removes a node from the DOM tree as the descendant of another node already in the document.

The problem with the mutation events is that lots of changes to your page can make your page feel slow or unresponsive. These can also trigger other event listeners, modifying DOM and leading to more mutation events firing. This is the reason for introducing mutation observers to the script.

Mutation observers wait until the script finishes its current task before reacting, then reports the changes in a batch (not one at a time). This reduces the number of events that fire when you change the DOM tree through your script. You can also specify which changes in the DOM you want them to react to.

7. HTML5 events

These are the page-level events included in the versions of the HTML5 specialization. New events support more recent devices like phones and tablets. They respond to events such as gestures and movements. You will understand them better after you master the above concepts, thus they are not discussed for now. Work with the events below for now and when you are a better developer, you can search for other events available. The three HTML5 events we will learn are as follows:

- DOMContentLoaded
This event triggers when the DOM tree forms i.e. the script is loading. Scripts start to run before all the resources like images, CSS, and JavaScript loads. You can attach this event either to the window or the document objects.

- hashchange
It fires when the URL hash changes without refreshing the entire window. Hashes (#) link specific parts (known as anchors) within a page. It works on the window object; the event object contains both the oldURL and the newURL properties holding the URLs before and after the hashchange.

- beforeunload
This event fires on the window object just before the page unloads. This event should only be helpful for the user, not encouraging them to stay on the page. You can add a dialog box to your event, showing a message alerting the users like their changes are not saved.

8. CSS events
These events trigger when the script encounters a CSS element. As CSS is a crucial part of web development, the developers decided to add these events to js to make working with CSS easier. Some of the most common CSS events are as follows:

- transitionend
This event fires when a CSS transition ends in a program. It is useful to notify the script of the end of transition so that it can take further action.

- animationstart
These events fire when CSS animation starts in the program.

- animationiteration
This event occurs when any CSS animation repeats itself. With this event, we can determine the number of times an animation iterates in the script.

- animationend
It fires when the CSS animation comes to an end in the program. This is useful when we want to act just after the animation process finishes.      




9. Property flags & descriptors (student is able to set property via Object. defineProperty)

Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

      let user = {};

      Object.defineProperty(user, "name", {
        value: "John"
      });

      let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

      alert( JSON.stringify(descriptor, null, 2 ) );
      /*
      {
        "value": "John",
        "writable": false,
        "enumerable": false,
        "configurable": false
      }
      */


      let user = {
        name: "John",
        toString() {
          return this.name;
        }
      };

      Object.defineProperty(user, "toString", {
        enumerable: false
      });

      // Now our toString disappears:
      for (let key in user) alert(key); // name



      * Object.preventExtensions(obj): Forbids the addition of new properties to the object.
   
      * Object.seal(obj): Forbids adding/removing of properties. Sets configurable: false for all existing properties.

      * Object.freeze(obj): Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.





10.  Create iterable objects, Symbol.iterator usage

          let range = {
            from: 1,
            to: 5
          };

          range[simbol.iterator] = function() {
            return {
              current: this.from,
              last: this.to,

              next(){
                if(this.current<= this.last) {
                  return {done: false, value: this.current++}

                } else {
                  return {done: true}
                }
              }
            }
          }

          for (let num of range) {
            alert(num); // 1, then 2, 3, 4, 5
          }

11. loop through Object keys

        const courses = {
            java: 10,

            javascript: 55,

            nodejs: 5,

            php: 15
        };

        const keys = Object.keys(courses);        

        keys.forEach((key) => {
            console.log(`${key}: ${courses[key]}`);
        });

        // java: 10

        // javascript: 55

        // nodejs: 5

        // php: 15

12.  how to flatten nested array


           let array = [[[0], [1]], [[2], [3]], [[4], [5]]];
           let flattend = array.join(",").split(",");
           console.log(flattend);

          function flatten(ary, ret = []) {
              for (const entry of ary) {
                  if (Array.isArray(entry) {
                      flatten(entry, ret);
                  } else {
                      ret.push(entry);
                  }
              }
              return ret;
          }
          console.log(flatten([[[0], [1]], [[2], [3]], [[4], [5]]]));


          function flatten(ary, ret = []) {
              return ary.reduce((ret, entry) => {
                  if (Array.isArray(entry)) {
                      flatten(entry, ret);
                  } else {
                      ret.push(entry);
                  }
                  return ret;
              }, ret);
          }
          console.log(flatten([[[0], [1]], [[2], [3]], [[4], [5]]]));


          function flatten(a) {
              return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
          }


13. filter Array elements

const colours = ['green', 'black', 'dark-orange', 'light-yellow', 'azure'];

const result = colours.filter(colour => colour.length > 6);

console.log(result); // --> [ 'dark-orange', 'light-yellow' ]


14.  to custom sorting for Array
...

15. Know global scope and functional scope

 -The global scope is the scope that contains, and is visible in, all other scopes

...
16. Know variables visibility areas

The four scopes are:
    Global - visible by everything.
    Function - visible within a function (and its sub-functions and blocks)
    Block - visible within a block (and its sub-blocks)
    Module - visible within a module.


17. Understand nested scopes and able work with them

In JavaScript, scopes are created by code blocks, functions, modules. 
While const and let variables are scoped by code blocks, functions or modules, var variables are scoped only by functions or modules.
Scopes can be nested. Inside an inner scope you can access the variables of an outer scope

18.  Difference between parameters passing by value and by reference. 
     Passing by reference means the called functions' parameter will be the same as the callers' passed argument (not the value, but the identity - the variable itself). Pass by value means the called functions' parameter will be a copy of the callers' passed argument.

19. how to handle dynamic amount of Function parameters
    const variableArguments = (...args) => {
      console.log(...args);
    }; 

20.  Function default parameters

        function multiply(a, b) {
          b = (typeof b !== 'undefined') ?  b : 1
          return a * b
        }

        function multiply(a, b = 1) {
          return a * b
        }


21. ECMA script modules


22. Know how to use spread operator for Function arguments

...
23. Be able to compare arguments and rest parameters

...
24. Spread operator for Array

        // Merge Array
        [...array1, ...array2]

        // Clone Array
        [...array]

        // String → Array
        [...'string']

        // Set  → Array
        [...new Set([1,2,3])]

        // Node List → Array
        [...nodeList]

        // Arguments → Array
        [...arguments]

        array = [1, 2, 3, 4, 5];
        var minimum = Math.min(...array);
        var maximum = Math.max(...array);

...
25. Understand and able to use spread operator for Array concatenation Destructuring assignment

...
26. Be able to discover destructuring assignment concept

        const HIGH_TEMPERATURES = {
          yesterday: 75,
          today: 77,
          tomorrow: 80
        };

        //ES6 assignment syntax
        const {today, tomorrow} = HIGH_TEMPERATURES;

        let [a, b, c] = "abc";

        let [one, two, three] = new Set([1, 2, 3]);

        let user = {};
        [user.name, user.surname] = "John Smith".split(' ');

        let user = {
          name: "John",
          age: 30
        };
        // loop over keys-and-values
        for (let [key, value] of Object.entries(user)) {
          alert(`${key}:${value}`); // name:John, then age:30
        }

        let guest = "Jane";
        let admin = "Pete";
        // Let's swap the values: make guest=Pete, admin=Jane
        [guest, admin] = [admin, guest];
        alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)


        let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];


        // default values
        let [name = "Guest", surname = "Anonymous"] = ["Julius"];


        let options = {
          title: "Menu",
          width: 100,
          height: 200
        };
        let {title, width, height} = options;


        // { sourceProperty: targetVariable }
        let {width: w, height: h, title} = options;

        // width -> w
        // height -> h
        // title -> title

        let options = {
          title: "Menu",
          height: 200,
          width: 100
        };

        // title = property named title
        // rest = object with the rest of properties
        let {title, ...rest} = options;
        // now title="Menu", rest={height: 200, width: 100}

27. Understand variables and Function arguments destructuring assignment

        const myFoods = {a: 'apple', b: 'banana', c: 'carrot', d: 'donut'}
        const { a, b, c, d} = myFoods
        const {a = `apple didn't exist`, b, c, d} = myFoods


28. String templates

        const classes = `header ${ isLargeScreen() ? '' :
          `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;


29. Know how for..of loop works (optional)        

    use with String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables

    const iterable = [10, 20, 30];

    for (const value of iterable) {
      console.log(value);
    }

    for (let value of iterable) {
      value += 1;
      console.log(value);
    }

30. this scope

...

31. Reference Type & losing this

...


32. Understand difference between function and method

...


33. Understand how this works, realize this possible issues

...


34. Manage this scope

...


35. Be able to replace this scope

...


36. Be able to use call and apply Function built-in methods  

...


37. Immediately invoked functional expression (IIFE) (optional)

...


38. Know IIFE pattern (optional)

        (function IIFE(msg, times) {
            for (var i = 1; i <= times; i++) {
                console.log(msg);
            }
        }("Hello!", 5));

        (function() {
            alert("I am an IIFE!");
        }());

        // Variation 2
        (function() {
            alert("I am an IIFE, too!");
        })();


39. Callback (Function as argument)

A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
A function that accepts other functions as arguments is called a higher-order function,
which contains the logic for when the callback function gets executed.

        function createQuote(quote, callback){ 
          var myQuote = "Like I always say, " + quote;
          callback(myQuote); // 2
        }

        function logQuote(quote){
          console.log(quote);
        }

        createQuote("eat your vegetables!", logQuote); // 1


40. Know callback pattern

...


41. Understand callback limitations (callback hell) (optional)

        setTimeout(() => {
            console.log("Hello");
            setTimeout(() => {
                console.log("Hey");
                setTimeout(() => {
                    console.log("Namaste");
                    setTimeout(() => {
                        console.log("Hi");
                        setTimeout(() => {
                            console.log("Bonjour");
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);


42. Binding, binding one function twice

The bind() method creates a new function where this keyword refers to the parameter in the parenthesis in the above case geeks.
This way the bind() method enables calling a function with a specified this value.

      var geeks1 = {
      name : "ABC",
      article: "C++"
      }
      //object geeks2
        var geeks2 = {
      name : "CDE",
      article: "JAVA"
      }
          
        //object geeks3
        var geeks3 = {
      name : "IJK",
      article: "C#"
      }
  
      function printVal(){
        document.write(this.name+" contributes about "+this.article+"<br>");
        }
              
        var printFunc2= printVal.bind(geeks1);
        //using bind() 
        // bind() takes the object "geeks1" as parameter//
        printFunc2();
          
        var printFunc3= printVal.bind(geeks2);
        printFunc3();
          
        var printFunc4= printVal.bind(geeks3);
        printFunc4();

        ABC contributes about C++
        CDE contributes about JAVA
        IJK contributes about C#


43. Know how to bind this scope to function

- function.bind(thisArg[, arg1[, arg2[, ...]]])


        let user = {
          firstName: "John"
        };

        function func() {
          alert(this.firstName);
        }

        let funcUser = func.bind(user);
        funcUser(); // John


        let user = {
          firstName: "John",
          say(phrase) {
            alert(`${phrase}, ${this.firstName}!`);
          }
        };

        let say = user.say.bind(user);

        say("Hello"); // Hello, John! ("Hello" argument is passed to say)
        say("Bye"); // Bye, John! ("Bye" is passed to say)


        function mul(a, b) {
          return a * b;
        }

        let triple = mul.bind(null, 3);

        alert( triple(3) ); // = mul(3, 3) = 9
        alert( triple(4) ); // = mul(3, 4) = 12
        alert( triple(5) ); // = mul(3, 5) = 15

Arrow Functions


44. Carrying and partial functions

- Curry: lets you call a function, splitting it in multiple calls, providing one argument per-call.

      const curriedSum = math => eng => geo => math + eng + geo;

      const curry = (a) => {
        return (b) => {
          return (c) => {
            return a + b + c
          }
        }
      }

- Partial: lets you call a function, splitting it in multiple calls, providing multiple arguments per-call

      const partialSum = math => (eng, geo) => math + eng + geo;

      const part = (a) => {
        return (b, c) => {
          return a + b + c
        }
      }


      function addition(x, y) {
        return x + y;
      }
      const plus5 = addition.bind(null, 5)
      plus5(10) // output -> 15


45. Fetch (with usage)

- Fetch API предоставляет интерфейс JavaScript для доступа и управления частями конвейера HTTP, такими как запросы и ответы.
  Он также предоставляет глобальный fetch() метод, обеспечивающий простой и логичный способ асинхронного получения ресурсов по сети.

  * Промис, возвращенный из fetch() , не будет отклоняться при статусе ошибки HTTP, даже если ответ представляет собой HTTP 404 или 500.
   Вместо этого, как только сервер ответит заголовками, промис будет разрешен нормально (со ok свойством ответа, установленным в false, если ответ не находится в диапазоне 200–299), и он будет отклонен только в случае сбоя сети или если что-то помешало выполнению запроса.
  * Если не fetch() вызывается с credentials параметром, установленным в include, fetch():
      не будет отправлять файлы cookie в запросах с перекрестным происхождением
      не будет устанавливать какие-либо файлы cookie, отправленные обратно в ответах из разных источников


Здесь мы извлекаем файл JSON по сети и выводим его на консоль. Самое простое использование fetch() принимает один аргумент — путь к ресурсу, который вы хотите получить — и не возвращает тело ответа JSON напрямую, а вместо этого возвращает обещание, которое разрешается с помощью Response объекта.
Объект Response, в свою очередь, не содержит непосредственно фактического тела ответа JSON, а вместо этого является представлением всего ответа HTTP.
Итак, чтобы извлечь содержимое тела JSON из Response объекта, мы используем json() метод, который возвращает второе обещание, которое разрешается с результатом синтаксического анализа текста тела ответа как JSON.

        fetch('http://example.com/movies.json')
          .then((response) => response.json())
          .then((data) => console.log(data));

Метод fetch()может дополнительно принимать второй параметр, init объект, который позволяет вам управлять рядом различных настроек    


        async function postData(url = '', data = {}) {
        
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://example.com/answer', { answer: 42 })
          .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });


  Обратите внимание, что mode: "no-cors"разрешен только ограниченный набор заголовков в запросе:
    - Accept
    - Accept-Language
    - Content-Language
    - Content-Typeсо значением application/x-www-form-urlencoded, multipart/form-data, илиtext/plain


46. XMLHTTPRequest (concept) (optional)

XMLHttpRequest(XHR) объекты используются для взаимодействия с серверами. Вы можете получить данные из URL-адреса без полного обновления страницы. Это позволяет веб-странице обновлять только часть страницы, не нарушая того, что делает пользователь.

XMLHttpRequestшироко используется в программировании AJAX .

XMLHttpRequest()
Конструктор инициализирует файл XMLHttpRequest. Он должен быть вызван до вызова любого другого метода.

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open('GET', 'example?param1=true&param2=2');
        xhttp.send();


47. WebSocket (concept) (optional)

Протокол WebSocket («веб-сокет») обеспечивает возможность обмена данными между браузером и сервером через постоянное соединение.
Данные передаются по нему в обоих направлениях в виде «пакетов», без разрыва соединения и дополнительных HTTP-запросов.

WebSocket особенно хорош для сервисов, которые нуждаются в постоянном обмене данными, например онлайн игры, торговые площадки, работающие в реальном времени, и т.д.

WebSocket — это коммуникационный протокол для постоянного двунаправленного
полнодуплексного TCP - соединения между веб-браузером пользователя и сервером .
Соединение WebSocket инициируется путем отправки запроса квитирования WebSocket из HTTP - соединения браузера на сервер для обновления соединения.
Наряду с заголовком запроса на обновление запрос подтверждения включает 64-битный заголовок Sec-WebSocket-Key. Сервер отвечает хэшем ключа в заголовке Sec-Websocket-Auth. Этот обмен заголовками предотвращает повторную отправку кэширующим прокси -сервером предыдущих обменов WebSocket.


let socket = new WebSocket("ws://javascript.info");

Как только объект WebSocket создан, мы должны слушать его события. Их всего 4:
  - open – соединение установлено,
  - message – получены данные,
  - error – ошибка,
  - close – соединение закрыто.
…А если мы хотим отправить что-нибудь, то вызов socket.send(data) сделает это.


      let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

      socket.onopen = function(e) {
        alert("[open] Соединение установлено");
        alert("Отправляем данные на сервер");
        socket.send("Меня зовут Джон");
      };

      socket.onmessage = function(event) {
        alert(`[message] Данные получены с сервера: ${event.data}`);
      };

      socket.onclose = function(event) {
        if (event.wasClean) {
          alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
          // например, сервер убил процесс или сеть недоступна
          // обычно в этом случае event.code 1006
          alert('[close] Соединение прервано');
        }
      };

      socket.onerror = function(error) {
        alert(`[error] ${error.message}`);
      };


48. Web components, shadow DOM (concept) (optional)

Веб-компоненты — это набор различных технологий, позволяющих создавать многократно используемые настраиваемые элементы — с их функциональностью, изолированной от остального кода — и использовать их в своих веб-приложениях.

- Пользовательские элементы : набор API-интерфейсов JavaScript, которые позволяют вам определять пользовательские элементы и их поведение, которые затем можно использовать по желанию в вашем пользовательском интерфейсе.
- Shadow DOM : набор API-интерфейсов JavaScript для прикрепления инкапсулированного «теневого» дерева DOM к элементу, который отображается отдельно от основного документа DOM, и управления соответствующей функциональностью. Таким образом, вы можете сохранить свойства элемента в тайне, чтобы их можно было использовать в сценариях и стилях, не опасаясь столкновения с другими частями документа.

Теневой DOM («Shadow DOM») используется для инкапсуляции. Благодаря ему в компоненте есть собственное «теневое» DOM-дерево, к которому нельзя просто так обратиться из главного документа, у него могут быть изолированные CSS-правила и т.д.
Встроенный теневой DOM
Например, <input type="range">:
#shadow-root

Каждый DOM-элемент может иметь 2 типа поддеревьев DOM:

1. Light tree – обычное, «светлое», DOM-поддерево, состоящее из HTML-потомков. Все поддеревья, о которых мы говорили в предыдущих главах, были «light».
2. Shadow tree – скрытое, «теневое», DOM-поддерево, не отражённое в HTML, скрытое от посторонних глаз.
Теневое дерево можно использовать в пользовательских элементах (Custom Elements), чтобы спрятать внутренности компонента и применить к ним локальные стили.


        <script>
        customElements.define('show-hello', class extends HTMLElement {
          connectedCallback() {
            const shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = `<p>
              Hello, ${this.getAttribute('name')}
            </p>`;
          }
        });
        </script>

        <show-hello name="John"></show-hello>

Есть два ограничения:
- Для каждого элемента мы можем создать только один shadow root.
- В качестве elem может быть использован пользовательский элемент (Custom Element), либо один из следующих элементов: «article», «aside», «blockquote», «body», «div», «footer», «h1…h6», «header», «main», «nav», «p», «section» или «span». Остальные, например, <img>, не могут содержать теневое дерево.        

- HTML-шаблоны . Элементы <template>и <slot>позволяют создавать шаблоны разметки, которые не отображаются на отображаемой странице. Затем их можно повторно использовать несколько раз в качестве основы структуры пользовательского элемента.


49. Timezones (optional)

        const date = new Date();

        console.log(date.getTimezoneOffset());

  Количество минут, возвращаемое функцией, getTimezoneOffset() является положительным, если местный часовой пояс отстает от UTC, и отрицательным, если местный часовой пояс опережает UTC. 


50. Internationalization js (Intl) (optional)

      Объект Intlпредставляет собой пространство имен для API интернационализации ECMAScript, которое обеспечивает
      сравнение строк с учетом языка, форматирование чисел, а также форматирование даты и времени. Объект Intlпредоставляет доступ к нескольким конструкторам, а также к функциям, общим для конструкторов интернационализации и других функций, зависящих от языка.

      Основные объекты
      1. Intl.Collator
      Умеет правильно сравнивать и сортировать строки.
      2. Intl.DateTimeFormat
      Умеет форматировать дату и время в соответствии с нужным языком.
      3. Intl.NumberFormat
      Умеет форматировать числа в соответствии с нужным языком.

      Локаль – первый и самый важный аргумент всех методов, связанных с интернационализацией.
      Локаль описывается строкой из трёх компонентов, которые разделяются дефисом:

      - Код языка.
      - Код способа записи.
      - Код страны.

      На практике не всегда указаны три, обычно меньше:
      ru – русский язык, без уточнений.
      en-GB – английский язык, используемый в Англии (GB).
      en-US – английский язык, используемый в США (US).
      zh-Hans-CN – китайский язык (zh), записываемый упрощённой иероглифической письменностью (Hans), используемый в Китае.

      localeMatcher – вспомогательная настройка, которую тоже можно везде указать, она определяет способ подбора локали, если желаемая недоступна.

      


51. Context (lexical environment)
Лексическое окружение — это определенная структура, которая используется для определения связи Идентификаторов (имен) с конкретными переменными и функциями на основе вложенности (цепочки) лексических областей видимости.
Переменные начинают своё существование тогда, когда выполнение программы достигает их области видимости. И тогда этим переменным необходимо место для хранения, чтобы впоследствии к ним можно было обратиться даже из вложенных областей видимости. В спецификации JavaScript, структура данных, которая обеспечивает такое пространство для хранения переменных в памяти, а также предоставляет механизм их поиска и возможность получить к ним доступа из внутренних областей, называется лексическим окружением.
Оно сопоставляет идентификаторы (имена) с переменными и функциями уже не только в рамках одной области видимости, а для целых цепочек вложенных друг в друга областей. Его структура очень похожа на структуру объектов JavaScript.
Каждая функция, которая является в свою очередь отдельной областью видимости, на этапе инициализации, запоминает свою родительскую область видимости, где она содержится. Это происходит за счет того, что у каждой функции есть внутреннее свойство [[Environment]] которое сохраняет в себе ссылку на внешнюю область видимости (это свойство недоступно нам из самой программы и используется JavaScript-движком).

        // global scope

        var x = 10;

        function foo() {
        // foo scope
        // [[Environment]] = global scope

        var y = 20;
        }

Обычно Лексическое Окружение ассоциируется с определёнными синтаксическими структурами кода JavaScript, такими как объявление функций или блоками инструкций. Каждый раз когда обрабатывается такой код, например вызывается функция, то для этой новой области видимости создаётся своё Лексическое окружение. Для этого окружения формируется:

1. Запись Окружения environment record, которая содержит в себе связи идентификаторов с переменными, которые созданы в области видимости этого Лексического окружения. Также она содержит и другую необходимую информацию, например значение ключевого слова this, о котором будет рассказано в другой части.
2. Ссылка outer, которая указывает на внешнее/родительское окружение для этой области видимости. Именно в это поле попадает значение внутреннего свойства [[Environment]], которое хранит в себе ссылку на родительскую область видимости. И поэтому всегда существует цепочка Лексических окружений. Она начинается с текущего (выполняющегося в данный момент) Лексического окружения, продолжается внешними окружениями, и заканчивается глобальным Лексическим окружением, у которого поле outer равно null.    


Контекст выполнения (execution context) в JavaScript используется для того, чтобы отслеживать ход выполнения кода. Именно с его помощью определяется доступное окружение на текущем этапе выполнения программы. А также контекст выполнения содержит в себе дополнительные параметры, которые формируются самостоятельно JavaScript-движком при обработке вашего кода.

Одним из таких динамически устанавливаемых параметров, к которому можно напрямую обратиться из кода и получить доступ к определенному набору данных в рамках текущего контекста выполнения, является ключевое слово this. Основным назначением ключевого слова this является переиспользование связанного с ним кода в рамках различных окружений. Значение, на которое ссылается ключевое слово this в том или ином месте программы определяется самим местом и способом создания текущего контекста выполнения. 

Первым контекстом выполнения, который создаётся при запуске JavaScript скрипта является глобальный контекст выполнения (Global Execution Context). В рамках этого контекста будет обрабатываться весь глобальный код программы. Соответственно текущим Лексическим окружением, связанным с глобальным контекстом выполнения, является глобальное глобальное окружение Global Environment.

В рамках глобального контекста JavaScript-движок создает глобальный объект (global object) c определенными внутренними свойствами, который будет доступен в любой точке программы. Глобальный объект global object может разнится в зависимости от среды выполнения кода. В рамках браузера глобальным объектом будет объект window. Но если мы рассмотрим глобальный объект в среде NodeJS, то им уже будет объект global. Ключевое слово this в рамках глобального контекста выполнения, будет ссылаться именно на этот глобальный объект.

Также в JavaScript есть такая особенность, что объявленные в глобальной области видимости функции и var переменные помещаются в свойства глобального объекта window


Еще одной особенностью является то, что если в коде присвоить значение какой-либо необъявленной ранее переменной и, если этот код выполняется не в строгом режиме “use strict”, то JavaScript не только не отобразит ошибку, о несуществующей переменной, но и создаст её для нас в глобальном объекте

То при каждом новом вызове функции создаётся свой контекст выполнения, при этом текущий контекст выполнения (тот, откуда была вызвана функция) приостанавливается.

Чтобы хранить и отслеживать контексты выполнения они формируются в стек контекстов выполнения (call stack) — список контекстов, организованных по принципу «последним пришёл — первым вышел».

Из-за формирования записи окружения и выделения памяти под переменные до выполнения кода к ним можно обращаться до их объявления в программе. Такое поведения называется “всплытие” или hoisting. На самом же деле, объявления переменных остаются в коде на том же месте, где вы их объявили, только память под них выделяется с самого начала, еще до выполнения кода.

если обратиться к переменным let и const до их объявления, то возникнет ошибка ReferenceError, в отличие от переменной var, значение которой в таком случае отобразится как undefined.
Такая ошибка ReferenceError из-за попытки получить или установить значение let или const переменной до её объявления называется ошибкой “Временной мертвой зоны” (Temporal Dead Zone (TDZ) error). 
В некоторых источниках можно встретить утверждение, что переменные let и const вообще не всплывают, на самом деле это не так. Они также попадают в запись окружения, как и var переменные при создании контекста. Только к ним нельзя получить доступ для чтения или записи до тех пор, пока не будет выполнена строка с объявлением этой переменной на этапе выполнения контекста. Механизм временной мертвой зоны базируется именно на контексте выполнения. В следующем примере видно, что временная мертвая зона заканчивается именно тогда, когда само выполнение кода доберется до объявления переменной. 




    Значение this в контексте функции
    Если говорить о this в рамках контекста выполнения функции, то здесь важно понимать, что объект, на который будет ссылаться ключевое слово this зависит от того, где и при каких условиях эта функция была вызвана. Например, что можно сказать о значении this для этой функции:

        function main() {
        console.log(this);
        }


    Здесь функция просто определена и еще не была вызвана, поэтому о значении this в рамках этой функции пока ничего нельзя сказать. Оно будет установлено во время вызова этой функции.

    1. Простой вызов функции
    В случае вызова этой функции не в строгом режиме, значением this будет являться глобальный объект Window.

            function main() {
            console.log(this);
            }
            main(); // вызов функции

            > Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

    А в строгом режиме use strict, значением this будет undefined

            function main() {
            "use strict";
            console.log(this);
            }
            main(); // вызов функции

            > undefined

    2. Вызов функции как метода объекта
    Если функция вызывается как метод объекта, то ключевое слово this в рамках этой функции будет указывать на сам этот объект, методом которого она была вызвана.

            let obj = {
            property: 10,
            method: function() {
              console.log(this);
              console.log(this.property);
            }
            };
            obj.method();

            // this будет ссылаться на сам объект из переменной obj
            > {property: 10, method: ƒ}
            > 10
            
    Здесь снова стоит заметить, что значение this не зависит от того, как и где функция была определена, а только от того, каким образом она была вызвана. Например, если определить функцию отдельно от объекта, а потом просто добавить её как метод в этот объект, то результат её вызова останется прежним.

    let obj = {
    property: 10
    };

    function func() {
    console.log(this);
    console.log(this.property);
    }
    obj.method = func; // добавили функцию в объект
    obj.method();

    // this всё так же будет ссылаться на сам объект из переменной obj, методом которого была вызвана функция
    > {property: 10, method: ƒ}
    > 10
    Другими словами значением this в данном случае является ближайший объект перед точкой. Может быть так, что объекты будут вложены друг в друга, например

    function func() {
    console.log(this);
    console.log(this.property);
    }

    let obj = {
    property: 10,
    innerObj: {
        property:5,
        method: func
      }
    };
    obj.innerObj.method();

    > {property: 5, method: ƒ}
    > 5
    В данном случае this ссылается на вложенный объект innerObj, так как именно его методом была вызвана функция. По другому вызов можно записать так

    function func() {
    console.log(this);
    console.log(this.property);
    }

    let obj = {
    property: 10,
    innerObj: {
        property:5,
        method: func
      }
    };

    let target = obj.innerObj;
    target.method();

    > {property: 5, method: ƒ}
    > 5
    Поэтому тот факт, что innerObj является свойством другого объекта не имеет значения, важно лишь то, что функция вызывается именно в отношении этого объекта.

    Явная передача контекста в функцию
    Так же есть возможность при вызове функции явно передать ей значение this с помощью специальных выстроенных методов call, apply.

    function add(c, d) {
    return this.a + this.b + c + d;
    }

    var obj = { a: 1, b: 3 };

    // Здесь происходит вызов функции add с использованием встроенного метода call
    // Первым параметром передаётся объект, на который будет ссылаться ключевое слово this в рамках функции add
    // Следующими параметрами передаются значения аргументов функции (c и d соответственно)
    let result1 = add.call(obj, 5, 7); // 1 + 3 + 5 + 7
    console.log(result1); // 16

    // Здесь происходит вызов функции add с использованием встроенного метода apply
    // Первым параметром передаётся объект, на который будет ссылаться ключевое слово this в рамках функции add
    // Следующим параметром передаётся значения аргументов функции в виде массива ( [c, d] )
    let result2 = add.apply(obj, [10, 20]); // 1 + 3 + 10 + 20
    console.log(result2); // 34
    Первым параметром в них задаётся значение this, а последующими необязательными параметрами - аргументы, с которыми будет вызываться функция. Причем для метода call аргументы передаются списком через запятую fun.call(thisArg[, arg1[, arg2[, ...]]]). А для метода apply они передаются при помощи одного массива fun.apply(thisArg[, argsArray]).

    Необходимо отметить,что если методам call и apply, передается значение с this, которое не является при этом объектом, то будет предпринята попытка преобразовать это значение в объект. Если переданное значение является примитивным типом, таким как 7 или 'строка', оно будет преобразовано в свой объектный аналог с использованием родственного конструктора, так примитив 7 преобразовывается в объект через new Number(7), а строка 'строка' в объект через new String('строка'), и т.д.

    function func() {
      console.log(typeof this);
    }

    func.call(7); // примитив 7 будет преобразован в объектный аналог [object Number]

    > object
    Так же еще есть метод bind, который тоже позволяет явно передать контекст в функцию, но в отличие от методов call и apply не вызывает сразу функцию, а возвращает её обёртку. Об это методе будет рассказано в следующих частях курса.

    Другие варианты установки this
    Помимо описанных случаев есть еще больше вариантов и определенных условий, когда значение this устанавливается по другим правилам. Например, в рамках конструкторов, стрелочных функций, обработчиков событий DOM и др. Но эти темы будут описаны в следующих частях курса, поэтому и специфика изменения значения this будет затрагиваться в соответствующих разделах.




52. Understand function creation context (lexical environment)

...


53. Be able to explain difference between scope and context

...


54. Inner/outer lexical environment

...


55. Understand lexical environment traversing mechanism

...


56. Understand connection between function and lexical environment

...


57. new keyword

...


58. Understand how new keyword works

...


59. Function constructor

...


60. Know function constructor concept

...


61. Able to create constructor functions

...


62. Public, private, static members

...


63. Know how to create public members

...


64. Know how to create private members

...


65. Know how to create static members

...


66. Understand OOP emulation patterns and conventions

...

