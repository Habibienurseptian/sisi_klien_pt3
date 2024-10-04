const dataMahasiswa = [
    {
        id: 1,
        nama: "Budiono",
        tanggalLahir: "2000-10-21",
        fakultas: "Fakultas Ilmu Komputer",
        programStudi: "Teknik Informatika",
        semester: 5,
        nilai:{
            algoritma: 87,
            basisdata: 88,
            pemprogramanWeb: 89,
        },

        aktif: true,
        organisasi: ["Himpunan Mahasiswa Teknik Informatika", "Komunitas Pemprograman"],
    },
    {
        id: 2,
        nama: "Mulyono",
        tanggalLahir: "1999-09-11",
        fakultas: "Fakultas Ekonomi Bisnis",
        programStudi: "Manajemen",
        semester: 7,
        nilai:{
            manajemenKeuangan: 84,
            akuntasi: 90,
            pemasaran: 89,
        },

        aktif: true,
        organisasi: ["Koperasi Mahasiswa"],
    },
    {
        id: 3,
        nama: "Antony",
        tanggalLahir: "2000-01-12",
        fakultas: "Fakultas Teknik",
        programStudi: "Teknik Electro",
        semester: 5,
        nilai:{
            mekanikTanah: 85,
            strukturBangunan: 89,
        },

        aktif: false,
        organisasi: ["Himpunan Mahasiswa Tenik Sipil"],
    },
];

//CATATAN PENTING
//Key : Nilai
//contoh >>  Nama : Budiono

//console.log(dataMahasiswa)

//Data Mahasiswa
const mhs = dataMahasiswa;

//Data mhs pertama
//objek dari array
console.log(mhs[0]);
const mhs_pertama = mhs[0];

//destruktif
//const nama = mhs_pertama.nama;
//const fakultas = mhs_pertama.fakultas;
const {nama, fakultas, organisasi, tanggalLahir, aktif, nilai} = mhs_pertama;
console.log(nama, fakultas, organisasi);

//destrukturing dari array
const [orgPertama, orgKedua, ...orgLainnya] = organisasi;
console.log(orgPertama, orgKedua, orgLainnya);

//spread operator
const newOrganisasi = ["Futsal", ...organisasi];
console.log(newOrganisasi);

//split string, create function

    function getYear2(str){
        str.split(".")[0];
    }
    const getYear = (str) => str.split(".")[0];
    console.log(getYear(tanggalLahir));
console.log(tanggalLahir.split(".")[0]);

//conditional "?"
const statusMhs = aktif ? "Masih Aktif" : "haha";
console.log(statusMhs);

//old style
console.log("nama: " +nama);

//esg style
console.log(`nama:  $(nama), lahirnya: $(tanggalLahir)`);

//array map mengumpulkan nilai
const namaA11Mahasiswa = mhs.map((mahasiswa) => mahasiswa.nama);
console.log(namaA11Mahasiswa);

//filtering dari status mhs akif
const mhsAktif = mhs.filter((mahasiswa => mahasiswa.aktif));
console.log(mhsAktif);

//sort
const sortBySemster = mhs.slice().sort((a,b) => a.semester - b.semester);
console.log(sortBySemster);

//sum nilai
const totalNilai = dataMahasiswa.reduce((sum, mhs) => {
    const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0);
    return sum + totalNilai;
}, 0);

console.log("Total Nilai Mahasiswa : " + totalNilai);