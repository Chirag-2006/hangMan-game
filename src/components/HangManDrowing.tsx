
const Head = (
    <div className="w-12 h-12 border-8 rounded-[50%] border-black absolute top-12.5 -right-4.5" />
)

const Body = (
    <div className="w-3 h-24 bg-black absolute  top-24 right-0" />
)

const RightArm = (
    <div className="w-24 h-3 bg-black absolute top-24 -right-20 -rotate-30" />
)

const LeftArm = (
    <div className="w-24 h-3 bg-black absolute top-24 right-0  rotate-30" />
)

const LeftLeg = (
    <div className="w-24 h-3 bg-black  absolute top-55.5 -right-4.5  -rotate-60" />
)

const RightLeg = (
    <div className="w-24 h-3 bg-black absolute top-55.5 -right-16.5  rotate-60" />
)

const HangManDrowing = () => {
    return (
        <div className="relative">
            {LeftArm}
            {Body}
            {RightArm}
            {LeftLeg}
            {RightLeg}
            <div className="h-14 w-3 bg-black top-0 right-0 absolute" />
            <div className="h-3 w-64 bg-black ml-22.5" />
            {Head}
            <div className="h-64 w-3 bg-black ml-22.5" />
            <div className="h-3 w-52 bg-black" />
        </div>
    );
};

export default HangManDrowing;
