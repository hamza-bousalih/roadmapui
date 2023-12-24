"use client"

import {RoadmapIcon} from "@/components/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";
import Service from "@/services"
import {useEffect, useState} from "react";

export default /*async*/ function RoadmapPage({params: {roadmapId}}) {
    /*let roadmap;
    await Service.Roadmap.findById(roadmapId)
        .then(data => {
            roadmap = data
            console.log(roadmap.start.next)
        })
        .catch(err => console.log(err));*/

    const [roadmap, setRoadmap] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Service.Roadmap.findById(roadmapId);
                setRoadmap(data);
                console.log('Fetched Roadmap:', data);
            } catch (error) {
                console.error('Error fetching roadmap:', error);
            }
        };

        fetchData().then(err => console.log(err));
    }, [roadmapId]);

    return <>
        {roadmap && <div className="roadmap">
            <div className="aside"></div>
            <main>
                <section className="roadmap__detail">
                    <RoadmapIcon className="roadmap__icon"/>
                    <h2 className="roadmap__title">{roadmap.title}</h2>
                    <p className="roadmap__desc">{roadmap.description}</p>
                </section>

                <RoadmapSection data={roadmap.start}/>
            </main>
        </div>}
    </>
}
