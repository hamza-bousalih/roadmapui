"use client"

import {RoadmapIcon} from "@/components/utils/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";
import Service from "@/services"
import {useEffect, useState} from "react";

export default function RoadmapPage({params: {roadmapId}}) {

    const [roadmap, setRoadmap] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Service.RoadmapService.findById(roadmapId);
                setRoadmap(data);
                setLoading(false);
                // console.log('Fetched Roadmap:', data);
            } catch (error) {
                console.error('Error fetching roadmap:', error);
            }
        };

        fetchData().catch(err => console.log(err));
    }, [roadmapId]);

    return <>
        {loading && <h1>Loading</h1>}
        {(!loading && roadmap) && <div className="roadmap">
            <div className="aside"></div>
            <main>
                <section className="roadmap__detail">
                    <RoadmapIcon className="roadmap__icon"/>
                    <h2 className="roadmap__title">{roadmap.title}</h2>
                    <p className="roadmap__desc">{roadmap.description}</p>
                </section>

                {roadmap.start && <RoadmapSection data={roadmap.start}/>}
            </main>
        </div>}
    </>
}
