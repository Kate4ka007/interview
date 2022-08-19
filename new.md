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

          obj = { a: 1, b: "b", c: [3,4,5] }Object.entries(obj)
          >> [["a",1], ["b","b"], ["c",[3,4,5]]

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