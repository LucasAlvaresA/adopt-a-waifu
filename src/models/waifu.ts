type WaifuType = "dragon" | "neko" | "vampire";
type WaifuSex = "Male" | "Female"

type Waifu = {
    type: WaifuType;
    image: string;
    name: string;
    anime: string;
    sex: WaifuSex;
};

const data: Waifu[] = [
    {
        type: "dragon",
        image: "kanna.png",
        name: "Kanna",
        anime: "Kobayashi-san no Maid Dragon",
        sex: "Female",
    },
    {
        type: "dragon",
        image: "tohru.jpg",
        name: "Tohru",
        anime: "Kobayashi-san no Maid Dragon",
        sex: "Female",
    },
    {
        type: "dragon",
        image: "lucoa.jpg",
        name: "Lucoa",
        anime: "Kobayashi-san no Maid Dragon",
        sex: "Female",
    },
    {
        type: "dragon",
        image: "elma.png",
        name: "Elma",
        anime: "Kobayashi-san no Maid Dragon",
        sex: "Female",
    },
    {
        type: "neko",
        image: "nekomio.jpeg",
        name: "Neko Mio",
        anime: "K-On!",
        sex: "Female",
    },
    {
        type: "neko",
        image: "blair.png",
        name: "Blair",
        anime: "Soul Eater",
        sex: "Female",
    },
    {
        type: "neko",
        image: "izuna.jpg",
        name: "Hatsuse Izuna",
        anime: "No Game No Life (and no second season)",
        sex: "Female",
    },
    {
        type: "vampire",
        image: "shinobu.jpg",
        name: "Shinobu",
        anime: "Monogatari Series",
        sex: "Female",
    },
    {
        type: "vampire",
        image: "seras.png",
        name: "Seras",
        anime: "Hellsing",
        sex: "Female",
    },
    {
        type: "vampire",
        image: "dio.jpeg",
        name: "Dio",
        anime: "JoJo no Kimyo na Boken",
        sex: "Male",
    },
];

export const Waifu = {
    getAll: (): Waifu[] => {
        return data;
    },
    getFromType: (type: WaifuType): Waifu[] => {
        return data.filter((item) => item.type === type);
    },
    getFromName: (name: string): Waifu[] => {
        return data.filter(
            (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    },
};
