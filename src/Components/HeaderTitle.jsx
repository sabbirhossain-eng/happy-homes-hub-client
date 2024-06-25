

const HeaderTitle = ({title}) => {
    return (
        <div className="mx-auto text-center mb-8">
        <p className="text-2xl font-semibold uppercase text-primary-light py-4">{title}</p>
        <hr className=" bg-secondary-light py-[1px]" />
    </div>
    );
};

export default HeaderTitle;