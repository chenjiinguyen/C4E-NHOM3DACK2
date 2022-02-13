const data_runes = {
  "chuanxac" : [7,10],
  "apdao" : [7,10],
  "phapthuat" : [3,6,9],
  "kiendinh" : [3,6,9],
  "camhung" : [3,6,9],
}

const runes = [
  {
    id: 2,
    name: "Sẵn Sàng Tấn Công",
    image: "https://www.mobafire.com/images/reforged-rune/press-the-attack.png",
    type: ["chuanxac"],
    description:
      "           Sẵn Sàng Tấn Công                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 3,
    name: "Nhịp Độ Chết Người",
    image: "https://www.mobafire.com/images/reforged-rune/lethal-tempo.png",
    type: ["chuanxac"],
    description:
      "           Nhịp Độ Chết Người                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 4,
    name: "Bước Chân Thần Tốc",
    image: "https://www.mobafire.com/images/reforged-rune/fleet-footwork.png",
    type: ["chuanxac"],
    description:
      "           Bước Chân Thần Tốc                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 5,
    name: "Chinh Phục",
    image: "https://www.mobafire.com/images/reforged-rune/conqueror.png",
    type: ["chuanxac"],
    description:
      "           Chinh Phục                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 6,
    name: "Hồi máu vượt trội",
    image: "https://www.mobafire.com/images/reforged-rune/overheal.png",
    type: ["chuanxac"],
    description:
      "           Hồi Máu Vượt Trội                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 7,
    name: "Đắc thắng",
    image: "https://www.mobafire.com/images/reforged-rune/triumph.png",
    type: ["chuanxac"],
    description:
      "          Đắc Thắng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 8,
    name: "Hiện diện trí tuệ",
    image: "https://www.mobafire.com/images/reforged-rune/presence-of-mind.png",
    type: ["chuanxac"],
    description:
      "                    Hiện diện trí tuệ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 9,
    name: "Huyền thoại: tốc độ đánh",
    image: "https://www.mobafire.com/images/reforged-rune/legend-alacrity.png",
    type: ["chuanxac"],
    description:
      "           Huyền Thoại: Tốc Độ Đánh                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 10,
    name: "Huyền thoại: kháng hiệu ứng",
    image: "https://www.mobafire.com/images/reforged-rune/legend-tenacity.png",
    type: ["chuanxac"],
    description:
      "           Huyền Thoại: Kháng Hiệu Ứng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 11,
    name: "Huyền thoại: hút máu",
    image: "https://www.mobafire.com/images/reforged-rune/legend-bloodline.png",
    type: ["chuanxac"],
    description:
      "           Huyền thoại: hút máu                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 12,
    name: "Nhát chém ân huệ",
    image: "https://www.mobafire.com/images/reforged-rune/coup-de-grace.png",
    type: ["chuanxac"],
    description:
      "           Nhát chém ân huệ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 13,
    name: "Đốn Hạ",
    image: "https://www.mobafire.com/images/reforged-rune/cut-down.png",
    type: ["chuanxac"],
    description:
      "          Đốn hạ                <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 14,
    name: "Chốt chặn cuối cùng",
    image: "https://www.mobafire.com/images/reforged-rune/last-stand.png",
    type: ["chuanxac"],
    description:
      "                    Chốt chặn cuối cùng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 16,
    name: "Sốc Điện",
    image: "https://www.mobafire.com/images/reforged-rune/electrocute.png",
    type: ["apdao"],
    description:
      "           Sốc Điện                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 17,
    name: "Thú Săn Mồi",
    image: "https://www.mobafire.com/images/reforged-rune/predator.png",
    type: ["apdao"],
    description:
      "           Thú Săn Mồi                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 18,
    name: "Thu Thập Hắc Ám",
    image: "https://www.mobafire.com/images/reforged-rune/dark-harvest.png",
    type: ["apdao"],
    description:
      "           Thu Thập Hắc Ám                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 19,
    name: "Mưa Kiếm",
    image: "https://www.mobafire.com/images/reforged-rune/hail-of-blades.png",
    type: ["apdao"],
    description:
      "           Mưa Kiếm                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 20,
    name: "Phát bắn đơn giản",
    image: "https://www.mobafire.com/images/reforged-rune/cheap-shot.png",
    type: ["apdao"],
    description:
      "           Phát bắn đơn giản                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 21,
    name: "Vị máu",
    image: "https://www.mobafire.com/images/reforged-rune/taste-of-blood.png",
    type: ["apdao"],
    description:
      "         Vị máu                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 22,
    name: "Tác động bất chợt",
    image: "https://www.mobafire.com/images/reforged-rune/sudden-impact.png",
    type: ["apdao"],
    description:
      "                    Tác động bất chợt                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 23,
    name: "Mắt thây ma",
    image: "https://www.mobafire.com/images/reforged-rune/zombie-ward.png",
    type: ["apdao"],
    description:
      "           Mắt thây ma                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 24,
    name: "Poro cảnh giới",
    image: "https://www.mobafire.com/images/reforged-rune/ghost-poro.png",
    type: ["apdao"],
    description:
      "           Poro cảnh giới                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 25,
    name: "Thu thập nhãn cầu",
    image:
      "https://www.mobafire.com/images/reforged-rune/eyeball-collection.png",
      type: ["apdao"],
    description:
      "           Thu thập nhãn cầu                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 26,
    name: "Thợ săn tham lam",
    image: "https://www.mobafire.com/images/reforged-rune/ravenous-hunter.png",
    type: ["apdao"],
    description:
      "           Thợ săn tham lam                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 27,
    name: "Thợ săn tài tình",
    image: "https://www.mobafire.com/images/reforged-rune/ingenious-hunter.png",
    type: ["apdao"],
    description:
      "          Thợ săn tài tình                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 28,
    name: "Thợ săn tàn nhẫn",
    image:
      "https://www.mobafire.com/images/reforged-rune/relentless-hunter.png",
      type: ["apdao"],
    description:
      "                    Thợ săn tàn nhẫn                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 29,
    name: "Thợ săn tối thượng",
    image: "https://www.mobafire.com/images/reforged-rune/ultimate-hunter.png",
    type: ["apdao"],
    description:
      "                    Thợ săn tối thượng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 31,
    name: "Triệu Hồi Aery",
    image: "https://www.mobafire.com/images/reforged-rune/summon-aery.png",
    type: ["phapthuat"],
    description:
      "           Triệu Hồi Aery                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 32,
    name: "Thiên Thạch Bí Ẩn",
    image: "https://www.mobafire.com/images/reforged-rune/arcane-comet.png",
    type: ["phapthuat"],
    description:
      "           Thiên Thạch Bí Ẩn                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 33,
    name: "Tăng Tốc Pha",
    image: "https://www.mobafire.com/images/reforged-rune/phase-rush.png",
    type: ["phapthuat"],
    description:
      "           Tăng Tốc Pha                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 34,
    name: "Quả cầu hư không",
    image: "https://www.mobafire.com/images/reforged-rune/nullifying-orb.png",
    type: ["phapthuat"],
    description:
      "           Quả cầu hư không                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 35,
    name: "Dải băng năng lượng",
    image: "https://www.mobafire.com/images/reforged-rune/manaflow-band.png",
    type: ["phapthuat"],
    description:
      "          Dải băng năng lượng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 36,
    name: "Mũ tối thượng",
    image: "https://www.mobafire.com/images/reforged-rune/nimbus-cloak.png",
    type: ["phapthuat"],
    description:
      "                    Mũ tối thượng                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 37,
    name: "Thăng tiến sức mạnh",
    image: "https://www.mobafire.com/images/reforged-rune/transcendence.png",
    type: ["phapthuat"],
    description:
      "           Thăng tiến sức mạnh                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 38,
    name: "Mau lẹ",
    image: "https://www.mobafire.com/images/reforged-rune/celerity.png",
    type: ["phapthuat"],
    description:
      "           Mau lẹ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 39,
    name: "Tập trung tuyệt đối",
    image: "https://www.mobafire.com/images/reforged-rune/absolute-focus.png",
    type: ["phapthuat"],
    description:
      "           Tập trung tuyệt đối                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 40,
    name: "Thiêu rụi",
    image: "https://www.mobafire.com/images/reforged-rune/scorch.png",
    type: ["phapthuat"],
    description:
      "           Thiêu rụi                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 41,
    name: "Thủy trượng phiêu",
    image: "https://www.mobafire.com/images/reforged-rune/waterwalking.png",
    type: ["phapthuat"],
    description:
      "          Thủy trượng phiêu                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 42,
    name: "Cuồng phong tích tụ",
    image: "https://www.mobafire.com/images/reforged-rune/gathering-storm.png",
    type: ["phapthuat"],
    description:
      "                    Cuồng phong tích tụ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 44,
    name: "Quyền Năng Bất Diệt",
    image:
      "https://www.mobafire.com/images/reforged-rune/grasp-of-the-undying.png",
      type: ["kiendinh"],
    description:
      "           Quyền Năng Bất Diệt                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 45,
    name: "Dư Chấn",
    image: "https://www.mobafire.com/images/reforged-rune/aftershock.png",
    type: ["kiendinh"],
    description:
      "           Dư Chấn                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 46,
    name: "Hộ Vệ",
    image: "https://www.mobafire.com/images/reforged-rune/guardian.png",
    type: ["kiendinh"],
    description:
      "           Hộ Vệ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 47,
    name: "Tàn phá hủy diệt",
    image: "https://www.mobafire.com/images/reforged-rune/demolish.png",
    type: ["kiendinh"],
    description:
      "           Tàn phá hủy diệt                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 48,
    name: "Suối nguồn sinh mệnh",
    image: "https://www.mobafire.com/images/reforged-rune/font-of-life.png",
    type: ["kiendinh"],
    description:
      "          Suối nguồn sinh mệnh                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 49,
    name: "Áo choàng gương",
    image: "https://www.mobafire.com/images/reforged-rune/shield-bash.png",
    type: ["kiendinh"],
    description:
      "                    Áo choàng gương                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 50,
    name: "Kiểm soát điều kiện",
    image: "https://www.mobafire.com/images/reforged-rune/conditioning.png",
    type: ["kiendinh"],
    description:
      "           Kiểm soát điều kiện                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 51,
    name: "Ngọn gió thứ hai",
    image: "https://www.mobafire.com/images/reforged-rune/second-wind.png",
    type: ["kiendinh"],
    description:
      "           Ngọn gió thứ hai                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 52,
    name: "Giáp cốt",
    image: "https://www.mobafire.com/images/reforged-rune/bone-plating.png",
    type: ["kiendinh"],
    description:
      "           Giáp cốt                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 53,
    name: "Lan tràn",
    image: "https://www.mobafire.com/images/reforged-rune/overgrowth.png",
    type: ["kiendinh"],
    description:
      "           Lan tràn                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 54,
    name: "Tiếp sức",
    image: "https://www.mobafire.com/images/reforged-rune/revitalize.png",
    type: ["kiendinh"],
    description:
      "          Tiếp sức                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 55,
    name: "Kiên cường",
    image: "https://www.mobafire.com/images/reforged-rune/unflinching.png",
    type: ["kiendinh"],
    description:
      "                    Kiên cường                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 57,
    name: "Nâng Cấp Băng Giá",
    image: "https://www.mobafire.com/images/reforged-rune/glacial-augment.png",
    type: ["camhung"],
    description:
      "           Nâng Cấp Băng Giá                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 58,
    name: "Sách Phép",
    image:
      "https://www.mobafire.com/images/reforged-rune/unsealed-spellbook.png",
      type: ["camhung"],
    description:
      "           Sách Phép                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 59,
    name: "Đòn phủ đầu",
    image: "https://www.mobafire.com/images/reforged-rune/first-strike.png",
    type: ["camhung"],
    description:
      "           Đòn phủ đầu                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 60,
    name: "Tốc biến ma thuật",
    image:
      "https://www.mobafire.com/images/reforged-rune/hextech-flashtraption.png",
      type: ["camhung"],
    description:
      "           Tốc biến ma thuật                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 61,
    name: "Bước chân màu nhiệm",
    image: "https://www.mobafire.com/images/reforged-rune/magical-footwear.png",
    type: ["camhung"],
    description:
      "          Bước chân màu nhiệm                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 62,
    name: "Thời điểm hoàn hảo",
    image: "https://www.mobafire.com/images/reforged-rune/perfect-timing.png",
    type: ["camhung"],
    description:
      "                    Thời điểm hoàn hảo                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },

  {
    id: 63,
    name: "Thị trường tương lai",
    image: "https://www.mobafire.com/images/reforged-rune/futures-market.png",
    type: ["camhung"],
    description:
      "           Thị trường tương lai                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 64,
    name: "Máy dọn lính",
    image:
      "https://www.mobafire.com/images/reforged-rune/minion-dematerializer.png",
      type: ["camhung"],
    description:
      "           Máy dọn lính                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 65,
    name: "Giao hàng bánh quy",
    image: "https://www.mobafire.com/images/reforged-rune/biscuit-delivery.png",
    type: ["camhung"],
    description:
      "           Giao hàng bánh quy                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 66,
    name: "Thấu thị vũ trụ",
    image: "https://www.mobafire.com/images/reforged-rune/cosmic-insight.png",
    type: ["camhung"],
    description:
      "           Thấu thị vũ trụ                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 67,
    name: "Vận tốc tiếp cận",
    image:
      "https://www.mobafire.com/images/reforged-rune/approach-velocity.png",
      type: ["camhung"],
    description:
      "          Vận tốc tiếp cận                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
  {
    id: 68,
    name: "Thuốc thời gian",
    image: "https://www.mobafire.com/images/reforged-rune/time-warp-tonic.png",
    type: ["camhung"],
    description:
      "                    Thuốc thời gian                  <br><br>                  Nó cũng sẽ làm lộ diện bẫy Vô Hình, làm lộ diện kẻ địch Ngụy Trang, và lộ diện (đồng thời vô hiệu hóa) Mắt Xanh của đối thủ.                  <br><br>              Có thể mang theo tối đa 2 Mắt Kiểm Soát. Mắt Kiểm Soát không vô hiệu hóa Mắt Kiểm Soát khác.",
  },
];