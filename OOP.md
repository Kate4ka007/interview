1. ООП (объектно-ориентированное программирование) — это тип программирования (подход), при котором программа рассматриваеться как набор объектов, взаимодействующих друг с другом. У каждого обьекта есть свои свойства и поведение. Отдельные объекты сгруппированы в классы. 
   ООП используется: 
   - структурировать информацию
   - точно определять взаимодействие элементов
   - повышать управляемость программы
   - лучше понимать написанное
   - эффективно поддерживать готовые программы
   - внедрять изменения без необходимости переписывать код. 
   Структура: 
    - обьекты и классы - для упрощения кода программу разбивают на независимые Блоки - отдельные обьекты. В програмировании обьекты это структуры данных - пользователь, сообщение, кнопка. У каждого обьекта могут быть свои свойства: цвет, содержание, имя пользователя. Чтобы обьединить между собой оьекты с похожимы свойствами, существуют классы. Классы это это шалоны, чертежи для обьектов. Каждый обьект это экземпляр класса. 
        Пример: 
        - программист это класс
        - Иван - это обьект, принадлежащий к классу программист
        - зарплата, обязанности, должность и изученные технологии - свойства у всех обьектов класса, но у каждого обьекта они разные

    - атрибуты и методы. Атрибуты это переменные и характеристики обьекта, цвет поляи и имя пользователя. Методы это фунции которые описаны внутри обьекта или класса. Они позволяют взаимодействовать с ними или другими частями кода.     

   Oсновные принципы ООП:
    - Наследование: Наследование позволяет классам наследовать характеристики другого класса, благодаря наследованию класс получает методы от класса родителя.
    - Инкапсуляция: каждый обьект это структура, данные о котором находятся внутри. внутреннее устройство оьекта закрыто от других. Инкапсуляция скрывает важные данные, сохраняет данные скрытыми для членов класса. Спецификаторы определяют доступ к атрибуту объекта в коде.
    - Полиморфизм:  одинаковые методы объектов позволяет выполнять одну задачу по-разному. Он реализуется через интерфейсы, где мы определяем один интерфейс, который затем реализуется много раз.
    - Абстракция данных: это способ выделить наиболее важные атрибуты и методы, и исключить незначимые. Используя эту функцию, вы можете скрыть важную информацию от внешнего мира и предоставить только необходимые детали. ООП также позволяет связывать данные и код вместе.

2. Зачем использовать ООП?
    - ООП обеспечивает ясность в программировании и, следовательно, простоту в решении сложных задач.
    - Код может быть повторно использован посредством наследования, тем самым уменьшая избыточность
    - Данные и код связаны вместе инкапсуляцией
    - ООП позволяет скрывать данные, поэтому личные данные остаются конфиденциальными
    - Проблемы могут быть разделены на мелкие части, что облегчает их решение
    - Концепция полиморфизма придает программе гибкость, позволяя объектам иметь несколько форм.

3. Объекты -  является основной единицей ООП, это объекты реального мира, состоящие из поведения, атрибутов и свойств, которые определяют объект. Это экземпляр класса, определенного пользователем, и он занимает память, в отличие от самого класса.    

4. Класс — это прототип, который состоит из объектов в разных состояниях и с различным поведением. У него есть несколько методов, которые являются общими для объектов, присутствующих в этом классе.

5. В чем разница между классом и объектом?
Объект:
    - Сущность реального мира
    - Работает как переменная класса
    - Это физическая сущность
    - Занимает место в памяти при создании
    - Должен быть объявлен каждый раз, когда нужен

Класс:
    - Обычно является шаблоном создания объектов
    - Объединяет методы и данные в единую ячейку
    - Это логическая сущность
    - Не занимает место в памяти при создании
    - Объявляется один раз

6. Что такое наследование?
   Наследование — это особенность ООП, которая позволяет получать свойства или поведения от родительского класса к дочернему классу. В объектно-ориентированном программировании наследование позволяет наследовать свойства одного класса другому, такие как методы, переменные, экземпляры и т. Д. Таким образом, вы можете повторно использовать код одного класса, не записывая тот же код в другом классе. Это помогает вам избавиться от избыточного кода, тем самым уменьшая общий размер кода. 

7. Какие бывают виды наследования?
    - Единственное наследование
    - Множественное наследование
    - Многоуровневое наследование
    - Иерархическое наследование
    - Гибридное наследование  

8. В чем разница между множественным и многоуровневым наследованием?
Множественное наследование:
    - Множественное наследование проявляется, когда класс наследуется более чем от одного класса
    Пример: класс «Ребенок» наследуется от классов «Мать» и «Отец»

Многоуровневое наследование:
    - Многоуровневое наследование проявляется, когда класс наследуется от класса, который наследуется от класса…
    В многоуровневом наследовании производный класс наследует базовый класс, и этот производный класс служит базовым классом для других классов. 
    Пример: класс «Спорткар» наследуется от класса «Машина», который наследуется от класса «Автомобиль»    

