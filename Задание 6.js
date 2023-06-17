// Задание 6
let arr = [2,2,2,2,2,2,2,8]
res=[]
for (let i=0; i<arr.length; i=i+1){
    if (arr[i]=== arr[i+1]) res.push(arr[i])
}
if (arr.length-1 === res.length) console.log (true)
else console.log (false)