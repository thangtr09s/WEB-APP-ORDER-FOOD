import CashIcon from "assets/icons/CashIcon";

interface TopMovieItemProps {
  heading: string;
  data: any;
}

const TopMovieItem = ({ heading, data }: TopMovieItemProps) => {
  return (
    <div>
      <p className="mb-2 font-bold">{heading}</p>

      {data?.map((el: any, idx: number) => (
        <div className="bg-white shadow" key={idx}>
          <div className="flex p-2 border-b-[1px] flex-between border-b-slate-200">
            <p className="text-sm">{el.name}</p>

            <div className="flex px-2 py-1 min-w-[110px] justify-start text-white rounded-md bg-info">
              <CashIcon className="w-4 h-4" />
              <span className="ml-1 text-xs">{el.total}</span>
            </div>
          </div>
        </div>
      ))}

      {/* {data.length <= 0 && <p className="text-sm font-normal text-gray-600">Không có sản phẩm nào.</p>} */}
    </div>
  );
};

export default TopMovieItem;
