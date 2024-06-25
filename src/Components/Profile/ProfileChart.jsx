const ProfileChart = () => {
  return (
    <div>
      <section
        id="comparison"
        aria-label="QuickEdit vs traditional editor"
        className="bg-slate-50 dark:bg-gray-800 mt-6"
      >
        <div className="mx-auto max-w-7xl">
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white hover:bg-green-100 dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        98%
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white">
                        {" "}
                        ✅ faster than a traditional editor{" "}
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white hover:bg-green-100 dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        85%
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white">
                        💰 more affordable than a traditional editor
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white hover:bg-green-100 dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        120%
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display text-slate-900 dark:text-white">
                        😎 increased efficiency and features
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProfileChart;
