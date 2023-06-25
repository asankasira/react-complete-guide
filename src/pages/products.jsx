import {Link} from "react-router-dom";

const PRODS = [
    {id: 'p1', name: 'Product-1'},
    {id: 'p2', name: 'Product-2'},
    {id: 'p3', name: 'Product-3'}
]
export const Products = () => {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODS.map(p => <li key={p.id}><Link to={`${p.id}`}>{p.name}</Link></li>)}
            </ul>
        </>
    )
}