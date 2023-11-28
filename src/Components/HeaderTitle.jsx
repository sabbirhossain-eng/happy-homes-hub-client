

const HeaderTitle = ({title}) => {
    return (
        <div className="mx-auto text-center mb-8">
        <p className="text-2xl font-semibold uppercase text-[#f6ab4a] py-4">{title}</p>
        <hr className=" bg-[#4e2c2c] py-[1px]" />
    </div>
    );
};

export default HeaderTitle;