9. Что такое суперкласс?
    - Суперкласс или базовый класс — это класс, который действует как родительский для некоторого другого класса или классов. Например, класс «Автомобиль» является суперклассом класса «Машина».    

10. Что такое подкласс?
    - Класс, который наследуется от другого класса, называется подклассом. Например, класс «Машина» является подклассом или производным от класса «Автомобиль».   

11. Что такое полиморфизм?
    - Полиморфизм — способность существовать в нескольких формах. Несколько определений могут быть объявлены для одного интерфейса. Например, если у вас есть класс с именем «Автомобиль», у него может быть метод с именем speed, но вы не можете определить его, потому что разные машины имеют разную скорость. Этот метод будет определен в подклассах с разными определениями для разных транспортных средств. 

    Полиморфизм – концепция, согласно которой различные классы могут использоваться с одним и тем же интерфейсом. Каждый из этих классов может иметь свою собственную реализацию интерфейса.

    Статический полиморфизм или статическое связывание – это один из видов полиморфизма, который возникает во время компиляции. Примером полиморфизма во время компиляции является: перегрузка методов. 

    Динамический полиморфизм, динамическое связывание или полиморфизм во время выполнения – это также часть полиморфизма, который в основном реализуется во время выполнения программы. Пример полиморфизма во время выполнения программы: переопределение метода.

12. Что такое перегрузка метода?
    - Перегрузка метода — это особенность ООП, позволяет определить множество методов с одинаковым именем, но с параметрами, которые отличаются от других методов, определенных в том же классе.

    Что такое переопределение метода?
    - Переопределение метода позволяет переопределить метод базового класса. Метод, который был переопределен, будет иметь точное определение, подпись, количество аргументов и тип возвращаемого значения.   

13. Что такое инкапсуляция?
    - Инкапсуляция — это связывание данных и кода, который работает с этими данными. Например, класс. Инкапсуляция также позволяет скрывать данные, так как данные, указанные в одном классе, скрыты от других классов. 
    Инкапсуляция — это контроль доступа к полям и методам объекта.
        publiс — к атрибуту может получить доступ любой желающий
        private — к атрибуту могут обращаться только методы данного класса
        protected — то же, что и private, только доступ получают и наследники класса в том числе  

14. Что такое абстракция данных?
    - Абстракция данных является очень важной особенностью ООП, которая позволяет отображать только важную информацию и скрывать детали реализации. Например, когда вы едете на велосипеде, вы знаете, что если надавить на газ, скорость увеличится, но вы не знаете, как это происходит на самом деле. Это абстракция данных, поскольку детали реализации скрыты от гонщика.      

15. Как добиться абстракции данных?
    Абстрагирование данных может быть достигнуто через:
    - Абстрактный класс - это класс, который состоит из абстрактных методов. Эти методы обычно объявлены, но не определены. Если эти методы должны использоваться в некотором подклассе, они должны быть определены исключительно в подклассе. Экземпляры абстрактного класса не могут быть созданы, потому что у него нет полной реализации. Однако экземпляры подкласса, наследующие абстрактный класс, могут быть созданы.
    - Абстрактный метод       

16. Что такое конструктор?
    - Конструктор — это специальный тип метода, который имеет то же имя, что и класс, и используется для инициализации объектов этого класса. 

17. Что такое сборка мусора (GC)?
    - GC — это реализация автоматического управления памятью. Сборщик мусора освобождает пространство, занимаемое объектами, которых больше нет.    

18. Что из себя представляет обработка исключений?
    - Обработка исключений в объектно-ориентированном программировании является очень важной концепцией, которая используется для управления ошибками. Обработчик исключений позволяет генерировать и перехватывать ошибки и реализует централизованный механизм их устранения.    
    try/catch

19. Что такое блок finally?
    - Блок finally состоит из кода, который используется для выполнения важного кода, такого как закрытие соединения и т.д. Этот блок выполняется при выходе из блока try. Это также гарантирует, что блок finally выполняется даже в случае неожиданного исключения.

20. В чем разница между ошибкой и исключением?
    - Ошибка — проблема, которая не должна появляться в приложении.
    - Исключение — предопределённое состояние, которое может случиться в приложении.

21. Каковы ограничения парадигмы ООП?
    ООП имеет некоторые ограничения. Это:
    - Интенсивный процесс тестирования, который может занять много времени
    - Без надлежащей документации класса вы можете не понять код
    - Из-за большого размера программы она потребляет большой объем памяти    

22. Укажите разницу между классом и объектом.
    В следующей таблице показаны различия между классом и объектом:

    Класс Определяется как логическая концептуальная сущность
          Связывает данные и методы вместе
          Не требует памяти
          Вы можете объявить класс только один раз
          Использует ключевое слово “class” для определения класса

    Объект Определяется как объект реального мира
          Действует как переменная класса
          Занимайте память
          Вы можете создать несколько объектов для определенного класса
          Использует ключевое слово “new” для создания объекта

