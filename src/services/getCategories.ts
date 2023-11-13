import {categories} from "@/data/categories";

export const getCategories = async ()=>{
    // const res = await fetch("...")
    //
    // if(!res){
    // throw new Error("Ошибка при получении категорий")
    // }
    //
    // return res.json();

    return categories
}