import styles from "./Categories.module.scss"
import CategoriesItem from "@/components/CategoriesItem/CategoriesItem";
import {categories} from "@/data/categories";

export default function Categories() {
    return (
        <section>
            {
                categories.map(item => <CategoriesItem key = {item.id} item={item}/>)
            }
        </section>
    )
}