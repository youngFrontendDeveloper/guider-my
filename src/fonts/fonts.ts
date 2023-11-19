import {Lusitana, Roboto} from "next/font/google";

//  Шрифт основной для всего проекта
export const roboto = Roboto({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin", "cyrillic"],
    display: "swap",
    style: ["italic", "normal"],
    fallback: ['system-ui', 'arial', "sans-serif"]

});

//  Шрифт дополнительный для отдельных элементов
export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    fallback: ['system-ui', "Times New Roman", "serif"],
});