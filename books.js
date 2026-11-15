/*
    t      judul
    a      penulis
    s      dimiliki sejak (teks bebas)
    b      blurb (dari sampul belakang)
    r      review singkat dari kamu
    c      warna punggung buku (hex)
    k      warna tulisan di punggung buku (hex)
  Lebar dan tinggi buku di rak dihitung otomatis dari panjang judul.
*/

const BOOKS = [
    {
        t: 'Hujan Bulan Juni',
        a: '',
        s: 'Juli 2025',
        r: '',
        b: 'Bagaimana mungkin seseorang memiliki keinginan untuk mengurai kembali benang yang tak terkirakan jumlahnya dalam selembar sapu tangan yang telah ditenunnya sendiri. Bagaimana mungkin seseorang bisa mendadak terbebaskan dari jaringan benang yang susun-bersusun, silang-menyilang, timpa-menimpa dengan rapi di selembar saputangan yang sudah bertahun-tahun lamanya ditenun dengan sabar oleh jari-jarinya sendiri oleh kesunyiannya sendiri oleh ketabahannya sendiri oleh tarikan dan hembusan napasnya sendiri oleh rintik waktu dalam benaknya sendiri oleh kerinduannya sendiri oleh penghayatannya sendiri tentang hubungan-hubungan pelik antara perempuan dan laki-laki yang tinggal di sebuah ruangan kedap suara yang bernama kasih sayang. Bagaimana mungkin.',
        c: '#AEB9B5',
        k: '#715565',
        cover: 'asset/img/hbj.jpg'
    },
    {
        t: 'Bandung Menjelang Pagi',
        a: '',
        s: 'November 2025',
        r: 'Bandung bukan hanya tentang sudut-sudut kota yang indah, udara sejuk, atau tempat-tempat yang ramai dikunjungi. Ada sisi lain dari kota ini yang mungkin jarang kita lihat, terutama ketika malam semakin larut dan pagi perlahan datang. Lewat cerita Dipha dan Vinda, Brian Khrisna tidak sekadar menyuguhkan kisah tentang dua orang yang saling jatuh cinta. Lebih dari itu, novel ini mengajak kita melihat kehidupan lain di balik ramainya Kota Bandung. Tentang orang-orang yang harus berjuang setiap hari untuk bertahan hidup, kerasnya mencari nafkah, hingga berbagai persoalan sosial yang sering kali luput dari perhatian kita. Hal yang menarik dari novel ini adalah bagaimana Bandung terasa begitu dekat dengan ceritanya. Jalanan, sudut-sudut kota, hingga tempat-tempat yang mungkin pernah kita kunjungi membuat latarnya terasa hidup. Bandung seolah memiliki dua sisi. Di satu sisi, kota ini terlihat indah dan romantis. Namun, di sisi lain, ada banyak cerita tentang perjuangan, kesulitan, dan kehidupan orang-orang yang tidak selalu berjalan mudah. Di balik kisah romansa Dipha dan Vinda, ada banyak hal yang bisa direnungkan. Setiap orang punya cerita dan masalahnya masing-masing, sesuatu yang mungkin tidak selalu terlihat dari luar. Ada mimpi yang terus diperjuangkan, kenyataan yang harus diterima, dan perasaan yang terkadang tidak berakhir seperti yang diharapkan. Sebab pada akhirnya, hidup memang tidak selalu berjalan sesuai dengan apa yang kita rencanakan.',
        b: 'Menjelang pagi, Bandung berubah menjadi kota yang tak lagi sama. Malam terasa sangat panjang dan lebih mencekam dari kelam. Para bandit, pemadat, tukang judi, bocah geng motor, begundal grafiti, semuanya berkeliaran bak tikus-tikus ketika air got meluap. Di kota ini, Dipha adalah bocah berandalan yang mampu mengerjakan apa saja. Berjualan bacang di Asia Afrika, pelayan kafe di Braga, buruh angkut kertas di Pajagalan, ataupun buruh kain di Tamin. Apa pun ia lakukan untuk bertahan hidup. Kemampuannya untuk mengerjakan apa saja itu membawanya bertemu dengan seorang gadis misterius bernama Vinda yang ngotot minta dicarikan tempat tinggal dengan segala syarat yang tak masuk akal. Seperti dipermainkan oleh takdir, satu-satunya tempat yang tersedia adalah kontrakan petak yang terletak tepat di seberang kontrakan Dipha. Mau tidak mau, Vinda akhirnya menempati kontrakan itu. Vinda yang sangat mencintai Bandung begitu bertolak belakang dengan Dipha yang sudah mengenal betapa bobroknya kota itu ketika menjelang pagi. Asia Afrika, Braga, Dago, Kalipah Apo, Astana Anyar, Banceuy, Jalan ABC, dan seluruh jalan-jalan tikus di Kota Bandung menjadi saksi tumbuhnya perasaan di antara keduanya. Namun, sayangnya mereka berdua kerap lupa, bahwa sejatinya, oleh-oleh paling khas dari Kota Bandung adalah: patah hati.',
        c: '#715565',
        k: '#f5e6d0',
        cover: 'asset/img/bmp.jpg'
    },
    {
        t: 'Sendiri',
        a: '',
        s: 'Agustus 2026',
        r: 'Novel Sendiri karya Tere Liye membawa pembaca pada sebuah petualangan ke dunia lain dengan nuansa fantasi. Sejujurnya, cerita dengan konsep seperti ini bukanlah jenis bacaan yang terlalu saya sukai. Alur petualangannya terasa kurang sesuai dengan preferensi saya, sehingga tidak semua bagian cerita bisa saya nikmati sepenuhnya. Namun, di balik unsur fantasinya, ada satu hal yang cukup menarik untuk direnungkan, yaitu tentang kehilangan dan belajar merelakan. Kehilangan seseorang yang sudah menjadi bagian penting dalam hidup tentu bukan perkara mudah. Ada kenangan yang sulit dilupakan, kebiasaan yang tiba-tiba harus berubah, dan ruang kosong yang tidak mudah untuk diisi kembali. Novel ini mengingatkan bahwa setiap orang punya caranya sendiri dalam menghadapi kehilangan, termasuk belajar menerima kenyataan bahwa seseorang yang kita sayangi tidak selamanya bisa menemani perjalanan hidup kita. Pada akhirnya, Sendiri mungkin bukan novel yang sepenuhnya saya nikmati dari sisi cerita dan genrenya. Namun, pesan tentang kehilangan, penerimaan, dan keikhlasan menjadi bagian yang tetap bisa saya ambil setelah membacanya. Sebuah pengingat bahwa merelakan bukan berarti melupakan, melainkan belajar melanjutkan hidup meskipun ada seseorang yang tidak lagi bisa berjalan bersama kita.',
        b: 'Tidak ada yang abadi di dunia ini. Lautan bisa mengering. Gunung bisa rata. Benua terpisah, bersatu, dan terpisah lagi. Apalagi cinta pasangan manusia. Sehebat apapun cinta tersebut, pasti akan berakhir. Waktu akan menelannya. Inilah kisah tentang seorang laki-laki usia 70 tahun, yang ditinggal istrinya meninggal setelah begitu lama menikah, menghabiskan waktu bersama-sama. Saat hari itu tiba, apa yang harus dia lakukan? Bagaimana dia akan melewati sisa hidupnya? Menjalani hari demi hari? Apakah hidupnya masih seru? Apakah masih ada petualangan spesial baginya. Atau hanya tersisa. Sendiri.',
        c: '#087DAA',
        k: '#e8f1f4',
        cover: 'asset/img/sendiri.jpg'
    },
    {
        t: 'K : A Man of Letters',
        a: '',
        s: 'Oktober 2026',
        r: 'Contoh review: apa yang kamu pakai dalam keseharian?',
        b: 'Khail Adnan akan selalu menjadi orang pertama yang muncul dalam benak Raisa untuknya memberikan kabar terbaru dalam hidup. Apa pun itu. Tentang piala juara paskib yang tingginya mencapai dua meter, tentang Hadian sang kakak yang menyebalkan, sampai tentang kesibukan barunya di tempat bimbingan belajar yang membuat emosi naik turun. Raisa membagikan kisah hari-harinya pada Khail, semuanya. Bagi Khail, mendengarkan cerita Raisa adalah hal termudah yang dapat dilakukan. Sementara untuk membagi kisah tentang beban hidupnya… tak semudah itu. Maka saat Raisa berkata, “Kapan-kapan kamu boleh kirimin aku surat lagi, Khai.” Khail menemukan opsi baru: menggoreskan pena yang merangkai kata-kata untuk mencurahkan isi hatinya.',
        c: '#F2A13A',
        k: '#e8f1f4',
        cover: 'asset/img/kmol.jpeg'
    },
    {
        t: 'Pingkan Melipat Jarak',
        a: '',
        s: 'Desember 2026',
        r: 'Contoh review: kebiasaan apa yang berhasil kamu ubah?',
        b: 'Selalu ada saat ketika kita tidak sempat bertanya kepada sepasang kaki sendiri kenapa tidak mau berhenti sejak mengawah pengembaraan agar kita bisa memandang sekeliling dan bertahan semampu kita untuk tidak melepaskan air math menjelma sungai tempat berlayar tukang perahu yang mungkin saja bisa memberi tahu kita, Ke sana, Saudara, ke sana. Selalu ada kapal yang mendadak bergoyang bahkan ketika tidak ada sama sekali angin di samudra bahkan ketika tidak ada pun yang terasa bergerak kecuali dua ekor camar yang sudah terbang terlalu jauh ke samudra dan merasa sangat letih tetapi tidak melihat apa pun yang bisa dihinggapinya kecuali sebuah bahtera yang bergoyang keras ke sana kemari terlempar ke atas menghujam kembali ke permukaan menciptakan percik-percik air dan melempar-lemparkan gumpalan-gumpalan air sehingga tidak mungkin dihinggapi tong Layarnya walau hanya sejenak. Walau demi dua ekor camar sangat letih yang terus-menerus terbang agar tetap bisa memelihara kasih sayang. Walau hanya sejenak.',
        c: '#E9B0BF',
        k: '#3a2d1c',
        cover: 'asset/img/pmj.jpg'
    },
];