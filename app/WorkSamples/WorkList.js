import Image from 'next/image'
import Link from 'next/link'
import { Observer } from "@/components/Custom/Observer";
import { CssData, WorkSample } from '../WorkSamples/Data.json'
import React, { useEffect, useRef } from 'react'

const WorkList = () => {

    const RefImg = useRef([]);
    let current
    let ObserverImg

    const addToRef = (index) => {
        current = { current: RefImg.current[index] }
        console.log(current.current)
    }


    return (
        <div className="Work" >
            <ul>
                {(WorkSample || []).map((work, index) => {
                    ObserverImg = Observer({ RefProp: RefImg.current[index] })
                    console.log(ObserverImg)
                    addToRef(index)
                    return (
                        <li
                            ref={(element) => RefImg.current.push(element)}
                            key={work.id} className={`${index % 2 == 0 ? "Work-li-right" : "Work-li-left"} `}>
                            {/* <button onClick={() => addToRef(index)}>Focus</button> */}
                            <div className={` "Work-Detials"}`} >
                                <h4>{work.Name}</h4>
                                <summary style={{ color: "black" }}>{work.summery}</summary>
                                <Link
                                    href={work.Link}
                                    target="_blank"
                                >


                                    {work.Link}
                                </Link>{" "}
                            </div>

                            <Image
                                onClick={() => {
                                    addToRef(index)
                                }}
                                src={work.image} alt={work.image}

                                className={`${(ObserverImg ? !ObserverImg.showDetials : false) ? "work-image" : "hidden-work-img"} `}
                                width={400} height={200} />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default WorkList