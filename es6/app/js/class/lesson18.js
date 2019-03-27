// export let A = 123;
// export function test(){
//     console.log('test');
// }
// export class ANC{
//     test(){
//         console.log('lcass');
//     }
// }

//导出方式
 let A = 123;
 function test(){
    console.log('test');
}
 class ANC{
    test(){
        console.log('lcass');
    }
}
export default{
    A,
    test,
    ANC
}