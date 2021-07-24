// cari nombor terbesar dan campur semua sisa nombor kecuali nombor terbesar dan terkecil

function sumArray(array) {
  // check array dulu, jika array 0 maka return kosong
  // sort array dari nombor terbesar hinggan terkecil
  // lepas slice element index 1 - -1;
  // guna reduce utk tambah semua nombor yang tersisa
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, sum) => acc + sum, 0)
    : 0;
}

sumArray([6, 2, 1, 8, 10]); // 16)
