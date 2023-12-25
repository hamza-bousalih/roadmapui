"use client"

import {RoadmapIcon} from "@/components/icons"
import "@/styles/roadmap/roadmap-details.css"
import RoadmapSection from "@/components/roadmap/timeline/RoadmapSection";
import Service from "@/services"
import {useEffect, useState} from "react";
// import RoadmapData from "@/services/data";

export default /*async*/ function RoadmapPage({params: {roadmapId}}) {
    /*let roadmap;
    await Service.Roadmap.findById(roadmapId)
        .then(data => {
            roadmap = data
            console.log(roadmap.start.next)
        })
        .catch(err => console.log(err));*/

    const [roadmap, setRoadmap] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Service.Roadmap.findById(roadmapId);
                setRoadmap(data);
                setLoading(false);
                // const res = await fetch("http://localhost:5265/api/roadmap/4")
                // const data = await  res.json()
                console.log('Fetched Roadmap:', data);
            } catch (error) {
                console.error('Error fetching roadmap:', error);
            }
        };

        fetchData().then(err => console.log(err));
    }, [roadmapId]);

    return <>
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
