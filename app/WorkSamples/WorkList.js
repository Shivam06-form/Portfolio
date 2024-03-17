import Image from 'next/image'
import Link from 'next/link'
import { Observer } from "@/components/Custom/Observer";
import { CssData, WorkSample } from '../WorkSamples/Data.json' ///// JSON DATA
import React, { useEffect, useRef } from 'react'

const WorkList = () => {


    return (
        <div className="Work" >
            <ul>
                {(WorkSample || []).map((work, index) => {
                    return (
                        <li
                            /////// use second option (index) to find odd number to add different classes  ////////
                            key={work.id} className={`${index % 2 == 0 ? "Work-li-right" : "Work-li-left"} `}>
                            <div className="Work-Detials">
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
                                src={work.image} alt={work.image}
                                className={`work-image`}
                                width={400} height={200} />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default WorkList