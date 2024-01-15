// Work 1
// // Это простая программа, которая создает на странице HTML-элементы (контейнер, заголовок и кнопку) с помощью встроенных функций. При клике по кнопке происходит изменение ночной темы на дневную (цвет фона и шрифта меняется), а сама кнопка удаляется.

// // Проблема в том, что в коде допущены ошибки. Исправьте его так, что бы программа запускалась, создавала HTML-элементы и кнопка выполняла свою задачу при клике.

// // Создание контейнера
// let container = document.createElement("div")
// container.classList.add("container")

// // Создание заголовка
// let title = document.createElement("h1")
//     title.classList.add('main-title')
//     title.textContent='Добро пожаловать на сайт!'

// // Создание кнопки
// let button = document.createElement("button")
//     button.classList.add("btn")
//     button.textContent='"Дневная тема"'

// // Добавление обработчика клика по кнопке
// button.onclick = function () {
//   document.body.classList.toggle("day-theme")

//   button.classList.toggle('text')
// }

// // Добавление элементов
// container.append(title, button)
// document.body.append(container)

// Work 2

// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем



// let index = 0

// let title = document.createElement('h1')
// title.textContent = 'Что я узнал в видео'
// document.body.append(title)

// let list = document.createElement('ul')
// document.body.append(list)

// let li = document.createElement('li')



// function liText (index,text){
//     let li = document.createElement('li')
//     index = index++         
//     li.textContent=`${index}) ${text}`
//     list.append(li)
// }

// liText(1,'Как создавать HTML - элементы')
// liText(2,'Узнал, как добавлять текст и HTML-код в элемент')
// liText(3,'Как добавлять и удалять классы')
// liText(4,'Узнал, как вложить один элемент в другой')
// liText(5,'Узнал, что такое событие и обработчик события')
// liText(6,' Как назначить обработчик события')

// home3

// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов. 
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.

// let divCon = document.createElement('div')
// divCon.classList.add('container')
// document.body.append(divCon)
// let title = document.createElement('h1')
// title.textContent='Достижения в изучении Javascript'
// title.classList.add('main-title')
// let lists = document.createElement('ul')
// lists.classList.add('list')
// divCon.append(title,lists)
// let index = 0 // Счетчик
// function listItem (i,text){
//     let li = document.createElement('li')
//     li.classList.add('list__item')
//     let span = document.createElement('span')
//     span.classList.add('list__index')
//     let p = document.createElement('p')
//     p.classList.add('list__desc')
//     lists.append(li)
//     li.append(span,p)
//     span.textContent = `${i}`
//     p.textContent = `${text}`
// }
// index++
// listItem(index,' Знаю, что такое вывод и ввод информации')
// index++
// listItem(index,' Знаю о способах вывода информации')
// index++
// listItem(index,' Знаю, что такое числа, строки, и переменные')
// index++
// listItem(index,'  Умею создавать функции и пользоваться ими')
// index++
// listItem(index,'  Учусь создавать HTML - элементы с помощью встроенных функций')

//  home 4
// В этой программе реализовано создание списка пользователей со следующей механикой: при клике на кнопку "Добавить пользователя", появляются окна ввода prompt для ввода имени и потом возраста. После ввода данных в списке ul создается новый элемент пользователя li.
// Заказчик этого приложения выразил желание изменить способ ввода имени и возраста. Вместо окон prompt для ввода данных он хочет видеть два текстовых поля input. После нажатия на кнопку "Добавить пользователя" имя и возраст берутся именно из этих текстовых полей. Далее создается элемент списка li и добавляется в ul. Текстовые полня input очищаются после добавления кода.
// Функция, возвращающая элемент списка с именем и возрастом пользователя 
// function getAge(age){
//   return 2024 - age
// }
// function getUserItem(name, age) {
//   let userItem = document.createElement("li")
//   userItem.textContent = `${name}, год рождения: ${getAge(age)}, возраст: ${age}`
//   return userItem
// }
// // Создание заголовка
// let title = document.createElement("h1")
// title.textContent = "Список пользователей"
// // Создание списка
// let list = document.createElement("ul")
// let inpName = document.createElement('input')
// let inpAge = document.createElement('input')

