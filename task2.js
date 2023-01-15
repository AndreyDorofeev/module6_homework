// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.


function func (number) {
    let isPrime, result; 
    isPrime = true
    if (number > 1 && number <= 1000) {
        for (let i = 2; i < number; i++) {
            if(number % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `число ${number} - простое` : `число ${number} - составное`;
    } else if (number > 1000) {
        result = 'Данные не верны';
    }
    console.log(result);
}
func(15)