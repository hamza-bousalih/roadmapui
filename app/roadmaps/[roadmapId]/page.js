"use client"

import {useState, useEffect} from "react"
import {RoadmapIcon} from "@/components/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";
import RoadmapData from "@/services/data";
import AxiosConfig from "@/services/AxiosConfig";

export default function RoadmapPage({params: {roadmapId}}) {
    const [roadmap, setRoadmap] = useState(RoadmapData)

    /*useEffect(() => {
        const fetch = async () => await AxiosConfig.get(`/roadmap/${roadmapId}`)
        fetch()
            .then(data => {
                console.log(data)
                setRoadmap(data)
            })
            .catch(e => console.error(e))
    }, []);*/

    return <>
        <div className="roadmap">
            <div className="aside"></div>
            <main>
                <section className="roadmap__detail">
                    <RoadmapIcon className="roadmap__icon"/>
                    <h2 className="roadmap__title">{roadmap.title}</h2>
                    <p className="roadmap__desc">{roadmap.description}</p>
                </section>

                <RoadmapSection data={roadmap.start}/>
            </main>
        </div>
    </>
}