// inpName.type='text'
// inpName.placeholder='Введите имя пользователя'
// inpAge.type='number'
// inpAge.placeholder='Введите возраст пользователя'

// // Создание кнопки добавления
// let addNewBtn = document.createElement("button")
// addNewBtn.textContent = "Добавить пользователя"

// // Создание обработчика события для кнопки добавления
// addNewBtn.onclick = function () {
//   let name = inpName.value
//   let age = inpAge.value

//   let newItem = getUserItem(name, age)
//   list.append(newItem)
// }
// // Добавление элементов в body
// document.body.append(title,inpName,inpAge, addNewBtn, list,)

// home5 
// Это приложение для создания списка студентов. Сейчас в программе есть возможность добавлять имя и возраст студентов в таблицу. Необходимо добавить возможность вводить дополнительное значение - рост студента. И в результате при клике на кнопку  "Добавить студента" в таблице появится строка студента со следующими колонками: имя, возраст и рост.

// Функция, возвращающая новый input
// function getInput(placeholder, type = "text") {
//   let input = document.createElement("input")
//   input.type = type
//   input.placeholder = placeholder
//   return input
// }

// // Создание заголовка
// let title = document.createElement("h1")
// title.textContent = "Список студентов"

// // Создание таблицы
// let table = document.createElement("table") // Таблица

// let thead = document.createElement("thead") // Шапка таблицы
// let theadTr = document.createElement("tr")
// let nameTh = document.createElement("th")
// let ageTh = document.createElement("th")
// let actionTh = document.createElement("th")
// let heightTh = document.createElement("th")


// nameTh.textContent = "Имя"
// ageTh.textContent = "Возраст"
// heightTh.textContent = "Рост"
// actionTh.textContent = "Действие"


// theadTr.append(nameTh, ageTh,heightTh, actionTh)
// thead.append(theadTr)

// let tbody = document.createElement("tbody") // Тело таблицы

// // Добавление шапки и тела таблицы в таблицу
// table.append(thead, tbody)

// // Функция, возвращающая строку таблицы с именем возрастом и ростом студента
// function getStudentTr(name, age, height) {
//   let studentTr = document.createElement("tr")
//   let nameTd = document.createElement("td")
//   let ageTd = document.createElement("td")
//   let heightTd =document.createElement('td')
//   let removeTd = document.createElement("td")

//   let removeBtn = document.createElement("button")
//   removeBtn.textContent = "Удалить"

//   removeBtn.onclick = function () {
//     studentTr.remove() // Удаляет studentTr

//     // Команда remove() удаляет HTML-элемент. Сначала указывается переменная с элементом, которую мы хотим удалить. После точки прописывается команда удаления remove() - элемент.remove()
//   }

//   nameTd.textContent = name
//   ageTd.textContent = age
//   heightTd.textContent=height
//   removeTd.append(removeBtn)

//   studentTr.append(nameTd, ageTd,heightTd, removeTd)
//   return studentTr
// }

// // Блок добавления
// let addBox = document.createElement("div")
// addBox.classList.add("add-box")

// // Создание текстового поля для имени
// let nameInp = getInput("Имя")

// // Создание текстового поля для имени
// let ageInp = getInput("Возраст", "number")

// let heightInp = getInput('рост','number')



// // Создание кнопки добавления
// let addNewBtn = document.createElement("button")
// addNewBtn.textContent = "Добавить студента"

// // Создание обработчика события для кнопки добавления
// addNewBtn.onclick = function () {
//   let name = nameInp.value
//   let age = Number(ageInp.value)
//   let height = Number(heightInp.value)

//   // Создаем новый tr студента для таблицы
//   let newStudentTr = getStudentTr(name, age,height)
//   tbody.append(newStudentTr)

