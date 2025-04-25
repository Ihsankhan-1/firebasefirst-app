import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddProduct() {
    const context = useContext(myContext);
    const {products,setProducts,addProduct} = context
    return (
        <div> 
            <div className=' flex justify-center items-center h-screen  bg-gray-700'>
                <div className=' bg-gray-800 px-10 py-3 rounded-xl    hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60   overflow-hidden '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                       value={products.title}
                       onChange={(e) => setProducts({ ...products, title: e.target.value })}  
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} 
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} 
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} 
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" 
                       value={products.description}
                       name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-pink-600 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct