const items = [
  {
    id: 1,
    name: "Bình Máu",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2003.png",
    type: ["khoidau"],
    description:
      "         Bình Máu                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 2,
    name: "Thuốc Tái Sử Dụng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2031.png",
    type: ["khoidau"],
    description:
      "         Thuốc Tái Sử Dụng                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 3,
    name: "Bình Thuốc Biến Dị",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2033.png",
    type: ["khoidau"],
    description:
      "         Bình Thuốc Biến Dị                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 4,
    name: "Mắt Kiểm Soát",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2055.png",
    type: ["khoidau"],
    description:
      "         Mắt Kiểm Soát                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 5,
    name: "Dược Phẩm Cứng Cáp",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2138.png",
    type: ["khoidau"],
    description:
      "         Dược Phẩm Cứng Cáp                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 6,
    name: "Dược Phẩm Thuật Pháp",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2139.png",
    type: ["khoidau"],
    description:
      "        Dược Phẩm Thuật Pháp                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 7,
    name: "Dược Phẩm Phẫn Nộ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2140.png",
    type: ["khoidau"],
    description:
      "                  Dược Phẩm Phẫn Nộ                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 8,
    name: "Mắt Xanh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3340.png",
    type: ["khoidau"],
    description:
      "                  Mắt Xanh                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 9,
    name: "Thấu Kính Viễn Thị",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3363.png",
    type: ["khoidau"],
    description:
      "                  Thấu Kính Viễn Thị                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 10,
    name: "Máy Quét Oracle",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3364.png",
    type: ["khoidau"],
    description:
      "         Máy Quét Oracle                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 11,
    name: "Lưỡi Gươm Đoạt Thuật",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3850.png",
    type: ["khoidau"],
    description:
      "         Lưỡi Gươm Đoạt Thuật                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 12,
    name: "Nanh Băng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3851.png",
    type: ["khoidau"],
    description:
      "         Nanh Băng                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 13,
    name: "Mảnh Chân Băng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3853.png",
    type: ["khoidau"],
    description:
      "         Mảnh Chân Băng                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 14,
    name: "Giáp Thép",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3854.png",
    type: ["khoidau"],
    description:
      "         Giáp Thép                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 15,
    name: "Giáp Thép Cổ Ngữ/a&gt;         ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3855.png",
    type: ["khoidau"],
    description:
      "         Giáp Thép Cổ Ngữ                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 16,
    name: "Giáp Bạch Ngọc",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3857.png",
    type: ["khoidau"],
    description:
      "         Giáp Bạch Ngọc                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 17,
    name: "Khiên Cổ Vật",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3858.png",
    type: ["khoidau"],
    description:
      "         Khiên Cổ Vật                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 18,
    name: "Lá Chắn Targon",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3859.png",
    type: ["khoidau"],
    description:
      "         Lá Chắn Targon                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 19,
    name: "Pháo Đài Sơn Thạch",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3860.png",
    type: ["khoidau"],
    description:
      "         Pháo Đài Sơn Thạch                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 20,
    name: "Liềm Ma",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3862.png",
    type: ["khoidau"],
    description:
      "         Liềm Ma                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 21,
    name: "Lưỡi Hái U Linh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3863.png",
    type: ["khoidau"],
    description:
      "         Lưỡi Hái U Linh                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 22,
    name: "Lưỡi Hái Sương Đen",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3864.png",
    type: ["khoidau"],
    description:
      "         TLưỡi Hái Sương Đen                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 23,
    name: "Đá Tỏa Sáng - Cảnh Giác",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4638.png",
    type: ["khoidau"],
    description:
      "         Đá Tỏa Sáng - Cảnh Giác                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 24,
    name: "Đá Tỏa Sáng - Bảo Hộ/a&gt;         ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4643.png",
    type: ["khoidau"],
    description:
      "         Đá Tỏa Sáng - Bảo Hộ                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 25,
    name: "Phong Ấn Hắc Ám",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1082.png",
    type: ["khoidau"],
    description:
      "         Phong Ấn Hắc Ám                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 26,
    name: "Búa Gỗ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3044.png",
    type: ["khoidau"],
    description:
      "         Búa Gỗ                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 27,
    name: "Hỏa Ngọc/a&gt;         ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3067.png",
    type: ["khoidau"],
    description:
      "         Hỏa Ngọc                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 28,
    name: "Áo Choàng Gai",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3076.png",
    type: ["khoidau"],
    description:
      "         Áo Choàng Gai                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 29,
    name: "Áo Vải",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1033.png",
    type: ["khoidau"],
    description:
      "         Áo Vải                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 30,
    name: "Giáp Cai Ngục",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3082.png",
    type: ["khoidau"],
    description:
      "        Giáp Cai Ngục                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 31,
    name: "Lá Chắn Quân Đoàn",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3105.png",
    type: ["khoidau"],
    description:
      "         Lá Chắn Quân Đoàn                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 32,
    name: "Băng Cầu Vệ Quân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3112.png",
    type: ["khoidau"],
    description:
      "         Băng Cầu Vệ Quân                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 33,
    name: "Máy Chuyển Pha Hextech",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3145.png",
    type: ["khoidau"],
    description:
      "         Máy Chuyển Pha Hextech                 <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 34,
    name: "Kiếm Răng Cưa",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3155.png",
    type: ["khoidau"],
    description:
      "         Kiếm Răng Cưa                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 35,
    name: "Kiếm Vệ Quân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3177.png",
    type: ["khoidau"],
    description:
      "         Kiếm Vệ Quân                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 36,
    name: "Búa Vệ Quân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3184.png",
    type: ["khoidau"],
    description:
      "         Búa Vệ Quân                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 37,
    name: "Giáp Tay Seeker",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3191.png",
    type: ["khoidau"],
    description:
      "         Giáp Tay Seeker                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 38,
    name: "Áo Choàng Ám Ảnh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3211.png",
    type: ["khoidau"],
    description:
      "         Áo Choàng Ám Ảnh                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 39,
    name: "Vòng Tay Pha Lê",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3801.png",
    type: ["khoidau"],
    description:
      "         Vòng Tay Pha Lê                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 40,
    name: "Dây Chuyền Sự Sống",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4632.png",
    type: ["khoidau"],
    description:
      "         Dây Chuyền Sự Sống                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 41,
    name: "Trượng Ác Ma",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4635.png",
    type: ["khoidau"],
    description:
      "         Trượng Ác Ma                 <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 42,
    name: "Áo Choàng Tím",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1018.png",
    type: ["khoidau"],
    description:
      "         Áo Choàng Tím                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 43,
    name: "Dao Găm Nham Thạch",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1035.png",
    type: ["khoidau"],
    description:
      "        Dao Găm Nham Thạch                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 44,
    name: "Kiếm Dài",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1036.png",
    type: ["khoidau"],
    description:
      "         Kiếm Dài                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 45,
    name: "Cuốc Chim",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1037.png",
    type: ["khoidau"],
    description:
      "         Cuốc Chim                 <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 46,
    name: "Kiếm B.F.",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1038.png",
    type: ["khoidau"],
    description:
      "         Kiếm B.F.                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 47,
    name: "Dao Găm Băng Giá",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1039.png",
    type: ["khoidau"],
    description:
      "         Tiêu Thụ: Đặt một Mắt Kiểm Soát mạnh mẽ cho tầm nhìn của khu vực xung quanh.                 <br><br>                Dao Găm Băng Giá                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 48,
    name: "Dao Găm Hắc Thạch",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1040.png",
    type: ["khoidau"],
    description:
      "         Dao Găm Hắc Thạch                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 49,
    name: "Dao Găm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1042.png",
    type: ["khoidau"],
    description:
      "         Dao Găm                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 50,
    name: "Cung Gỗ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1043.png",
    type: ["khoidau"],
    description:
      "         Cung Gỗ                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 51,
    name: "Huyết Trượng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1053.png",
    type: ["khoidau"],
    description:
      "         Huyết Trượng                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 52,
    name: "Lưỡi Hái",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1083.png",
    type: ["khoidau"],
    description:
      "         Lưỡi Hái                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 53,
    name: "Cung Xanh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3035.png",
    type: ["khoidau"],
    description:
      "         Cung Xanh                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 54,
    name: "Rìu Nhanh Nhẹn",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3051.png",
    type: ["khoidau"],
    description:
      "         Rìu Nhanh Nhẹn                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 55,
    name: "Rìu Tiamat",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3077.png",
    type: ["khoidau"],
    description:
      "         Tiêu Thụ: Đặt một Mắt Kiểm Soát mạnh mẽ cho tầm nhìn của khu vực xung quanh.                 <br><br>                Rìu Tiamat                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 56,
    name: "Song Kiếm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3086.png",
    type: ["khoidau"],
    description:
      "         Song Kiếm                <br><br>                Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                <br><br>            Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 57,
    name: "Bùa Tiên",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1004.png",
    type: ["khoidau"],
    description:
      "       Bùa Tiên              <br><br>              Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.              <br><br>          Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 58,
    name: "Gậy Bùng Nổ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1026.png",
    type: ["khoidau"],
    description:
      "       Gậy Bùng Nổ               <br><br>              Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.              <br><br>          Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 59,
    name: "Lam Ngọc",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1027.png",
    type: ["khoidau"],
    description:
      "      Lam Ngọc               <br><br>              Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.              <br><br>          Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 60,
    name: "Sách Cũ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1052.png",
    type: ["khoidau"],
    description:
      "       Sách Cũ              <br><br>              Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.              <br><br>          Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 61,
    name: "Gậy Quá Khổ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1058.png",
    type: ["khoidau"],
    description:
      "       Gậy Quá Khổ              <br><br>              Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.              <br><br>          Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 62,
    name: "Kiếm Doran",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1055.png",
    type: ["khoidau"],
    description:
      "     Kiếm Doran            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 63,
    name: "Khiên Doran",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1054.png",
    type: ["khoidau"],
    description:
      "     Khiên Doran            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 64,
    name: "Búa Chiến Caulfield",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3133.png",
    type: ["khoidau"],
    description:
      "     Búa Chiến Caulfield             <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 65,
    name: "Gươm đồ tể",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3123.png",
    type: ["khoidau"],
    description:
      "     Gươm đồ tể            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 66,
    name: "Dao Hung Tàn",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3134.png",
    type: ["khoidau"],
    description:
      "     Dao Hung Tàn            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 67,
    name: "Bó Tên Ánh Sáng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6670.png",
    type: ["khoidau"],
    description:
      "     Bó Tên Ánh Sáng            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 68,
    name: "Dao Phẫn Nộ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6677.png",
    type: ["khoidau"],
    description:
      "     Dao Phẫn Nộ            <br><br>            Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.            <br><br>        Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 69,
    name: "Rìu Đại Mãng Xà",
    image:
      "https://img.rankedboost.com/wp-content/plugins/league/assets/items/LoL-Titanic%20Hydra.png",
    type: ["vatly"],
    description:
      "    Rìu Đại Mãng Xà           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 70,
    name: "Kiếm Manamune",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3004.png",
    type: ["vatly"],
    description:
      "    Kiếm Manamune           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 71,
    name: "Cuồng Cung Runaan",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3085.png",
    type: ["vatly"],
    description:
      "    Cuồng Cung Runaan           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 72,
    name: "Đại Bác Liên Thanh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3094.png",
    type: ["vatly"],
    description:
      "    Đại Bác Liên Thanh            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 73,
    name: "Tam Hợp Kiếm",
    image:
      "https://kicdo.com/images/source/new_item/3078_Fighter_T4_TrinityForce.png",
    type: ["vatly"],
    description:
      "    Tam Hợp Kiếm           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 74,
    name: "Vô Cực Kiếm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3031.png",
    type: ["vatly"],
    description:
      "    Vô Cực Kiếm           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 75,
    name: "Lời Nhắc Tử Vong",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3033.png",
    type: ["vatly"],
    description:
      "    Lời Nhắc Tử Vong            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 76,
    name: "Gươm Suy Vong",
    image:
      "https://kicdo.com/images/source/new_item/3153_Fighter_T3_BladeoftheRuinedKing.png",
    type: ["vatly"],
    description:
      "    Gươm Suy Vong           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 77,
    name: "Rìu Mãng Xà",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3074.png",
    type: ["vatly"],
    description:
      "    Rìu Mãng Xà           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 78,
    name: "Nỏ Thần Dominik",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3036.png",
    type: ["vatly"],
    description:
      "    Nỏ Thần Dominik           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 79,
    name: "Ma Vũ Song Kiếm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3046.png",
    type: ["vatly"],
    description:
      "    Ma Vũ Song Kiếm           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 80,
    name: "Huyết Kiếm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3072.png",
    type: ["vatly"],
    description:
      "    Huyết Kiếm            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 81,
    name: "Phong Thần Kiếm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3095.png",
    type: ["vatly"],
    description:
      "    Phong Thần Kiếm           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 82,
    name: "Đao Thủy Ngân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3139.png",
    type: ["vatly"],
    description:
      "    Đao Thủy Ngân           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 83,
    name: "Luỡi Hái Linh Hồn",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3508.png",
    type: ["vatly"],
    description:
      "    Luỡi Hái Linh Hồn            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 84,
    name: "Cung Phong Linh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6671.png",
    type: ["vatly"],
    description:
      "    Cung Phong Linh            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 85,
    name: "Móc Diệt Thủy Quái",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6672.png",
    type: ["vatly"],
    description:
      "    Móc Diệt Thủy Quái            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 86,
    name: "Nỏ Tử Thủ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6673.png",
    type: ["vatly"],
    description:
      "    Nỏ Tử Thủ            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 87,
    name: "Đoản Đao Navori",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6675.png",
    type: ["vatly"],
    description:
      "    Đoản Đao Navori            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 88,
    name: "Súng Hải Tặc",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6676.png",
    type: ["vatly"],
    description:
      "    Súng Hải Tặc            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 89,
    name: "Búa Rìu Sát Thần",
    image:
      "https://fastcdn.mobalytics.gg/assets/lol/images/dd/game-items/6632.png?v1",
    type: ["vatly"],
    description:
      "    Búa Rìu Sát Thần            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 90,
    name: "Chùy Hấp Huyết",
    image:
      "https://fastcdn.mobalytics.gg/assets/lol/images/dd/game-items/6630.png?v1",
    type: ["vatly"],
    description:
      "    Chùy Hấp Huyết           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 91,
    name: "Chùy Phản Kích",
    image:
      "https://fastcdn.mobalytics.gg/assets/lol/images/dd/game-items/6631.png?v1",
    type: ["vatly"],
    description:
      "    Chùy Phản Kích           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 92,
    name: "Móng Vuốt Ám Muội",
    image:
      "https://fastcdn.mobalytics.gg/assets/lol/images/dd/game-items/6693.png?v1",
    type: ["vatly"],
    description:
      "    Móng Vuốt Ám Muội            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 93,
    name: "Dạ Kiếm Draktharr",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6691.png",
    type: ["vatly"],
    description:
      "    Dạ Kiếm Draktharr           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 94,
    name: "Nguyệt Đao",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6692.png",
    type: ["vatly"],
    description:
      "    Nguyệt Đao            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 95,
    name: "Thương Phục Hận Serylda",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6694.png",
    type: ["vatly"],
    description:
      "    Thương Phục Hận Serylda           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 96,
    name: "Rìu đen",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3071.png",
    type: ["vatly"],
    description:
      "    Rìu đen           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 97,
    name: "Nguyên Tố Luân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6696.png",
    type: ["vatly"],
    description:
      "    Nguyên Tố Luân            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 98,
    name: "Kiếm Ác Xà",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6695.png",
    type: ["vatly"],
    description:
      "    Kiếm Ác Xà           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 99,
    name: "Áo Choàng Bóng Tối",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3814.png",
    type: ["vatly"],
    description:
      "    Áo Choàng Bóng Tối           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 100,
    name: "Kiếm Âm U",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3179.png",
    type: ["vatly"],
    description:
      "    Kiếm Âm U            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 101,
    name: "Kiếm Ma Youmuu",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3142.png",
    type: ["vatly"],
    description:
      "    Kiếm Ma Youmuu           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 102,
    name: "Thần Kiếm Muramana",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3042.png",
    type: ["vatly"],
    description:
      "    Thần Kiếm Muramana           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 103,
    name: "Đao Tím",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3091.png",
    type: ["vatly"],
    description:
      "    Đao Tím           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 104,
    name: "Chùy Gai Malmortius",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3156.png",
    type: ["vatly"],
    description:
      "    Chùy Gai Malmortius           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 105,
    name: "Búa Tiến Công",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3181.png",
    type: ["vatly"],
    description:
      "    Búa Tiến Công           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 106,
    name: "Chùy Bạch Ngân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6035.png",
    type: ["vatly"],
    description:
      "    Chùy Bạch Ngân           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 107,
    name: "Vũ Điệu Tử Thần",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6333.png",
    type: ["vatly"],
    description:
      "    Vũ Điệu Tử Thần           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 108,
    name: "Cưa Xích Hóa Kỹ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6609.png",
    type: ["vatly"],
    description:
      "    Cưa Xích Hóa Kỹ           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 109,
    name: "Giáp Thiên Thần",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3026.png",
    type: ["vatly"],
    description:
      "    Giáp Thiên Thần           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 110,
    name: "Móng Vuốt Sterak",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3053.png",
    type: ["vatly"],
    description:
      "    Móng Vuốt Sterak           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 111,
    name: "Vương Miện Shurelya",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2065.png",
    type: ["phep"],
    description:
      "    Vương Miện Shurelya           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 112,
    name: "Quyền Trượng Thiên Thần",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3003.png",
    type: ["phep"],
    description:
      "    Quyền Trượng Thiên Thần            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 113,
    name: "Bình Thải Hóa Dược",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3011.png",
    type: ["phep"],
    description:
      "    Bình Thải Hóa Dược           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 114,
    name: "Quyền Trượng Đại Thiên Sứ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3040.png",
    type: ["phep"],
    description:
      "    Quyền Trượng Đại Thiên Sứ            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 115,
    name: "Sách Chiêu Hồn Mejai",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3041.png",
    type: ["phep"],
    description:
      "    Sách Chiêu Hồn Mejai           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 116,
    name: "Mũ Phù Thủy Rabadon",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3089.png",
    type: ["phep"],
    description:
      "    Mũ Phù Thủy Rabadon           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 117,
    name: "Kiếm Tai Ương",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3100.png",
    type: ["phep"],
    description:
      "    Kiếm Tai Ương           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 118,
    name: "Dây Chuyền Chữ Thập",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3102.png",
    type: ["phep"],
    description:
      "    Dây Chuyền Chữ Thập           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 119,
    name: "Nanh Nashor",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3115.png",
    type: ["phep"],
    description:
      "   Nanh Nashor           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 120,
    name: "Trượng Pha Lê Rylai",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3116.png",
    type: ["phep"],
    description:
      "    Trượng Pha Lê Rylai           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 121,
    name: "Trượng Hư Vô",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3135.png",
    type: ["phep"],
    description:
      "    Trượng Hư Vô           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 122,
    name: "Đai Tên Lửa Hextech",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3152.png",
    type: ["phep"],
    description:
      "    Đai Tên Lửa Hextech           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 123,
    name: "Đồng Hồ Cát Zhonya",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3157.png",
    type: ["phep"],
    description:
      "    Đồng Hồ Cát Zhonya            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 124,
    name: "Quỷ Thư Morello",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3165.png",
    type: ["phep"],
    description:
      "    Quỷ Thư Morello           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 125,
    name: "Lư Hương Sôi Sục/a&gt;    ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3504.png",
    type: ["phep"],
    description:
      "   Lư Hương Sôi Sục           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 126,
    name: "Kính Nhắm Ma Pháp",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4628.png",
    type: ["phep"],
    description:
      "    Kính Nhắm Ma Pháp           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 127,
    name: "Trát Lệnh Đế Vương",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4005.png",
    type: ["phep"],
    description:
      "    Trát Lệnh Đế Vương           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 128,
    name: "Động Cơ Vũ Trụ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4629.png",
    type: ["phep"],
    description:
      "    Động Cơ Vũ Trụ           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 129,
    name: "Quyền Trượng Ác Thần",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4633.png",
    type: ["phep"],
    description:
      "    Quyền Trượng Ác Thần            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 130,
    name: "Lưỡi Hái Bóng Đêm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4636.png",
    type: ["phep"],
    description:
      "    Lưỡi Hái Bóng Đêm           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 131,
    name: "Mũ Trụ Nguyền Rủa",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4637.png",
    type: ["phep"],
    description:
      "    Mũ Trụ Nguyền Rủa           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 132,
    name: "Vương Miện Suy Vong",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4644.png",
    type: ["phep"],
    description:
      "    Vương Miện Suy Vong            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 133,
    name: "Ngọn Lửa Hắc Hóa",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4645.png",
    type: ["phep"],
    description:
      "    Ngọn Lửa Hắc Hóa           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 134,
    name: "Trượng Lưu Thủy",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6616.png",
    type: ["phep"],
    description:
      "    Trượng Lưu Thủy           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 135,
    name: "Bùa Nguyệt Thạch",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6617.png",
    type: ["phep"],
    description:
      "    Bùa Nguyệt Thạch            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 136,
    name: "Mặt Nạ Thống Khổ Liandry",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6653.png",
    type: ["phep"],
    description:
      "    Mặt Nạ Thống Khổ Liandry           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 137,
    name: "Bão Tố Luden",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6655.png",
    type: ["phep"],
    description:
      "    Bão Tố Luden           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 138,
    name: "Băng Trượng Vĩnh Cửu",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6656.png",
    type: ["phep"],
    description:
      "    Băng Trượng Vĩnh Cửu           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 139,
    name: "Tụ Bão Zeke",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3050.png",
    type: ["giap"],
    description:
      "    Tụ Bão Zeke            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 140,
    name: "Khiên Thái Dương",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3068.png",
    type: ["giap"],
    description:
      "    Khiên Thái Dương           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 141,
    name: "Giáp Gai",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3075.png",
    type: ["giap"],
    description:
      "    Giáp Gai           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 142,
    name: "Lời Thề Hiệp Sĩ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3109.png",
    type: ["giap"],
    description:
      "    Lời Thề Hiệp Sĩ            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 143,
    name: "Tim Băng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3110.png",
    type: ["giap"],
    description:
      "    Tim Băng           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 144,
    name: "Khiên Băng Randuin",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3143.png",
    type: ["giap"],
    description:
      "    Khiên Băng Randuin           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 145,
    name: "Dây Chuyền Iron Solari",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3190.png",
    type: ["giap"],
    description:
      "    Dây Chuyền Iron Solari            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 146,
    name: "Thú Tượng Thạch Giáp",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3193.png",
    type: ["giap"],
    description:
      "    Thú Tượng Thạch Giáp           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 147,
    name: "Giáp Liệt Sĩ",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3742.png",
    type: ["giap"],
    description:
      "    Giáp Liệt Sĩ           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 148,
    name: "Găng Tay Băng Hỏa",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6662.png",
    type: ["giap"],
    description:
      "    Găng Tay Băng Hỏa           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 149,
    name: "Giáp Gia Tốc Hóa Cuồng",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/6664.png",
    type: ["giap"],
    description:
      "    Giáp Gia Tốc Hóa Cuồng            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 150,
    name: "Chuông Bảo Hộ Mikael",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3222.png",
    type: ["giap"],
    description:
      "    Chuông Bảo Hộ Mikael           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 151,
    name: "Giáp Vai Nguyệt Thần",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3001.png",
    type: ["giap"],
    description:
      "    Giáp Vai Nguyệt Thần           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 152,
    name: "Giáp Tâm Linh",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3065.png",
    type: ["giap"],
    description:
      "    Giáp Tâm Linh           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 153,
    name: "Giáp Thiên Nhiên",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/4401.png",
    type: ["giap"],
    description:
      "    Giáp Thiên Nhiên           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 154,
    name: "Mặt Nạ Vực Thẳm",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/8020.png",
    type: ["giap"],
    description:
      "    Mặt Nạ Vực Thẳm            <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 155,
    name: "Giáp Máu Warmog",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3083.png",
    type: ["giap"],
    description:
      "    Giáp Máu Warmog           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 156,
    name: "Găng Xích Thù Hận",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/8001.png",
    type: ["giap"],
    description:
      "    Găng Xích Thù Hận           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 157,
    name: "Giày thường",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/1001.png",
    type: ["giay"],
    description:
      "    Giày thường           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 158,
    name: "Giày Xịn",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/2422.png",
    type: ["giay"],
    description:
      "    Giày Xịn           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 159,
    name: "Giày Pháp Sư",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3020.png",
    type: ["giay"],
    description:
      "    Giày Pháp Sư           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 160,
    name: "Giày Thép Gai",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3047.png",
    type: ["giay"],
    description:
      "    Giày Thép Gai           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 161,
    name: "Giày Thủy Ngân",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3111.png",
    type: ["giay"],
    description:
      "    Giày Thủy Ngân           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 162,
    name: "Giày Cơ Động",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3117.png",
    type: ["giay"],
    description:
      "    Giày Cơ Động           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 163,
    name: "Giày Khai Sáng Ionia",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3158.png",
    type: ["giay"],
    description:
      "    Giày Khai Sáng Ionia           <br><br>           Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.           <br><br>       Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 164,
    name: "Giày Cơ Động",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3006.png",
    type: ["giay"],
    description:
      "  Giày Cơ Động         <br><br>         Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.         <br><br>     Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 165,
    name: "Giày Bạc",
    image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/item/3009.png",
    type: ["giay"],
    description:
      "  Giày Bạc         <br><br>         Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.         <br><br>     Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
];
