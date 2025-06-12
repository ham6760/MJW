import React from "react";

const icons = {
    smartStore: () => (
        <>
            <svg className="svg-inline--fa fa-circle fa-stack-2x text-black-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
            <svg className="svg-inline--fa fa-cart-shopping fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
        </>
    ),
    youtube: ()=> (
        <>
            <svg className="svg-inline--fa fa-circle fa-stack-2x text-black-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
            <svg className="svg-inline--fa fa-laptop fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="50" height="50" data-fa-i2svg=""><path fill="White" d="M549.65,124.08a67.44,67.44,0,0,0-47.58-47.58C465.16,64,288,64,288,64S110.84,64,73.93,76.5a67.44,67.44,0,0,0-47.58,47.58C13,161,13,256,13,256s0,95,13.35,131.92a67.44,67.44,0,0,0,47.58,47.58C110.84,448,288,448,288,448s177.16,0,214.07-12.5a67.44,67.44,0,0,0,47.58-47.58C563,351,563,256,563,256S563,161,549.65,124.08ZM231.81,334.47V177.53L364.59,256Z"></path></svg>
        </>
    ),
    instagram: () => (
        <>
            <svg className="svg-inline--fa fa-circle fa-stack-2x text-black-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
            <svg className="svg-inline--fa fa-laptop fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50" data-fa-i2svg=""><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,338.8a82.8,82.8,0,1,1,82.8-82.8A82.89,82.89,0,0,1,224,338.8ZM370.51,139.6a25.11,25.11,0,1,1-25.1-25.1A25.08,25.08,0,0,1,370.51,139.6ZM448,80V432a48.05,48.05,0,0,1-48,48H48A48.05,48.05,0,0,1,0,432V80A48.05,48.05,0,0,1,48,32H400A48.05,48.05,0,0,1,448,80ZM402.67,80a6.7,6.7,0,0,0-6.67-6.67H51.33A6.7,6.7,0,0,0,44.67,80V432a6.7,6.7,0,0,0,6.66,6.67H396a6.7,6.7,0,0,0,6.67-6.67ZM224,125.1a130.9,130.9,0,1,0,130.9,130.9A130.9,130.9,0,0,0,224,125.1Z"></path></svg>
        </>
    ),
};
const IconBlock = ({ label, icon, to, linkLabel }) => {
    const iconComponent = icons[icon];
    if (!iconComponent) return null;

    return (
        <div className="col-md-4 text-center">
            <a href={to} target={"_blank"} className="text-white">
                <span className="fa-stack fa-4x">
                    {iconComponent()}
                </span>
                <h3 className="my-3 roboto text-black">{label}</h3>
                {linkLabel}
            </a>
        </div>
    )
};

export default IconBlock;