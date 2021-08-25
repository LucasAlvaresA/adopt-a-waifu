type WaifuType = "dragon" | "neko" | "vampire";
type WaifuSex = "Male" | "Female"

type Waifu = {
    type: WaifuType;
    image: string;
    name: string;
    color: string;
    sex: WaifuSex;
};

const data: Waifu[] = [
    {
        type: "dragon",
        image: "pastor-alemao.jpg",
        name: "Pastor-alemão",
        color: "Amarelo e Preto",
        sex: "Male",
    },
    {
        type: "dragon",
        image: "labrador.jpg",
        name: "Labrador-retriever",
        color: "Branco",
        sex: "Male",
    },
    {
        type: "dragon",
        image: "zwergspitz.jpg",
        name: "Zwergspitz",
        color: "Amarelo",
        sex: "Female",
    },
    {
        type: "dragon",
        image: "husky.jpg",
        name: "Husky Siberiano",
        color: "Branco e Preto",
        sex: "Male",
    },
    {
        type: "dragon",
        image: "golden.jpg",
        name: "Golden Retriever",
        color: "Amarelo",
        sex: "Male",
    },
    {
        type: "dragon",
        image: "poodle.jpg",
        name: "Poodle",
        color: "Branco",
        sex: "Female",
    },
    {
        type: "dragon",
        image: "bulldog.jpg",
        name: "Bulldog",
        color: "Branco e Amarelo",
        sex: "Male",
    },
    {
        type: "neko",
        image: "persa.jpg",
        name: "Persa",
        color: "Amarelo",
        sex: "Male",
    },
    {
        type: "neko",
        image: "mainecoon.jpg",
        name: "Maine Coon",
        color: "Preto e Branco",
        sex: "Male",
    },
    {
        type: "neko",
        image: "bengal.jpg",
        name: "Bengal",
        color: "Branco, Preto e Amarelo",
        sex: "Female",
    },
    {
        type: "neko",
        image: "siames.jpg",
        name: "Siamês",
        color: "Amarelo e Preto",
        sex: "Male",
    },
    {
        type: "neko",
        image: "sphynx.jpg",
        name: "Sphynx",
        color: "Branco",
        sex: "Male",
    },
    {
        type: "vampire",
        image: "neon.jpg",
        name: "Tetra Neon",
        color: "Vermelho e Azul",
        sex: "Male",
    },
    {
        type: "vampire",
        image: "matogrosso.jpg",
        name: "Mato Grosso",
        color: "Laranja",
        sex: "Male",
    },
    {
        type: "vampire",
        image: "limpavidro.jpg",
        name: "Limpa Vidro",
        color: "Verde e Branco",
        sex: "Male",
    },
    {
        type: "vampire",
        image: "tanictis.jpg",
        name: "Tanictis",
        color: "Vermelho",
        sex: "Male",
    },
    {
        type: "vampire",
        image: "acara.jpg",
        name: "Acará Bandeira",
        color: "Preto",
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
