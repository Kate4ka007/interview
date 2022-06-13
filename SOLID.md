SOLID - это набор принципов, следуя которым, программный код будет более чистым и гибким. Т.е. это не какае-то библиотека или технология, это просто правила, которым должен следовать любой адекватные разработчик, не зависимо на чем он программирует.

S - Single-responsibility principle - принцип единой ответственности
O - Open-closed principle - принцип открытости/закрытости.
L - Liskov substitution principle - принцип подстановки Барбары Лисков
I - Interface segregation principle - принцип разделения интерфейса
D - Dependency Inversion Principle - принцип инверсии зависимостей


Single Responsibility Principle (Принцип единственной ответственности)
  Класс должен быть ответственен лишь за что-то одно. Если класс отвечает за решение нескольких задач, его подсистемы, реализующие решение этих задач, оказываются связанными друг с другом. Изменения в одной такой подсистеме ведут к изменениям в другой. Этот принцип применим не только к классам, но и к компонентам программного обеспечения в более широком смысле.

  Что-бы проверить, соответствует ли ваш класс этому принципу, задайте себе вопрос: Что может случится, из-за чего мне потребуется изменить данный класс?. Если ответов несколько, значит необходимо разделить класс на несколько.

  Советую обратить внимание на следующие приемы, которые помогают соблюдать данный принцип:
  - Разработка через тестирование (TDD)
  - Паттерн «Выделение класса»(Extract Class)
  - Паттерн «Фасад»(Facade)
  - Паттерн Паттерн «Прокси»(Proxy)
  - Паттерн «DAO»


Open-Closed Principle (Принцип открытости-закрытости)
  Программные сущности (классы, модули, функции) должны быть открыты для расширения, но не для модификации. Одним словом, изменять код базового класса строго настрого запрещено!
  В ряде случаев рекомендуется избегать наследования и применять композицию, что-бы избежать сложных структур данных и сделать код еще более независимым.


Liskov Substitution Principle (Принцип подстановки Барбары Лисков)
  Поведение методов в дочернем классе должно следовать принципам базового класса, а не изменять их. То есть, дочерний класс переопределяя методы или переменные, не должен менять заложенную логику базового класса. Необходимо, чтобы подклассы могли бы служить заменой для своих суперклассов


Interface Segregation Principle (Принцип разделения интерфейса)
  Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента. Клиенты не должны зависеть от интерфейсов, которые они не используют. Лучше создавать много отдельных узкоспециализированных интерфейсов, чем один, который включает в себя много функций. Это позволит сделать архитектуру более гибкой, и позволит использовать интерфейсы по отдельности. Этот принцип похож на самый первый, принцип единой ответственности.


Dependency Inversion Principle (Принцип инверсии зависимостей)
Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.