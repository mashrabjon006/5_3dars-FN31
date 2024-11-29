// const button = document.querySelector('#changeColorButton');

// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 100);
//     const b = Math.floor(Math.random() * 156);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// button && button.addEventListener('click', function () {
//     document.body.style.backgroundColor = getRandomColor();
// });


// // 2
// const textElement = document.querySelector('#text');
// const toggleButton = document.querySelector('#toggleButton');

// toggleButton.addEventListener('click', function () {
//     if (textElement.style.display === 'none') {
//         textElement.style.display = 'block';
//         toggleButton.textContent = 'Yashirish';
//     } else {
//         textElement.style.display = 'none';
//         toggleButton.textContent = 'Ko‘rsatish';
//     }
// });

// 3


// 4
// const imageUrls = [
//     "https://picsum.photos/id/1011/600/400",
//     "https://picsum.photos/id/1012/600/400",
//     "https://picsum.photos/id/1013/600/400",
//     "https://picsum.photos/id/1014/600/400",
//     "https://picsum.photos/id/1015/600/400"
// ];

// let currentIndex = 0;

// document.getElementById('slideshowImage').src = imageUrls[currentIndex];

// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');

//     prevButton.addEventListener('click', function () {
//         updateImage(-1);
//     });

//     nextButton.addEventListener('click', function () {
//         updateImage(1);
//     });

// function updateImage(direction) {
//     currentIndex += direction;
//     if (currentIndex < 0) {
//         currentIndex = imageUrls.length - 1;
//     }
//     if (currentIndex >= imageUrls.length) {
//         currentIndex = 0;
//     }

//     document.getElementById('slideshowImage').src = imageUrls[currentIndex];
// }


// 5
// const quotes = [
//     "Hayot sizni sevsin! - Albert Eynshteyn",
//     "Siz kimdirga ishonishingiz mumkinligini bilishning eng yaxshi yo'li ularga ishonishdir - Ernest Xeminguey.",
//     "Ishonch - bu g‘alaba boshlanishidir. - Aristotle",
//     "Dunyoda eng katta muvaffaqiyat — o‘zingizga ishongan holda yashash. - Ralph Waldo Emerson",
//     "Orzular shunchaki ozru emas",
//     "Siz boshlagan narsaning tugashini kutmang. O‘zingizning muvaffaqiyatli yakunini yarating. - Zig Ziglar",
//     "Boshlashning yo'li - gapirishni to'xtatib, harakat qilishni boshlashdir - Uolt Disney.",
//     "Vaqtingiz cheklangan, uni boshqa birovning hayotiga sarflamang. - Stiv Jobs.",
//     "Eng muhimi, hayotdan zavqlanish - baxtli bo'lish - buning hammasi muhim - Dalay Lama."
// ]

// function showRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.textContent = quotes[randomIndex];
// }

// document.getElementById("quoteButton").addEventListener("click", showRandomQuote);


// 6

// 7
///8
// const inputText = document.getElementById('inputText');
//         const output = document.getElementById('output');

//         inputText.addEventListener('input', function() {
//             const textLength = inputText.value.length;
//             output.textContent = 'Uzunlik: ' + textLength;
//         });

// 10
// const paragraphs = document.querySelectorAll('.paragraph');

// paragraphs.forEach(paragraph => {
//     paragraph.addEventListener('click', function() {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         const randomColor = `rgb(${r}, ${g}, ${b})`
//         paragraph.style.color = randomColor
//     });
// });