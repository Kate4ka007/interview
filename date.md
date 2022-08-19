1. Date(). Объекты JavaScript Date представляют один момент времени в независимом от платформы формате. Date объекты содержат Number который представляет миллисекунды с 1 января 1970 года по всемирному координированному времени (по UTC).

    Максимум ±100 000 000 (сто миллионов) дней относительно 1 января 1970 года по всемирному координированному времени (то есть 20 апреля 271821 г. до н.э. ~ 13 сентября 275760 г. н.э.) может быть представлен стандартом Date объекта (эквивалентно ±8 640 000 000 000 000 миллисекунд).

    * getDate()
    * getDay()
    * getFullYear()
    * getHours()
    * getMilliseconds()
    * getMinutes()
    * getMonth()
    * getSeconds()
    * getTime()
    * ...

    - Date() При вызове в качестве функции возвращает строковое представление текущей даты и времени. Все аргументы игнорируются. Результат такой же, как и при выполнении new Date().toString().

    - new Date(). При вызове в качестве конструктора возвращает новый Date объект.

    2. Статические методы
      - Date.now(). Возвращает числовое значение, соответствующее текущему времени — количество миллисекунд, прошедших с 00:00:00 UTC 1 января 1970 года, без учета дополнительных секунд.
      - Date.parse(). Разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года, 00:00:00 UTC, при этом дополнительные секунды игнорируются.
      - Date.UTC(). Принимает те же параметры, что и самая длинная форма конструктора (т. е. от 2 до 7), и возвращает количество миллисекунд с 1 января 1970 года, 00:00:00 UTC, при этом дополнительные секунды игнорируются.

    3. Методы экземпляра
      - Date.prototype.getDate(). Возвращает день месяца ( 1- 31) для указанной даты по местному времени.
      - Date.prototype.getDay(). Возвращает день недели ( 0- 6) для указанной даты по местному времени.
      - Date.prototype.getFullYear(). Возвращает год (4 цифры для 4-значного года) указанной даты по местному времени.
      - Date.prototype.getHours(). Возвращает час ( 0- 23) указанной даты по местному времени.
      - Date.prototype.getMilliseconds(). Возвращает миллисекунды ( 0- 999) указанной даты по местному времени.
      - Date.prototype.getMinutes(). Возвращает минуты ( 0- 59) указанной даты по местному времени.
      - Date.prototype.getMonth(). Возвращает месяц ( 0- 11) указанной даты по местному времени.
      - Date.prototype.getTime(). Возвращает числовое значение указанной даты как количество миллисекунд с 1 января 1970 года, 00:00:00 UTC. (Отрицательные значения возвращаются для предыдущего времени.)

              const today = new Date()
              const birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes
              const birthday = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
              const birthday = new Date(1995, 11, 17)            // the month is 0-indexed
              const birthday = new Date(1995, 11, 17, 3, 24, 0)
              const birthday = new Date(628021800000)            // passing epoch timestamp

              const date = new Date("2020-05-12T23:50:21.817Z");
              date.toString()               // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
              date.toDateString()           // Tue May 12 2020
              date.toTimeString()           // 18:50:21 GMT-0500 (Central Daylight Time)
              date.toISOString()            // 2020-05-12T23:50:21.817Z
              date.toUTCString()            // Tue, 12 May 2020 23:50:21 GMT
              date.toGMTString()            // Tue, 12 May 2020 23:50:21 GMT
              date.toJSON()                 // 2020-05-12T23:50:21.817Z
              date.toLocaleString()         // 5/12/2020, 6:50:21 PM
              date.toLocaleDateString()     // 5/12/2020
              date.toLocaleTimeString()     // 6:50:21 PM


              const date = new Date();
              const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
              const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];



              let date = new Date(98, 1)         // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
              let date = new Date(22, 1)         // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
              let date = new Date("2/1/22")      // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

              // Legacy method; always interprets two-digit year values as relative to 1900
              date.setYear(98); date.toString()  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
              date.setYear(22); date.toString()  // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)


              // Preferred method; never interprets any value as being a relative offset,
              // but instead uses the year value as-is
              date.setFullYear(98); date.getFullYear()  // 98 (not 1998)
              date.setFullYear(22); date.getFullYear()  // 22 (not 1922, not 2022)