//   // Очищаем текстовые поля
//   nameInp.value = ""
//   ageInp.value = ""
//   heightInp.value=''
// }

// // Добавление элементов в addBox
// addBox.append(nameInp, ageInp,heightInp, addNewBtn)

// // Добавление элементов в body
// document.body.append(title, addBox, table)

// home 6
// Добро пожаловать в Хогвартс. Эта программа поможет распределить прибывших учеников - первокурсников по факультетам. Механика простая. Вводим в текстовое поле имя ученика, нажимаем кнопку соответствующего факультета и ученик попадает в нужный список (факультет).
// Это удобное приложение, в котором есть возможность удалить ученика из списка и изменить имя. Просто магия, согласны? Внимательно изучите код и запустите приложение в браузере.
// Но в данной программе есть небольшие логически ошибки. По какой-то неизвестной причине ученики не добавляются в список "Когтевран" и "Пуффендуй". Попробуйте проверить, и вы заметите, что есть проблема с добавлением учеников именно в эти факультеты. 
// Так же есть проблема с изменением имени ученика. При клике на кнопку изменить, появляется prompt для изменения имени. При изменении имени оно (имя) почему-то удаляется в элементе списка. Думаю это следует исправить.
// Да, кода стало больше и в нем больше связей между функциями, но пришло время учиться работать и с такими программами. Развивать логическое мышление и строить связи. Если вам понадобится больше времени, то это нормально. Не сдавайтесь. 
// Функция, возвращающая новую кнопку
// function getButton(text, className) {
//   let button = document.createElement("button")
//   button.textContent = text
//   button.classList.add(className)
//   return button
// }

// // Функция, возвращающая новый input
// function getInput(placeholder, type, className) {
//   let input = document.createElement("input")
//   input.type = type
//   input.placeholder = placeholder
//   input.classList.add(className)
//   return input
// }

// // Функция, возвращающая элемент списка ученика
// function getNewStudent(name) {
//   let studentItem = document.createElement("li")
//   studentItem.classList.add("student-item")

//   let nameSpan = document.createElement("span")
//   nameSpan.classList.add("student-item__name")
//   nameSpan.textContent = name

//   let actionsBox = document.createElement("div")
//   actionsBox.classList.add("student-item__actions")

//   let editBtn = getButton("Изменить", "student-item__btn")
//   editBtn.onclick = function () {
//     let newName = prompt("Введите новое имя", nameSpan.textContent)
//     nameSpan.textContent = `${newName}`
//   }

//   let removeBtn = getButton("Удалить", "student-item__btn")
//   removeBtn.onclick = function () {
//     studentItem.remove() // Удаление studentItem

//     // Команда remove() удаляет HTML-элемент. Сначала указывается переменная с элементом, которую мы хотим удалить. После точки прописывается команда удаления remove() - элемент.remove()
//   }

//   actionsBox.append(editBtn, removeBtn) // Добавляем кнопки в actionsBox
//   studentItem.append(nameSpan, actionsBox)  // Добавляем элементы в studentItem

//   return studentItem
// }

// // Блок для добавления ученика школы
// let addBox = document.createElement("div")
// addBox.classList.add("add-box")

// // Текстовое поле для имени
// let newStudentNameInp = getInput("Имя ученика", "text", "add-box__input") // Функция возвращает input

// // Кнопки добавления в факультеты
// let grifAddBtn = getButton("Добавить в Гриффиндор", "add-box__btn") // Кнопка button
// let slizAddBtn = getButton("в Слизерин", "add-box__btn") // Кнопка button
// let kogAddBtn = getButton("в Когтевран", "add-box__btn") // Кнопка button
// let pufAddBtn = getButton("в Пуффендуй", "add-box__btn") // Кнопка button

// addBox.append(newStudentNameInp, grifAddBtn, slizAddBtn, kogAddBtn, pufAddBtn)

// // ------------------------
// // Блок факультетов
// let facultyBox = document.createElement("div")
// facultyBox.classList.add("faculty-box")

