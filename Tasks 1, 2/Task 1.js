/* Задание 1.

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

 XML:

<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
JS-объект:

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
} */

const parser = new DOMParser();

const xmlString = `
<list>
<student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>,
    <age>35</age>
    <prof>teacher</prof>
   </student>;
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelectorAll("student");

const result = {
  list: []
};

listNode.forEach(student => {

  const nameNode = student.querySelector("name");
  const firstName = student.querySelector("first");
  const secondName = student.querySelector("second");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");
  const lang = nameNode.getAttribute("lang");               

    result.list.push({
                 name: firstName.textContent + ' ' + secondName.textContent, 
                 age: Number (ageNode.textContent), 
                 prof: profNode.textContent, 
                 lang: lang,
});
});                


console.log('result', result)