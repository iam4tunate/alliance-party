import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Members = () => {
  return (
    <div className="px-8 py-8 bg-slate-100">
      {/* <div className="page-title mb-10">
        <div className="mb-1 text-[26px] font-Heebo500">Reviews</div>
        <ul className="text-xs font-Heebo500 flex items-center space-x-1">
          <li className="text-muted">
            <Link to="/admin/products" className="text-hover-primary">
              Reviews
            </Link>
          </li>
          <BiChevronsRight />
          <li className="text-muted">Reviews List</li>
        </ul>
      </div> */}

      <div className="bg-white rounded-t-md rounded-b-md shadow-xs pt-4 px-6 ">
        <div className="tp-search-box flex items-center justify-betweenpy-4 flex-wrap mb-6">
          <div className="w-[17rem] relative mb-5 md:mb-0 mr-3">
            <input
              className="input h-[44px] w-full pl-14"
              type="text"
              placeholder="Search by member name or id"
            />
          </div>
        </div>
        <div className="overflow-auto 2xl:overflow-visible h-[60vh] w-[60rem]">
          <table className="whitespace-nowrap h-full text-base text-left text-gray-500">
            <thead className="bg-white">
              <tr className="border-b border-x-gray-500 text-sm uppercase">
                <th scope="col" className="pr-8 py-3 ">
                  ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Full name
                </th>
                <th scope="col" className="px-3 py-3">
                  Gender
                </th>
                <th scope="col" className="px-3 py-3">
                  State
                </th>
                <th scope="col" className="px-3 py-3">
                  LGA
                </th>
                <th scope="col" className="px-3 py-3">
                  Ward
                </th>
                <th scope="col" className="px-3 py-3">
                  Unit
                </th>
                <th scope="col" className="px-3 py-3">
                  Party Post
                </th>
                <th scope="col" className="px-3 py-3">
                  Telephone
                </th>
                <th scope="col" className="px-3 py-3">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">member</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">member</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">member</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
              <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                <td className="pr-8  whitespace-nowrap">
                  <a href="#" className="font-Heebo500">
                    100/569/346/001
                  </a>
                </td>
                <td className="px-3 py-3 text-slate-600">Fortunate Ogodu</td>
                <td className="px-3 py-3 text-slate-600">Male</td>
                <td className="px-3 py-3 text-slate-600">Ondo</td>
                <td className="px-3 py-3 text-slate-600">Ose</td>
                <td className="px-3 py-3 text-slate-600">Afo</td>
                <td className="px-3 py-3 text-slate-600">Oke-afo/u.p.e Sch</td>
                <td className="px-3 py-3 text-slate-600">Agent</td>
                <td className="px-3 py-3 text-slate-600">0811419360</td>
                <td className="px-3 py-3 text-slate-600">
                  no 3, Adekunle road, ose
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center flex-wrap text-base">
          <p className="mb-0 mr-3">Showing 10 Prdouct of 120</p>
          <div className="pagination py-3 flex justify-end items-center mr-8">
            <div
              href="#"
              className="flex items-center justify-center rounded-md w-10 h-10 border border-gray mr-6"
            >
              <IoChevronBack />
            </div>
            <span>3/10</span>
            <a
              href="#"
              className="flex items-center justify-center rounded-md w-10 h-10 border border-gray ml-6"
            >
              <IoChevronForward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Members;
