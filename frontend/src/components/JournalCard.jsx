import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Squircle } from "@squircle-js/react"
import mad from "../assets/emojiMad.png"
import sad from "../assets/emojiSad.png"
import worry from "../assets/emojiWorry.png"
import embarressed from "../assets/emojiEmbarressed.png"
import stressed from "../assets/emojiStressed.png"
import happy from "../assets/emojiHappy.png"



export function JournalCard ({journal}) {

    let date = new Date(journal.dateCreated);
    let stringDate = date.toString().slice(4, 15)

    const [currMood, setCurrMood] = useState("")
    const [emoji, setEmoji] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [textColor, setTextColor] = useState("");


    useEffect(() => {
        setCurrMood(journal.mood)
        if (journal.mood == 'angry') {
            setEmoji(mad)
            setBgColor("rgb(249, 230, 224)")
            setTextColor("rgb(209, 112, 83)");
        }
        else if (journal.mood == 'embarrassed') {
            setEmoji(embarressed)
            setBgColor("rgb(214, 249, 246)")
            setTextColor("rgb(87, 156, 149)");

        }
        else if (journal.mood == 'stressed') {
            setEmoji(stressed)
            setBgColor("rgb(250, 225, 238)")
            setTextColor("rgb(205, 92, 146)");
        }
        else if (journal.mood == 'worried') {
            setEmoji(worry)
            setBgColor("rgb(232, 218, 250)")
            setTextColor("rgb(123, 57, 196)");
        }
        else if (journal.mood == 'sad') {
            setEmoji(sad)
            setBgColor("rgb(233, 234, 253)")
            setTextColor("rgb(69, 74, 186)");
        }
        else {
            setEmoji(happy)
            setBgColor("rgb(251, 235, 190)")
            setTextColor("rgb(195, 159, 60)");
        }

    }, [])


    return (
        <>
            <Link to={`/selectedJournal/${journal.id}`} className="">
                    <Squircle
                            cornerRadius={64}
                            cornerSmoothing={1}
                            width={200}
                            height={200}
                            className="flex-col cursor-pointer items-center justify-cente p-5 hover:opacity-85 transition duration-300 ease-in-out shadow-xl"
                            style={{
                                background: bgColor,
                              }}
                            >
                            <div className="flex flex-col items-center justify-center p-2 gap-2">
                                    <img src={emoji} alt="" className="h-16"/>
                                    <div className=" font-bold flex flex-col text-center" style={{ color: textColor}}>
                                        <p className="">{journal.title}</p>
                                        <p>{stringDate}</p>
                                    </div>
                            </div>

                </Squircle>

             </Link>

        </>

    )
}
