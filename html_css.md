1.  Блочные элементы HTML.

    Исторически HTML-элементы было принято делить на блочные и строчные. 
    Блочные элементы занимают всю ширину своего родителя (контейнера), формально создавая «блок» (отсюда и название). 
    Браузеры обычно отображают блочные элементы с переводом строки до и после элемента. Блочные элементы можно представить в виде стопки коробок. 


        - <div>
        - <p>
        - <ul>
        - <li>
        - <ol>
        - <article>
        - <section>
        - <header>
        - <footer>
        - <form>
        - <main>


2. Cтрочные элементы HTML.

    Cтрочные элементы это те, которые занимают только то пространство, которое ограничено тегами, определяющими строчный элемент (необходимое для отображения их содержимого) и не нарушая потока содержимого (не требующее новой строки после каждого элемента).
    Строчный элемент не начинается с новой строки и в ширину занимает столько места, сколько это необходимо для его отображения.

    Следующие элементы являются строчными:


        - <i>
        - <em>
        - <a>
        - <img>
        - <span>
        - <button>
        - <input>
        - <label>
        - <textarea>


3. Что такое HTML?

    HTML (Hypertext Markup Language) - это код, который используется для структурирования и отображения веб-страницы и её контента. Например, контент может быть структурирован внутри множества параграфов, маркированных списков или с использованием изображений и таблиц данных. 
    HTML не является языком программирования; это язык разметки, и используется, чтобы сообщать вашему браузеру, как отображать веб-страницы, которые вы посещаете. HTML состоит из ряда элементов, которые вы используете, чтобы вкладывать или оборачивать различные части контента, чтобы заставить контент отображаться или действовать определённым образом. Ограждающие теги могут сделать слово или изображение ссылкой на что-то ещё, могут сделать слова курсивом, сделать шрифт больше или меньше и так далее.
    


4. Блочная модель.

    Каждый блок имеет область содержимого, в которой находится текст, дочерние элементы, изображение и т.п., и необязательные окружающие ее padding, border и margin. Размер каждой области определяется соответствующими свойствами и может быть нулевым, или, в случае margin, отрицательным.

      - Ширина — ширина площади содержимого элемента. Для блочных элементов значение по умолчанию равно 100%. У строчных элементов ширина зависит от содержимого.
      - Высота — определяет высоту элемента. Как правило, она зависит от внутреннего содержимого, но при желании можно указать конкретную высоту. Опять же, это работает только с блочными элементами.
      - Границы — границы есть у каждого элемента, даже если вы их не видите. У них может быть разный размер, цвет и оформление.
      - Отступы — они определяют расстояние между границей элемента и его содержимым. Их можно использовать, например, для того, чтобы текст внутри элемента оставался читаемым.
      - Поля — они определяют расстояние между границей элемента и тем, что его окружает.

      ![](block-model.jpg)


5.       