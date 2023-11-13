import styles from "./Categories.module.scss"
import CategoriesItem from "@/components/CategoriesItem/CategoriesItem";
import {getCategories} from "@/services/getCategories";


export default async function Categories() {
    const categories = await getCategories();

    return (
        <section>
            <h1 className="hidden">Сайт-путеводитель по Коста-Рики</h1>
            <h2>Guider</h2>
            <h3>Explore costa rica</h3>
            {
                categories.map(item => <CategoriesItem key = {item.id} item={item}/>)
            }
        </section>
    )
}