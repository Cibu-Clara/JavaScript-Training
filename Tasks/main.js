// Tasks
// 1) a)
function fetchData() {
    return new Promise((resolve, reject) => {

        if (Math.random() > 0.5) {
            resolve('Success');
        }
        else {
            reject('Failure');
        }
    });
}

function fetchDataAsync1() {
    fetchData()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

// b)
function processData(numbers) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numbers.length === 0)
                reject('Array is empty!');
            let sum = 0;
            for (let i = 0; i < numbers.length; i++)
                sum += numbers[i];
            resolve(sum);
        }, 1000);
    });
}

function fetchDataAsync2() {
    const numbers = []
    processData(numbers)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

// c)
async function fetchDataAsync3() {
    const numbers = [1, 2, 3, 4, 5];
    try {
        const result = await processData(numbers);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
function main() {
    fetchDataAsync3();
}
