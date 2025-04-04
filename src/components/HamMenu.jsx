function HamMenu({ onClick, isOpen, className }){
    {/* 漢堡選單 */}
    return(
        <span
            onClick = {onClick}
            className={`inline-block absolute z-10 w-10 h-10 rounded-full opacity-70 hover:opacity-100 left-4 top-0 md:hidden flex justify-center items-center ${className} `}
        >
            <span className="w-8 h-6 flex flex-col justify-between hover:cursor-pointer">

                {/* 第一條線 */}
                <span 
                    className={` bg-white h-[3px] transition-all duration-400 w-full origin-center rounded ${isOpen
                        ?"opacity-0"
                        :"translate-y-[6px] rotate-[-0deg]"
                    }` }
                > 

                </span>
                {/* 第二條線 */}
                <span
                    className={` bg-white h-[3px] w-full transition-all duration-400 origin-center rounded ${isOpen
                        ?"rotate-45 w-8 translate-y-[5px]"
                        :"translate-y-[3px] rotate-[0deg]"
                    }` }> 

                </span>
                {/* 第三條線 */}
                <span
                    className={`bg-white h-[3px] w-full transition-all duration-400 origin-center rounded ${isOpen
                        ? "rotate-[-45deg] w-8 -translate-y-[6px]"
                        : "rotate-[0deg]"
                    } `}> 
                </span>

            </span>
        </span>
    )
}

export default HamMenu;