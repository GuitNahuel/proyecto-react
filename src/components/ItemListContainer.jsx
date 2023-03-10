import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Data from "../data.json";
const ItemListContainer = () => {
    const { category } = useParams();

    const catFilter = Data.filter((product) => product.category === category);

    return (
        <div>
            {category ? <ItemList product={catFilter} /> : <ItemList product={Data} />}
        </div>
    );
};

export default ItemListContainer