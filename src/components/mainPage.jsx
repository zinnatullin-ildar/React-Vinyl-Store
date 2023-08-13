import { useState } from "react";
import api from "../api";

const MainPage = () => {
    const [products] = useState(api.products.fetchAll());

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Название группы</th>
                        <th scope="col">Название альбома</th>
                        <th scope="col">Год издания</th>
                        <th scope="col">Формат</th>
                        <th scope="col">Кондиция</th>
                        <th scope="col">Цена, ₽</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <th scope="row">
                                <img
                                    src={product.imageUrl}
                                    alt={product.title + product.album}
                                    width={100}
                                    height={100}
                                />
                            </th>
                            <td>{product.title}</td>
                            <td>{product.album}</td>
                            <td>{product.year}</td>
                            <td>{product.format}</td>
                            <td>{product.condition}</td>
                            <td>{product.price}</td>
                            <td>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-bookmark-fill"
                                    viewBox="0 0 16 16"
                                    role="button"
                                >
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    role="button"
                                >
                                    В корзину
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MainPage;
