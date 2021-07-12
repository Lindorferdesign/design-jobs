import React from "react";
import styled from "styled-components";
import tw from 'twin.macro'

function JobCard(props) {
    return (
        <JobCardSingle>
            <div className="compoany-logo shadow-md rounded-full w-40 overflow-hidden h-[100px] w-[100px] mb-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"></img>
            </div>
            <JobTitle><h1>{props.title} {props.country}</h1></JobTitle>
            <div className="job-hours">Full-time</div>
            <JobDescription></JobDescription>
            <div className="flex">
                <JobCountry>Linz</JobCountry>
                <JobCountry>Linz</JobCountry>
                <TestTw>TEST</TestTw>
            </div>
        </JobCardSingle>
    )
}

export default JobCard


const JobCardSingle = styled.div `
    p-6
    shadow-md
    w-120
    hover:shadow-2xl
    transition-all
    duration-300
`;

const JobTitle = styled.div`
    text-2xl
    font-bold
    mb-4
`;

const JobCountry = styled.div`
    px-4
    py-1
    bg-gray-100
    rounded-full
    w-min
    mr-2
`;

const JobDescription = styled.div`

`;

const TestTw = styled.div`
    ${tw`flex justify-center items-center h-screen`}
`;