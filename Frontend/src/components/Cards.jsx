function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-80 shadow-xl hover:scale-105 duration-200 bg-white text-black dark:bg-slate-900 dark:text-white dark:border">
        {/* Figure section with background and image contained inside */}
        <figure className="h-48 bg-white dark:bg-white flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <button className="px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200 text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
