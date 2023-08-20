const A = [888,417,136,979,360,711,569,649,693,763,586,259,715,892,366,309,170,72,992,483,245,5,421,66,466,368,109,774,716,89,630,154,68,749,857,699,68,539,467,69,531,888,46,364,700,827,181,44,470,145,859,819,245,618,957,737,232,394,435,447,729,209,291,117,824,939,646,242,936,145,369,799,593,583,142,660,156,84,776,866,482,229,722,848,838,809,241,559,342,830,173,910,158,251,829,422,268,148,616,998,949,770,284,760,135,608,722,506,685,359,992,95,927,882,470,60,71,99,354,851,124,100,348,187,467,775,378,237,193,903,685,785,378,261,362,463,389,420,59,95,510,628,99,89,315,611,118,494,632,663,366,389,555,965,183,294,328,262,12,99,182,908,167,98,15,370,693,661,956,649,784,281,911,740,379,962,504,61,154,654,841,245,383,278,194,888,102,552,493,758,442,127,866,204,989,57,637,353,860,896,531,433,209,314,753,86,240,625,365,66,506,732,435,205,653,764,241,813,121,872,627,313,396,385,992,534,344,503,587,298,976,298,715,540,222,593,675,290,40,879,426,560,718,137,573,360,414,537,944,413,801,238,33,831,779,66,781,890,454,258,753,502,871,602,810,952,776,847,197,600,349,946,616,554,823,612,655];
let B = 381;

// Approach -01:- Traditional Way of Writing Hashmap Code:-

// let hashmap = new Map();

// let count = 0;

// for (let i=0; i<A.length; i++){
//     if (hashmap.has(B-Number(A[i]))){
//         count += hashmap.get(B-A[i]);
//     }

//     if (hashmap.has(A[i])){
//         hashmap.set(A[i],hashmap.get(A[i])+1);
//     }else{
//         hashmap.set(A[i],1);
//     }
// }

// console.log(count);

// Approach-02: Short Code with fewer IF ELSE:- Optimized Way of Writing Hashmap JS Code

let hashmap = new Map();
let mod = BigInt(1e9+7);
let count = 0n;

for (let i=0; i<A.length; i++){
    // if (hashmap.has(B-Number(A[i]))){
    //     console.log('Yes')
        count = (count + BigInt(hashmap.get(BigInt(B)-BigInt(A[i])) || 0n)) % mod  ;
    // }

    // if (hashmap.has(A[i])){
    //     console.log('YYYY')
        hashmap.set(BigInt(A[i]),(hashmap.get(BigInt(A[i])) || 0n)+1n);
    // }else{
        // console.log('NNNN');
        // hashmap.set(A[i],1);
    }
// }

val = count % mod
console.log(Number(val));
