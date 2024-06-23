import CountUp from "react-countup";
import adopted from '../../../assets/StatComponent/adopted.png';
import donations from '../../../assets/StatComponent/donations.png';
import progress from '../../../assets/StatComponent/progress.png';

const CountUpStat = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 w-full mx-auto lg:text-nowrap">
          {/* card-1 */}
          <div className="flex justify-between items-center p-4 bg-white dark:bg-card-dark rounded-lg shadow-lg w-auto mx-auto gap-10">
            <div className=" flex-1">
              <img className="bg-green-200 w-24 rounded" src={adopted} alt="" />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-5xl font-bold text-primary-light">
                <CountUp end={879314} duration={3.5} />
              </h2>
              <div className="space-y-2">
                <h3 className="text-gray-800 dark:text-in-dark text-xl font-semibold">
                  Total pets adopted
                </h3>
                <button className=" font-medium text-white btn-sm bg-primary-light rounded-md">Boop for info</button>
              </div>
            </div>
          </div>
      {/* card-2 */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-card-dark rounded-lg shadow-lg w-auto mx-auto gap-10">
            <div className=" flex-1">
              <img className="bg-green-200 w-24 rounded" src={donations} alt="" />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-5xl font-bold text-primary-light">
              $<CountUp end={13.8} decimals={1} duration={3.5} /> million
              </h2>
              <div className="space-y-2">
                <h3 className="text-gray-800 dark:text-in-dark text-xl font-semibold">
                In food & product donations
                </h3>
                <button className=" font-medium text-white btn-sm bg-primary-light rounded-md">Boop for info</button>
              </div>
            </div>
          </div>
      {/* card-3 */}
      <div className="flex justify-between items-center p-4 bg-white dark:bg-card-dark rounded-lg shadow-lg w-auto mx-auto gap-10">
            <div className=" flex-1">
              <img className="bg-green-200 w-24 rounded" src={progress} alt="" />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-5xl font-bold text-primary-light">
              <CountUp end={12} duration={3.5} />  hairy
              </h2>
              <div className="space-y-2">
                <h3 className="text-gray-800 dark:text-in-dark text-xl font-semibold">
                New innovations in progress
                </h3>
                <button className=" font-medium text-white btn-sm bg-primary-light rounded-md">Boop for info</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default CountUpStat;
