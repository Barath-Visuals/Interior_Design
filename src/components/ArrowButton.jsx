export default function Arrow({direction, onClick}) {
    const RightSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 15" fill="none">
            <path d="M1 6.36377C0.447715 6.36377 0 6.81148 0 7.36377C0 7.91605 0.447715 8.36377 1 8.36377V7.36377V6.36377ZM17.7071 8.07088C18.0976 7.68035 18.0976 7.04719 17.7071 6.65666L11.3431 0.292702C10.9526 -0.0978226 10.3195 -0.0978226 9.92893 0.292702C9.53841 0.683226 9.53841 1.31639 9.92893 1.70692L15.5858 7.36377L9.92893 13.0206C9.53841 13.4111 9.53841 14.0443 9.92893 14.4348C10.3195 14.8254 10.9526 14.8254 11.3431 14.4348L17.7071 8.07088ZM1 7.36377V8.36377H17V7.36377V6.36377H1V7.36377Z" fill="black"/>
        </svg>
    )

    const LeftSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ transform: "rotate(-180deg)" }} viewBox="0 0 18 15" fill="none">
                <path d="M1 6.36377C0.447715 6.36377 0 6.81148 0 7.36377C0 7.91605 0.447715 8.36377 1 8.36377V7.36377V6.36377ZM17.7071 8.07088C18.0976 7.68035 18.0976 7.04719 17.7071 6.65666L11.3431 0.292702C10.9526 -0.0978226 10.3195 -0.0978226 9.92893 0.292702C9.53841 0.683226 9.53841 1.31639 9.92893 1.70692L15.5858 7.36377L9.92893 13.0206C9.53841 13.4111 9.53841 14.0443 9.92893 14.4348C10.3195 14.8254 10.9526 14.8254 11.3431 14.4348L17.7071 8.07088ZM1 7.36377V8.36377H17V7.36377V6.36377H1V7.36377Z" fill="black"/>
        </svg>
    )

    return(
        <button 
            onClick={onClick}
            className="absolute top-1/2 bg-white/5 w-[35px] h-[35px] backdrop-blur-md p-2 rounded-full hover:bg-white transition"
            style={{
                left : direction === "left" ? "0.5rem" : undefined,
                right : direction === "right" ? "0.5rem" : undefined,
                transform : "translateY(-50%)"
            }}
        >
            {direction === "left" ? LeftSvg : RightSvg }
        </button>
    )
}