23.  Каковы ограничения наследования?
     - Использование наследования увеличит время выполнения, поскольку он неоднократно обращается к различным классам
     - Существует тесная связь между дочерним и родительским классом
     - Если вы хотите внести какие-либо изменения в программу, вам необходимо изменить родительский и дочерний классы.
     - Если вы не реализуете наследование правильно, выполнение программы приведет к ошибкам.


24. Extends - Вы можете использовать это ключевое слово для расширения    класса (дочерний класс может расширить свой родительский класс, унаследовав характеристики)
            - Подклассу не нужно расширять все методы суперкласса
            - Вы можете использовать ключевое слово extends для расширения одного суперкласса
            - С помощью расширения интерфейс может расширять более одного интерфейса
            - class Child extends class Parent

Implements - Реализация используется классом для реализации интерфейса
           - Если класс реализует интерфейс, то он должен реализовать все свои методы
           - С интерфейсом класс может реализовать более одного интерфейса
           - Вы не можете использовать реализацию для одного интерфейса для реализации другого интерфейса
           - class XYZ Implements Rose 

25. Каковы различные типы переменных в ООП?
    Ниже приведены три различных типа переменных в ООП:
    - Переменные экземпляра: эти переменные объявляются внутри класса. Но они всегда будут вне блока методов, блока кода и конструкторов. Эти переменные находятся при создании объекта, и вы можете легко получить к ним доступ, вызвав их напрямую.
    - Статические переменные: эти переменные всегда объявляются с использованием статических ключевых слов, и они объявляются вне метода, блока кода и конструктора и хранятся в статической памяти. Для доступа к статическим переменным необходимо использовать class_name.var_name.
    - Локальные переменные: это переменные уровня метода, которые объявляются в конструкторе блока метода, и его видимость ограничена только методом, в котором он объявлен.

26. Что такое сцепление? What is coupling?
      Это относится к тому, когда разные классы зависят друг от друга и содержат информацию. Если один класс имеет подробную информацию о другом классе, то он указывается как сильная связь. Используя модификаторы доступа, вы можете определить видимость классов, методов или любой переменной. Для более слабой связи используются интерфейсы. 

27. Что такое композиция?
    - Вы можете достичь ассоциации с помощью композиции. В отличие от агрегации, она представляет собой сильную объектную связь между зависимым и независимым объектом. В этом сценарии зависимый объект не существует и будет удален, если родительский объект будет удален.

28. Каковы различные способы инициализации объекта?
    Мы можем инициализировать объекты с помощью: 
    - Ссылочная переменная
    - Метод
    - Конструктор 

29. В чем разница между абстракцией и инкапсуляцией?
    - Абстракция позволяет создать общую структуру класса, и реализация интерфейса зависит от разработчиков. С другой стороны, инкапсуляция определяет ограничения объекта и его переменных-членов и методов.

    - Абстракция реализуется с помощью интерфейса и абстрактного класса, в то время как инкапсуляция реализуется с использованием различных модификаторов уровня доступа, а именно public, protected и private, или вообще без модификатора.      

30. В чем разница между классом и структурой?
    - Класс – это определенный пользователем чертеж, на основе которого создаются объекты. Он состоит из методов (набор инструкций), которые выполняются над объектами.

    - Структура – это определенная пользователем коллекция переменных. Структуры также являются различными типами данных. 

31. Что такое модификаторы доступа?
    - Модификаторы доступа или спецификаторы доступа – это ключевые слова в объектно-ориентированных языках. Они помогают установить доступность классов, методов и других членов.

32. Что такое гибридное наследование?
    Сочетание множественного и многоуровневого наследования известно как гибридное наследование.  

33. Что такое иерархическое наследование?
    Когда один базовый класс имеет более одного подкласса. Например, класс фруктов может иметь в качестве подклассов «яблоко», «манго» и т. д.                      

34. Для чего используется Finalize?
    - Finalize используется для освобождения неуправляемых ресурсов, а также для очистки перед сборкой мусора (GC). Он выполняет задачи управления памятью.

35. Что такое блок try/catch?
    Блок try/catch помогает обрабатывать исключения. Блок try объясняет набор утверждений, в которых может возникнуть ошибка. Блок catch в основном перехватывает исключение.    

36. Что такое блок finally?
    Блок finally выполняется, когда блок try завершается, а также выполняется даже в случае возникновения неожиданного исключения. Блок finally обычно содержит какую–то важную часть программы.

37. Можете ли вы вызвать метод базового класса, не создавая его экземпляр?
    Да, вы можете вызывать базовый класс без его инстанцирования, но есть некоторые условия, которые необходимо соблюдать:
    Метод должен быть статическим.
    Базовый класс наследуется каким-либо другим подклассом.    

    

















    