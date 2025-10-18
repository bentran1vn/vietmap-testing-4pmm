const shops: ShopData[] = [
  {
    STT: 1,
    "Tên lò sấy": "Nhà máy sấy lúa SÁU THO",
    "TP/Huyện": "Huyện Thanh Bình",
    "Địa điểm": "HC4X+F42, Unnamed Road, Thanh Bình, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.556674636154582, 105.44779289321906],
    Rating: 3.8,
    LimitCapacity: 1196,
  },
  {
    STT: 2,
    "Tên lò sấy": "Lò sấy lúa Lệ Hoa",
    "TP/Huyện": "Huyện Lấp Vò",
    "Địa điểm": "227B ấp Hưng Quới 2, Long Hưng A, Lấp Vò, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.35836428631044, 105.65841131617583],
    Rating: 3.7,
    LimitCapacity: 916,
  },
  {
    STT: 3,
    "Tên lò sấy": "Lò Sấy - Nhà máy Lộc Tấn",
    "TP/Huyện": "Huyện Lấp Vò",
    "Địa điểm": "Cầu Lấp Vò, Long Hưng B, Lấp Vò, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.332491684249048, 105.63654236252094],
    Rating: 5,
    LimitCapacity: 522,
  },
  {
    STT: 4,
    "Tên lò sấy": "Lò Sấy lúa Kim Oanh",
    "TP/Huyện": "Huyện Lấp Vò",
    "Địa điểm":
      "207A ấp Hưng Thành Tây, Long Hưng A, Lấp Vò, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.335070968714964, 105.67896263841826],
    Rating: 4.8,
    LimitCapacity: 635,
  },
  {
    STT: 5,
    "Tên lò sấy": "Nhà máy xay lúa - Lò sấy lúa Quốc Danh",
    "TP/Huyện": "Huyện Lai Vung",
    "Địa điểm": "5M95+G4, Đinh Hoà, Lai Vung, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.168888003822527, 105.65780526246947],
    Rating: 4.9,
    LimitCapacity: 1624,
  },
  {
    STT: 6,
    "Tên lò sấy": "Nhà máy sấy lúa xay lúa Thành Nghiệp",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm":
      "6PRH+3MG, ĐT853 Tân Quới, Tân Phú Trung, Châu Thành, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.240438869378682, 105.72923745089568],
    Rating: 4.8,
    LimitCapacity: 725,
  },
  {
    STT: 7,
    "Tên lò sấy": "Lò sấy Trung Hậu",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm":
      "Cầu Số 5, ấp Vĩnh Quới, Vĩnh An, Châu Thành, An Giang 839300, Việt Nam",
    "Tọa độ": [10.442982437166766, 105.16736965235478],
    Rating: 4.6,
    LimitCapacity: 660,
  },
  {
    STT: 8,
    "Tên lò sấy": "Cơ sở sấy lúa Hạnh Phước",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm": "Số 989 Tổ 8, An Thạnh, Châu Thành, Đồng Tháp 81900, Việt Nam",
    "Tọa độ": [10.274713854357742, 105.79973659005721],
    Rating: 3.8,
    LimitCapacity: 1940,
  },
  {
    STT: 9,
    "Tên lò sấy": "Nhà máy sấy lúa Thái Bình",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm": "6QHX+2RJ, Phú Long, Châu Thành, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.227879979376064, 105.79947305270268],
    Rating: 4.2,
    LimitCapacity: 1354,
  },
  {
    STT: 10,
    "Tên lò sấy": "Nhà máy sấy lúa Hữu Nghĩa",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm":
      "7R48+HF7, Nha Mân - Ngã 3 Tân Hựu, Tân Nhuận Đông, Châu Thành, Đồng Tháp, Việt Nam",
    "Tọa độ": [10.256659441346992, 105.81613732015167],
    Rating: 4.4,
    LimitCapacity: 1876,
  },
  {
    STT: 11,
    "Tên lò sấy": "Doanh nghiệp tư nhân Hiệp Phát (Xay xát lúa gạo - Sấy lúa)",
    "TP/Huyện": "TX Gò Công",
    "Địa điểm": "Tân Trung, Gò Công, Tiền Giang, Việt Nam",
    "Tọa độ": [10.417363911867602, 106.67372702014461],
    Rating: 4.4,
    LimitCapacity: 884,
  },
  {
    STT: 12,
    "Tên lò sấy": "Nam Hải 3 Gia Công Sấy Xay",
    "TP/Huyện": "Huyện Cái Bè",
    "Địa điểm": "9268+3H8, TT. Cái Bè, Cái Bè, Tiền Giang, Việt Nam",
    "Tọa độ": [10.360275857631544, 106.01636513449],
    Rating: 3.8,
    LimitCapacity: 1871,
  },
  {
    STT: 13,
    "Tên lò sấy": "Lò sấy Bảy Thiên",
    "TP/Huyện": "Huyện Cái Bè",
    "Địa điểm": "GX6W+525, ĐT865, Hậu Mỹ Bắc B, Cái Bè, Tiền Giang, Việt Nam",
    "Tọa độ": [10.510521548616328, 105.9950735656148],
    Rating: 3.7,
    LimitCapacity: 1060,
  },
  {
    STT: 14,
    "Tên lò sấy": "Lò sấy - Nhà máy Đoàn Kết 2",
    "TP/Huyện": "Huyện Cái Bè",
    "Địa điểm": "CWCQ+3PR, Thiện Trung, Cái Bè, Tiền Giang, Việt Nam",
    "Tọa độ": [10.42043300994279, 105.93924104898723],
    Rating: 4,
    LimitCapacity: 1159,
  },
  {
    STT: 15,
    "Tên lò sấy": "Cơ sở xay sấy lúa gạo Đồng Tâm",
    "TP/Huyện": "Huyện Cái Bè",
    "Địa điểm": "929C+26P, An Cư, Cái Bè, Tiền Giang, Việt Nam",
    "Tọa độ": [10.367686759863254, 106.02054541340429],
    Rating: 4.4,
    LimitCapacity: 787,
  },
  {
    STT: 16,
    "Tên lò sấy": "Nhà máy sấy & xay lúa Dũng Kiều",
    "TP/Huyện": "Huyện Cái Bè",
    "Địa điểm": "9X32+RFV, QL1A, Mỹ Đức Đông, Cái Bè, Tiền Giang, Việt Nam",
    "Tọa độ": [10.354700264014742, 105.95122571525089],
    Rating: 3.9,
    LimitCapacity: 1032,
  },
  {
    STT: 17,
    "Tên lò sấy": "Nhà máy sấy xay lúa Quốc Đạt",
    "TP/Huyện": "Huyện Châu Thành",
    "Địa điểm":
      "G82W+JC2, ĐT866, Tân Hội Đông, Châu Thành, Tiền Giang, Việt Nam",
    "Tọa độ": [10.501668762334951, 106.34596712014364],
    Rating: 4.1,
    LimitCapacity: 1244,
  },
  {
    STT: 18,
    "Tên lò sấy": "Lò sấy lúa Thủy Linh",
    "TP/Huyện": "Huyện Cai Lậy",
    "Địa điểm": "Ấp Láng Biển, Mỹ Phước Tây, Cai Lậy, Tiền Giang, Việt Nam",
    "Tọa độ": [10.487752524974201, 106.12708076132189],
    Rating: 4.5,
    LimitCapacity: 1204,
  },
  {
    STT: 19,
    "Tên lò sấy": "Cơ sở sấy lúa Thanh Thắng",
    "TP/Huyện": "Huyện Cai Lậy",
    "Địa điểm": "Mỹ Phước Tây, Cai Lậy, Tiền Giang, Việt Nam",
    "Tọa độ": [10.474614076230768, 106.10490460849465],
    Rating: 3.7,
    LimitCapacity: 1872,
  },
  {
    STT: 20,
    "Tên lò sấy": "Lò sấy lúa Út Phong",
    "TP/Huyện": "Huyện Chợ Gạo",
    "Địa điểm":
      "82 ấp Mỹ Trường, Mỹ Tịnh An, Chợ Gạo, Tiền Giang 84500, Việt Nam",
    "Tọa độ": [10.4536720030313, 106.37761487105195],
    Rating: 4.8,
    LimitCapacity: 1670,
  },
];

export interface ShopData {
  STT: number;
  "Tên lò sấy": string;
  "TP/Huyện": string;
  "Địa điểm": string;
  "Tọa độ": number[];
  Rating: number;
  LimitCapacity: number;
  Random?: number;
}

export default shops;
