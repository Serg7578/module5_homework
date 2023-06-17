// Задание 7
let arr = [1,2,3,4,5,6,0,7,0,8,9,10,'sd',null,28]
let res=0
let nul=0
let str=0
for (let i=0; i<arr.length; i=i+1){
    if (arr[i]%2==0 && arr[i]!= 0 && arr[i]!=null) res+=1
    if (arr[i]===0) nul+=1
    if (isNaN(arr[i])) str+=1
}
console.log ('чётных чисел в массиве - '+ res +' , ноль встречается - '+ nul + ' раз(а)' + ', не чисел - '+ str)