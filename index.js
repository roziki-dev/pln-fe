console.log("======[ START Task 1 ]======");
function merge(nums1, m, nums2, n) {
  let i = m - 1; // Indeks terakhir elemen asli nums1
  let j = n - 1; // Indeks terakhir nums2
  let k = m + n - 1; // Indeks terakhir nums1 setelah penggabungan

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
console.log("======[ END Task 1 ]======\n");

console.log("======[ START Task 2 ]======");
function reverseInteger(x) {
  const limit = 2 ** 31; // Batas signed 32-bit integer
  const isNegative = x < 0; // Cek apakah negatif
  let reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")); // Balik angka

  if (reversed >= limit) return 0; // Jika melebihi batas, kembalikan 0

  return isNegative ? -reversed : reversed; // Kembalikan dengan tanda asli
}

console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(1534236469)); // Output: 0 (karena melebihi batas)
console.log("======[ END Task 2 ]======\n");

console.log("======[ START Task 3 ]======");
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict); // Menggunakan Set untuk pencarian yang lebih cepat
  const memo = new Map(); // Memoisasi untuk menyimpan hasil subproblem

  function backtrack(start) {
    if (memo.has(start)) return memo.get(start); // Gunakan hasil yang sudah disimpan
    if (start === s.length) return [""]; // Jika mencapai akhir string, kembalikan array kosong

    let sentences = [];

    for (let end = start + 1; end <= s.length; end++) {
      let word = s.substring(start, end); // Ambil substring dari start ke end
      if (wordSet.has(word)) {
        // Jika kata ditemukan dalam wordDict
        let restSentences = backtrack(end); // Rekursi untuk bagian sisa string
        for (let sentence of restSentences) {
          sentences.push(word + (sentence ? " " + sentence : ""));
        }
      } 
    }

    memo.set(start, sentences); // Simpan hasil dalam memo
    return sentences;
  }

  return backtrack(0);
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
// Output: ["cats and dog", "cat sand dog"]

console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
// Output: ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// Output: []
console.log("======[ END Task 3 ]======");
