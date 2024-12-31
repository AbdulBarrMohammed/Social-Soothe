import { Link } from "react-router-dom"


export function Flower ({flower}) {

    return (
        <>
            <Link to={`/selectedFlower/${flower.id}`} >
                <div className={`flex items-center justify-center absolute rounded-full h-7 w-7 shadow-md`}
                    style={{
                        backgroundColor: flower.color,
                        left: `${flower.x}px`,
                        top: `${flower.y}px`,
                    }}

                >
                </div>
            </Link>

        </>
    )
}
