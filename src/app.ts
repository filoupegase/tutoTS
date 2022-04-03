const user: { firstName: string, lastName?: string, age: number } = {firstName: 'John', age: 20};
const date: Date = new Date();
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3
};

function printId(id: number): void {
    console.log(id.toString());
}

const counter = document.querySelector('#counter');
let i: number = 0;

const increment = (e: MouseEvent): void => {
    i++;
    counter.querySelector('span').innerText = i.toString()
}

counter.addEventListener('click', increment);

