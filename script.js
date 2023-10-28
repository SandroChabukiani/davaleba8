'use strict';
//pirveli davaleba
function expo(number, power, callback) {
  if (power === 0) {
      callback(number);
  } else {
      expo(number, power - 1, result => {
          callback(number * result);
      });
  }
}
function fetchPostAndDisplay() {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          const post = data[0];
          const postElement = document.createElement('div');
          postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
          `;
          document.body.appendChild(postElement); 
      })
      .catch(error => console.error('Error fetching data:', error));
}

expo(5, 3, result => {
  console.log('Result:', result); 
  fetchPostAndDisplay();
});

//meore davaleba

function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'object' || obj === null) {
      reject("Argument is not an object");
    } else {
      try {
        const copy = JSON.parse(JSON.stringify(obj));
        resolve(copy);
      } catch (error) {
        reject("Error in deep copying the object");
      }
    }
  });
}

const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

deepCopy(originalObject)
  .then(copiedObject => {
    console.log("Deep copied object:", copiedObject);
  })
  .catch(error => {
    console.error("Error:", error);
  });