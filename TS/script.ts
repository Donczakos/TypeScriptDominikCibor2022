const input2Element: HTMLInputElement = document.querySelector("#input1");
const ButtonElements = document.querySelector("#button1")

const add = (number1: number) => number1 + 22 ; 

ButtonElements.addEventListener("click", () => {
    const addxd = add(Number(input2Element.value));
    console.log(addxd);
});
