// import { FaPlus } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import USER1 from "../../assets/images/bidder1.png";
import USER2 from "../../assets/images/bidder2.png";
import USER3 from "../../assets/images/bidder3.png";
import USER4 from "../../assets/images/bidder4.png";

const OverviewBox = ({ value, title, icon, iconBg }) => {
  return (
    <div className="widget-item bg-white h-[8rem] px-4 flex items-center justify-between rounded-md">
      <div className="flex flex-col gap-y-2">
        <h4 className="text-3xl font-Heebo600 text-slate-700 mb-1">{value}</h4>
        <p className="text-base font-Heebo500">{title}</p>
      </div>
      <div>
        <span
          className={`${iconBg} text-lg text-white rounded-full flex items-center justify-center h-14 w-14 shrink-0`}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="body-content px-6 py-8 bg-slate-100">
      {/* BOXES  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <OverviewBox
          value="10M"
          title="Total Members"
          icon={<FaUsers className="text-2xl" />}
          iconBg="bg-primary"
        />
        <OverviewBox
          value="22"
          title="Upcoming Events"
          icon={<FaCalendarAlt className="text-2xl" />}
          iconBg="bg-secondary"
        />
        <OverviewBox
          value="4.5M"
          title="Total Transactions"
          icon={<FaCreditCard className="text-2xl" />}
          iconBg="bg-blue-700"
        />
        <OverviewBox
          value="65K"
          title="Total Transactions"
          icon={<MdOutlineVerifiedUser className="text-2xl" />}
          iconBg="bg-dark"
        />
      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* TRANSACTIONS */}
        <div className="bg-white px-6 py-8 col-span-12 xl:col-span-4 2xl:col-span-3 rounded-md">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-Heebo500 tracking-wide text-slate-700 text-lg mb-0 leading-none">
              Transactions
            </h2>
            <span className="text-sm text-blue-500 border-b border-blue-500 border-dotted capitalize font-Heebo500">
              View All
            </span>
          </div>
          <div className="space-y-7 overflow-x-auto 2xl:overflow-visible">
            <div className="m-2 mb:sm-0 flex items-center space-x-4">
              <img
                className="rounded-full w-10 h-10"
                src={USER1}
                alt="avatar"
              />
              <div className="text-base">
                <h4 className="text-slate-700 mb-[6px] font-Heebo500">
                  Adeoluwa Adekunle
                </h4>
                <div className="flex items-center gap-x-6">
                  <p className="font-Heebo500">1,000</p>
                  <p className="text-sm text-slate-400">Monthly Due</p>
                </div>
              </div>
            </div>
            <div className="m-2 mb:sm-0 flex items-center space-x-4">
              <img
                className="rounded-full w-10 h-10"
                src={USER2}
                alt="avatar"
              />
              <div className="text-base">
                <h4 className="text-slate-700 mb-[6px] font-Heebo500">
                  Enitan Ogunleye
                </h4>
                <div className="flex items-center gap-x-6">
                  <p className="font-Heebo500">1,000</p>
                  <p className="text-sm text-slate-400">Monthly Due</p>
                </div>
              </div>
            </div>
            <div className="m-2 mb:sm-0 flex items-center space-x-4">
              <img
                className="rounded-full w-10 h-10"
                src={USER3}
                alt="avatar"
              />
              <div className="text-base">
                <h4 className="text-slate-700 mb-[6px] font-Heebo500">
                  Folasade Adebayo
                </h4>
                <div className="flex items-center gap-x-6">
                  <p className="font-Heebo500">1,000</p>
                  <p className="text-sm text-slate-400">Monthly Due</p>
                </div>
              </div>
            </div>
            <div className="m-2 mb:sm-0 flex items-center space-x-4">
              <img
                className="rounded-full w-10 h-10"
                src={USER4}
                alt="avatar"
              />
              <div className="text-base">
                <h4 className="text-slate-700 mb-[6px] font-Heebo500">
                  Oluwafemi Akinola
                </h4>
                <div className="flex items-center gap-x-6">
                  <p className="font-Heebo500">1,000</p>
                  <p className="text-sm text-slate-400">Monthly Due</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ONDO STATE DATA */}
        <div className="bg-white px-6 py-8 col-span-12 xl:col-span-8 2xl:col-span-6 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-Heebo500 tracking-wide text-slate-700 text-lg">
              Data pertaining to Ondo state
            </h3>
          </div>
          {/* <div className="overflow-x-scroll 2xl:overflow-visible">
            <div className="w-[700px] 2xl:w-full py-4">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="bg-white">
                  <tr className="border-b border-gray6 text-sm">
                    <th scope="col" className="pr-8 py-3 uppercase">
                      States
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Product ID
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Price
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase w-14">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Apple MacBook Pro 17&quot;
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      #XY-25G
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      $2999.00
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[11px]  text-success px-3 py-1 rounded-md leading-none bg-success/10 font-Heebo500">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-3 w-14">
                      <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-sm font-Heebo500 py-2 px-4 rounded-md ">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Gigabyte Gaming Monitor 4K
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      #JK-10A
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      $599.00
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[11px]  text-danger px-3 py-1 rounded-md leading-none bg-danger/10 font-Heebo500">
                        Disabled
                      </span>
                    </td>
                    <td className="px-3 py-3 w-14">
                      <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-sm font-Heebo500 py-2 px-4 rounded-md ">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Logitech G502 Hero Mouse
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      #LG-502
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      $1199.59
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[11px]  text-warning px-3 py-1 rounded-md leading-none bg-warning/10 font-Heebo500">
                        Disabled
                      </span>
                    </td>
                    <td className="px-3 py-3 w-14">
                      <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-sm font-Heebo500 py-2 px-4 rounded-md ">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Galaxy S22 Ultra Gray
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      #GL-S22
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      $1800.00
                    </td>
                    <td className="px-3 py-3">
                      <span className="text-[11px]  text-success px-3 py-1 rounded-md leading-none bg-success/10 font-Heebo500">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-3 w-14">
                      <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-sm font-Heebo500 py-2 px-4 rounded-md ">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
          <div className="overflow-x-auto 2xl:overflow-visible">
            <div className="w-[700px] h-[300px] 2xl:w-full py-4">
              <table className="w-full text-base text-left text-gray-500">
                <thead className="bg-white text-sm">
                  <tr className="border-b border-gray-400">
                    <th scope="col" className="pr-8 py-3 uppercase">
                      Ward
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Units
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Members
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Male
                    </th>
                    <th scope="col" className="px-3 py-3 uppercase">
                      Female
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Afo
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">9</td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      266
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      100
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      166
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Aheri
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">22</td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      400
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      200
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      200
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Ajue
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">23</td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      200
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      112
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">88</td>
                  </tr>
                  <tr className="bg-white border-b border-gray6 last:border-0 text-start">
                    <td className="pr-8  whitespace-nowrap">
                      <a
                        href="#"
                        className="font-Heebo500 text-heading text-hover-primary"
                      >
                        Akungba Ii
                      </a>
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">13</td>
                    <td className="px-3 py-3 font-normal text-slate-600">
                      100
                    </td>
                    <td className="px-3 py-3 font-normal text-slate-600">60</td>
                    <td className="px-3 py-3 font-normal text-slate-600">40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recently Registered  */}
        <div className="col-span-12 overflow-auto 2xl:overflow-visible">
          <div className="w-[1400px] 2xl:w-full">
            <div className="grid grid-cols-12 border-b border-gray rounded-t-md bg-white px-10 py-5">
              <div className="table-information col-span-4">
                <h3 className="font-Heebo500 tracking-wide text-slate-800">
                  Recently Registered Members
                </h3>
              </div>
            </div>
            <div className="">
              <div className="relative rounded-b-md bg-white px-10 py-7 ">
                <table className="w-full text-base text-left text-gray-500">
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
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
                      <td className="px-3 py-3 text-slate-600">
                        Fortunate Ogodu
                      </td>
                      <td className="px-3 py-3 text-slate-600">Male</td>
                      <td className="px-3 py-3 text-slate-600">Ondo</td>
                      <td className="px-3 py-3 text-slate-600">Ose</td>
                      <td className="px-3 py-3 text-slate-600">Afo</td>
                      <td className="px-3 py-3 text-slate-600">
                        Oke-afo/u.p.e Sch
                      </td>
                      <td className="px-3 py-3 text-slate-600">Agent</td>
                      <td className="px-3 py-3 text-slate-600">0811419360</td>
                      <td className="px-3 py-3 text-slate-600">
                        no 3, Adekunle road, ose
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
