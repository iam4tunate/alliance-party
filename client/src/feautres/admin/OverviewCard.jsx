const OverviewCard = ({ value, title, icon, iconBg }) => {
  return (
    <div className="bg-white p-6 flex justify-between rounded-md shadow-md">
      <div className="space-y-3">
        <p className="text-base font-Heebo500">{title}</p>
        <h4 className="text-3xl font-Heebo600 text-slate-700 mb-1">{value}</h4>
      </div>
      <div>
        <span
          className={`${iconBg} text-lg text-white rounded-full flex items-center justify-center h-12 w-12 shrink-0`}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};
export default OverviewCard;
