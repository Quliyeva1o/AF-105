// let text = "javascript";

// console.log(text.length);
// console.log(text.charAt(text.length - 1));
// console.log(text.charCodeAt(0));
// console.log(text.at(0));
// console.log(text.slice(-6));
// console.log(text[0]);

// console.log('a'=='A');

// let input = window.prompt("enter language name: ");
// let langName = 'iPhone 14 pro max';
// let check = langName.toLowerCase().trim().includes(input.toLowerCase().trim());
// console.log(langName);
// switch (langName) {
//   case "javascript":
//     window.alert("js");
//     break;
//   case "python":
//     window.alert("python");
//     break;
//   case "java":
//     window.alert("java");
//     break;
//   case "c#":
//     window.alert("c#");
//     break;
//   default:
//     window.alert('invalid lang!');
//     break;
// }

// let dog = 'John';
// let cat = 'Garfield';
// let horse = 'BoJack';

// let animals = dog.concat(' ',cat,' ',horse);
// console.log(animals);

// let text2 = '  hello, javascript     ';
// console.log(text2.length);
// text2 = text2.trim();
// console.log(text2.length);

// let fruits = 'apple,kiwi,banana,melon';
// let fruitsArr = fruits.split('');
// console.log(fruitsArr);
// console.log(name1.repeat(2));
// 0001
// 0002
// 0003
// 0004
// console.log(name1.padEnd(10,'x'));
// console.log(fruits.replaceAll(' ',','));

// let text3 = 'john\'s \ncar';

// let num = 119.0123235723;
// console.log('num: ',num.toFixed(2));
// console.log(text3)

// let text = 'javascript c# python java c++';
// console.log(text.indexOf("python",15));

// if (text.indexOf("python")==-1) {
//     console.log('python not found');
// }

// let fruits = "banana,apple,kiwi,apple melon";
// const res = fruits.matchAll("apple");

// console.log(res);

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// let arr = Array.from(iterator);
// console.log(arr);


// let fruit = 'apple banana';
// console.log(Array.from(fruit));
// let arr = [1,2,3];
// console.log(Array.isArray(arr));
// console.log(isFinite(Infinity));

// let langName = 'javascript';
// console.log(langName.includes("javas!"));


let websites = ["stackoverflow.com",'turbo.az','oxu.az','google.com','youtube.com'];

for (let i = 0; i < websites.length; i++) {
    if (websites[i].endsWith('.com')) {
        console.log(websites[i]);
    }
}