// // Список учеников Гриффиндор
// let grifList = document.createElement("ul")
// grifList.classList.add("list", "list_grif")

// // Список учеников Слизерин
// let slizList = document.createElement("ul")
// slizList.classList.add("list", "list_sliz")

// // Список учеников Когтевран
// let kogList = document.createElement("ul")
// kogList.classList.add("list", "list_kog")

// // Список учеников Пуффендуй
// let pufList = document.createElement("ul")
// pufList.classList.add("list", "list_puf")


// facultyBox.append(grifList, slizList, kogList, pufList)

// // Добавляем обработчики событий клика кнопкам добавления
// grifAddBtn.onclick = function () {
//   let name = newStudentNameInp.value

//   let newStudent = getNewStudent(name) // Функция возвращает li студента
//   grifList.append(newStudent)

//   newStudentNameInp.value = ""
// }

// slizAddBtn.onclick = function () {
//   let name = newStudentNameInp.value

//   let newStudent = getNewStudent(name) // Функция возвращает li студента
//   slizList.append(newStudent)

//   newStudentNameInp.value = ""
// }

// kogAddBtn.onclick = function () {
//   let name = newStudentNameInp.value

//   let newStudent = getNewStudent(name) // Функция возвращает li студента
//   kogList.append(newStudent)

//   newStudentNameInp.value = ""
// }

// pufAddBtn.onclick = function () {
//   let name = newStudentNameInp.value

//   let newStudent = getNewStudent(name)
//   pufList.append(newStudent)
//   newStudentNameInp.value = ""
// }

// // Добавление элементов в body
// document.body.append(addBox, facultyBox)

// home 7 
let input = document.createElement('input')
input.placeholder = 'Задача'
input.type='text'

input.classList.add('mainInput') //класс 

let flex = document.createElement('div')
flex.classList.add('flex')//класс 

let btn =  document.createElement('button')
btn.textContent = 'Создать задачу '
btn.classList.add('btn')//класс 

let mainDiv = document.createElement('div')
mainDiv.classList.add('con')//класс 



btn.onclick=function(){
  if(input.value===''){
    btn.classList.toggle('error')
    
    function close(){
      btn.classList.remove('error')
    }
    setTimeout(()=>{
    close()
    },3000)

    block.remove()
  }
  let block = document.createElement('div')
  block.classList.add('box')
  let getValue = input.value

  let p = document.createElement('p')
  p.classList.add('p')
  p.textContent=`${getValue}`

  let btn1 =  document.createElement('button')
  btn1.textContent = 'Выполнено'
  btn1.classList.add('btn1','btnGreen')//класс 

  let btn2 =  document.createElement('button')
  btn2.textContent = 'Изменить'
  btn2.classList.add('btn1')//класс 

  let btn3 =  document.createElement('button')
  btn3.textContent = 'Удалить'
  btn3.classList.add('btn1')//класс 

  btn1.onclick=function(){
    block.classList.toggle('active')
    btn1.classList.toggle('active')
    btn2.classList.toggle('active')
    p.classList.toggle('active')    
    let icon = document.createElement('i')
    let mainIcon = document.createElement('div')
    let iconF = document.createElement('div')
    iconF.classList.add('green')
    iconF.textContent='Выполнено'
    mainIcon.classList.add('item')
    icon.classList.add ('fa-solid','fa-check')
    icon.classList.toggle('active')
      console.log(icon)
      mainIcon.append(icon)
    block.append(mainIcon)
    mainIcon.append(iconF)
  }

  btn2.onclick=function(){
  let newName = prompt('Введите новую задачу')
  getValue.textContent=`${newName}`
  p.textContent=''
  p.append(newName)
  }
  btn3.onclick = function(){
    block.remove()
  }
  input.value = ""
  mainDiv.append(block)
  block.append(p,btn1,btn2,btn3)
}

flex.append(input,btn)
document.body.append(flex,mainDiv)
