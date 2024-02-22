import { BiChevronsRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  return (
    <div className='body-content px-8 py-8 bg-slate-100'>
      <div className='page-title mb-10'>
        <div className='mb-1 text-[26px] font-Heebo500'>Orders</div>
        <ul className='text-xs font-Heebo500 flex items-center space-x-1'>
          <li className='text-muted'>
            <Link to='/admin/products' className='text-hover-primary'>
              Orders
            </Link>
          </li>
          <BiChevronsRight />
          <li className='text-muted'>Orders List</li>
        </ul>
      </div>

      {/* TABLE */}
      <div className='bg-white rounded-t-md rounded-b-md shadow-xs py-4'>
        {/* TABLE HEADER  */}
        <div className='flex items-center justify-between px-8 py-8'>
          <form action='' className=''>
            <input
              type='text'
              className='bg-[#F9FAFB] text-xs py-2.5 rounded-lg px-2 outline-none border w-[25rem] border-[#e5e7eb]'
              placeholder='Search for products'
            />
          </form>
        </div>
        {/* TABLE CONTENT  */}
        {/* <div className='relative overflow-x-auto mx-8'>
          {loading ? (
            <div className='flex items-center justify-center w-full'>
              <div className=' w-full py-20 flex items-center justify-center'>
                <Loader />
              </div>
            </div>
          ) : (
            <table className='w-full text-base text-left text-gray-500'>
              <thead className='bg-white'>
                <tr className='border-b border-gray6 text-xs'>
                  <th
                    scope='col'
                    className='pr-8 py-3 text-xs uppercase font-Heebo600'
                  >
                    Product
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                  >
                    Category
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                  >
                    Brand
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                  >
                    Discount
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 text-xs uppercase font-Heebo600 w-[12%] text-end'
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className='bg-white border-b border-gray6 last:border-0 text-start mx-9 text-sm font-Heebo500 text-[#55585B]'
                  >
                    <td className='pr-8 py-5 whitespace-nowrap'>
                      <Link to='' className='flex items-center space-x-5'>
                        <img
                          className='w-[60px] h-[60px] rounded-md'
                          src={product.image}
                          alt=''
                        />
                        <span className='font-Heebo600 text-sm capitalize'>
                          {product.name}
                        </span>
                      </Link>
                    </td>
                    <td className='px-3 py-3  text-end'>null</td>
                    <td className='px-3 py-3  text-end capitalize'>
                      {product.brand}
                    </td>
                    <td className='px-3 py-3 text-end'>{product.price}</td>
                    <td className='px-3 py-3 text-end'>{product.discount}</td>
                    <td className='flex items-center justify-end py-9 space-x-2'>
                      <Link
                        to={`/admin/edit-product/${product.id}`}
                        className='w-8 h-8 bg-green bg-opacity-90 text-white rounded-md flex items-center justify-center cursor-pointer'
                      >
                        <BiSolidEditAlt className='text-xl' />
                      </Link>
                      <div
                        onClick={() => handleDelete(product.id)}
                        className='w-8 h-8 bg-red bg-opacity-70 text-white rounded-md flex items-center justify-center cursor-pointer'
                      >
                        <BiTrash className='text-xl' />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div> */}
        {/* TABLE FOOTER */}
        {/* <div className='flex justify-between items-center flex-wrap mx-8'>
          <p className='mb-0 text-xs'>Showing 10 Prdouct of 120</p>
          <div className='pagination py-3 flex justify-end items-center  mx-8'>
            <a
              href='#'
              className='inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme'
            >
              <svg
                className='-translate-y-[2px] -translate-x-px'
                width='12'
                height='12'
                viewBox='0 0 12 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.9209 1.50495C11.9206 1.90264 11.7623 2.28392 11.4809 2.56495L3.80895 10.237C3.57673 10.4691 3.39252 10.7447 3.26684 11.0481C3.14117 11.3515 3.07648 11.6766 3.07648 12.005C3.07648 12.3333 3.14117 12.6585 3.26684 12.9618C3.39252 13.2652 3.57673 13.5408 3.80895 13.773L11.4709 21.435C11.7442 21.7179 11.8954 22.0968 11.892 22.4901C11.8885 22.8834 11.7308 23.2596 11.4527 23.5377C11.1746 23.8158 10.7983 23.9735 10.405 23.977C10.0118 23.9804 9.63285 23.8292 9.34995 23.556L1.68795 15.9C0.657711 14.8677 0.0791016 13.4689 0.0791016 12.0105C0.0791016 10.552 0.657711 9.15322 1.68795 8.12095L9.35995 0.443953C9.56973 0.234037 9.83706 0.0910666 10.1281 0.0331324C10.4192 -0.0248017 10.7209 0.00490445 10.9951 0.118492C11.2692 0.232079 11.5036 0.424443 11.6684 0.671242C11.8332 0.918041 11.9211 1.20818 11.9209 1.50495Z'
                  fill='currentColor'
                />
              </svg>
            </a>
            <a
              href='#'
              className='inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme'
            >
              2
            </a>
            <a
              href='#'
              className='inline-block rounded-md w-10 h-10 text-center leading-[33px] border mr-2 last:mr-0 text-white bg-theme border-theme hover:bg-theme hover:text-white hover:border-theme'
            >
              3
            </a>
            <a
              href='#'
              className='inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme'
            >
              4
            </a>
            <a
              href='#'
              className='inline-block rounded-md w-10 h-10 text-center leading-[33px] border border-gray mr-2 last:mr-0 hover:bg-theme hover:text-white hover:border-theme'
            >
              <svg
                className='-translate-y-px'
                width='12'
                height='12'
                viewBox='0 0 12 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.0790405 22.5C0.0793906 22.1023 0.237656 21.7211 0.519041 21.44L8.19104 13.768C8.42326 13.5359 8.60747 13.2602 8.73314 12.9569C8.85882 12.6535 8.92351 12.3284 8.92351 12C8.92351 11.6717 8.85882 11.3465 8.73314 11.0432C8.60747 10.7398 8.42326 10.4642 8.19104 10.232L0.52904 2.56502C0.255803 2.28211 0.104612 1.90321 0.108029 1.50992C0.111447 1.11662 0.269201 0.740401 0.547313 0.462289C0.825425 0.184177 1.20164 0.0264236 1.59494 0.0230059C1.98823 0.0195883 2.36714 0.17078 2.65004 0.444017L10.312 8.10502C11.3423 9.13728 11.9209 10.5361 11.9209 11.9945C11.9209 13.4529 11.3423 14.8518 10.312 15.884L2.64004 23.556C2.43056 23.7656 2.16368 23.9085 1.87309 23.9666C1.58249 24.0247 1.2812 23.9954 1.00723 23.8824C0.733259 23.7695 0.498891 23.5779 0.333699 23.3319C0.168506 23.0858 0.0798928 22.7964 0.0790405 22.5Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default AdminOrders;
