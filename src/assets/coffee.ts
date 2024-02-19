
export type CoffeeType = {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
export const coffeeArr:CoffeeType[] = [
  {
    "id": 0,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3502728/83eee58ac1c8a19076406c204dcdc14a/orig",
    "title": "Американо",
    "subtitle": "",
    "types": [0, 1],
    "sizes": [200, 300, 500],
    "price": 300,
    "category": 1,
    "rating": 5
  },
  {
    "id": 1,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3518584/e8899abcfd055e09c43cbd0e66be80d1/orig",
    "title": "Капучино",
    "subtitle": "Апельсин-Корица",
    "types": [0, 1],
    "sizes": [300, 500],
    "price": 400,
    "category": 2,
    "rating": 5
  },
  {
    "id": 2,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3569651/f663938f1baae8c4a04410040ebc76c3/orig",
    "title": "Латте",
    "subtitle": 'Вишня в шоколаде',
    "types": [0, 1],
    "sizes": [300, 500],
    "price": 430,
    "category": 3,
    "rating": 4
  },
  {
    "id": 3,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3806023/8c9081edbef594e01f48d3d353148c59/orig",
    "title": "Раф",
    "subtitle": 'кокосовый',
    "types": [0, 1],
    "sizes": [200, 300, 500],
    "price": 540,
    "category": 5,
    "rating": 4
  },
  {
    "id": 4,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3439028/8e7b1f22a47c426a7aad1658319e700f/orig",
    "title": "Раф",
    "subtitle": 'пряный',
    "types": [0, 1],
    "sizes": [200, 300, 500],
    "price": 500,
    "category": 5,
    "rating": 4
  },
  {
    "id": 5,
    "imageUrl": "https://avatars.mds.yandex.net/get-eda/3790679/c72360578653b390b607fac9a602f730/orig",
    "title": "Чай",
    "subtitle": 'Малина-грейпфрут',
    "types": [0, 1],
    "sizes": [200, 300, 500],
    "price": 300,
    "category": 4,
    "rating": 5
  },
]