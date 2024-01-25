import { PiUsersFour } from "react-icons/pi";
import { FaMale, FaFemale } from "react-icons/fa";
import PASSPORT from "../../assets/images/passport.jpg";
import OverviewBox from "./overviewBox";

const Overview = () => {
  return (
    <div className="bg-[#F1F5F9] h-full px-6 py-8">
      <div className="pb-8">
        <div className="text-2xl font-poppinsSemibold">Dashboard</div>
        <span className="text-sm">Welcome to your dashbaord</span>
      </div>
      <div className="grid grid-cols-4 gap-y-6 gap-x-6">
        <OverviewBox
          value={9000}
          title="Total Members"
          icon={<PiUsersFour className="text-2xl" />}
          iconBg="bg-orange-500"
        />
        <OverviewBox
          value={500}
          title="Male"
          icon={<FaMale className="text-2xl" />}
          iconBg="bg-blue-500"
        />
        <OverviewBox
          value={100}
          title="Female"
          icon={<FaFemale className="text-2xl" />}
          iconBg="bg-red-500"
        />
        <OverviewBox
          value={500}
          title="Without voter's card"
          icon={<PiUsersFour className="text-2xl" />}
          iconBg="bg-black"
        />
        <OverviewBox
          value={700}
          title="Educated Members"
          icon={<PiUsersFour className="text-2xl" />}
          iconBg="bg-green-500"
        />
        <OverviewBox
          value={200}
          title="Uneducated Members"
          icon={<PiUsersFour className="text-2xl" />}
          iconBg="bg-gray-500"
        />
        <OverviewBox
          value={435}
          title="Total Units with members present"
          icon={<PiUsersFour className="text-2xl" />}
          iconBg="bg-blue-500"
        />
      </div>
      <div className="bg-white rounded-md shadow-md py-4 px-3 overflow-x-auto w-[50%] mt-12">
        <table className="">
          <thead className="grid text-sm grid-cols-[2rem_repeat(3,1fr)] text-left gap-x-8 pb-4">
            <th>No</th>
            <th>State</th>
            <th>Total Members</th>
            <th>No Voter's card</th>
          </thead>
          <tbody className="grid text-sm font-poppinsMedium grid-cols-[2rem_repeat(3,1fr)] gap-x-8 border-t border-gray-300 pt-4 pb-4 text-left">
            <td>1</td>
            <td>Abia</td>
            <td>2,400</td>
            <td>300</td>
          </tbody>
          <tbody className="grid text-sm font-poppinsMedium grid-cols-[2rem_repeat(3,1fr)] gap-x-8 border-t border-gray-300 pt-4 pb-4 text-left">
            <td>2</td>
            <td>Adamawa</td>
            <td>20,000</td>
            <td>505</td>
          </tbody>
          <tbody className="grid text-sm font-poppinsMedium grid-cols-[2rem_repeat(3,1fr)] gap-x-8 border-t border-gray-300 pt-4 pb-4 text-left">
            <td>3</td>
            <td>Lagos</td>
            <td>6,500</td>
            <td>1000</td>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Overview;