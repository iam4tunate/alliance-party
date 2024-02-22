import { useEffect } from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { setAdminOffer } from '../slices/offerSlice';

const AdminOffers = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.auth?.userInfo.token);
  const { adminOffer, loading } = useSelector((store) => store?.offers);
  const { items } = useSelector((store) => store?.offers.adminOffer);
  console.log(adminOffer);
  console.log('items', items);

  useEffect(() => {
    dispatch(setAdminOffer(token));
  }, [dispatch, token]);

  // const handleOfferStatus()=>{
  // }

  return (
    <div className='w-full px-6 py-6 bg-[#F1F5F9]'>
      <div className='page-title pb-10'>
        <h3 className='mb-0 text-[28px]'>Offers</h3>
        <ul className='text-xs font-Heebo600 flex items-center space-x-3'>
          <li className='breadcrumb-item text-muted'>Offers</li>
          <li className='breadcrumb-item flex items-center'>
            <BiChevronsRight />
          </li>
          <li className='breadcrumb-item text-muted'>Offers List</li>
        </ul>
      </div>

      <div className=' bg-white padX py-6 rounded-lg'>
        {/* TABLE  */}
        {loading ? (
          <div className=' w-full py-20 flex items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <div className='relative overflow-x-auto mx-8'>
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
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                    >
                      Offer
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                    >
                      Offer Trials
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-xs uppercase font-Heebo600 w-[170px] text-end'
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items &&
                    items.map((item) => (
                      <tr
                        key={item.product_id}
                        className='bg-white border-b border-gray6 last:border-0 text-start mx-9 text-sm font-Heebo500 text-[#55585B]'
                      >
                        <td className='pr-8 py-5 whitespace-nowrap'>
                          <Link to='' className='flex items-center space-x-5'>
                            <img
                              className='w-[60px] h-[60px] rounded-md'
                              src={item.product.image}
                              alt=''
                            />
                            <span className='font-Heebo600 text-sm capitalize'>
                              {item.product.name}
                            </span>
                          </Link>
                        </td>
                        <td className='px-3 py-3 text-end'>
                          ₦{item.product.price}
                        </td>
                        <td className='px-3 py-3 text-end capitalize'>
                          ₦{item.offer}
                        </td>
                        <td className='px-3 py-3 text-end'>
                          {item.bargain_count}/3
                        </td>
                        <td className='text-xs text-end'>
                          <div className='text-red bg-red bg-opacity-20 w-fit ml-auto p-2 rounded-full'>
                            {item.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminOffers;
