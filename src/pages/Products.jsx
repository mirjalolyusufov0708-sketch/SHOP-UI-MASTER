import { useDispatch, useSelector } from "react-redux";
import { newBuy } from "../reducer/cartSlicer";

export const products = [
  {
    id: 1,
    title: "Pen",
    image: "🖊️",
    price: 2000,
  },
  {
    id: 2,
    title: "Pencil",
    image: "✏️",
    price: 4000,
  },
  {
    id: 3,
    title: "Book",
    image: "📕",
    price: 10000,
  },
  {
    id: 4,
    title: "Laptop",
    image: "💻",
    price: 130000,
  },
  {
    id: 5,
    title: "Notebook",
    image: "📓",
    price: 5500,
  },
  {
    id: 6,
    title: "Paper",
    image: "📃",
    price: 10000,
  },
];

function Products() {
  const selector = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();


  console.log(selector);

  return (
    <div className="inner">
      <h1 className="title my-4 text-5xl font-bold text-blue-800">Mahsulotlar</h1>
      <div className="wrapper flex flex-wrap items-center justify-between bg-white rounded-4xl shadow-xl shadow-blue-900 p-5 5">
        {products.length > 0 &&
          products.map((item) => (
            <div className="card w-90 px-4 flex flex-col items-center p-4 4 gap-4 bg-blue-300 rounded-2xl m-4" key={item.id}>
              <p className="card-img text-6xl">{item.image}</p>
              <h4 className="card-title text-2xl font-bold text-blue-600">{item.title}</h4>
              <p className="card-text text-xl font-bold text-blue-600">{item.price}</p>
              <button className="btn bg-blue-600 text-white p-2 3 rounded-2xl" onClick={() => dispatch(newBuy(item))}>Savatchaga qo'shish🛒</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
