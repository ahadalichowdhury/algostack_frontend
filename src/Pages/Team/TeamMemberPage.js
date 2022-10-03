import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import TeamMemberHero from './TeamMemberHero'
import TeamMember from './TeamMember'

const TeamMemberPage = () => {
    const {id}= useParams();

    const [members, setMembers]= useState([]);

    useEffect(()=>{
        getMember();
    }, )

    const getMember = async () =>{
        let url = `http://localhost:5000/api/v1/memberdetailbyid/${id}`
        try{
            const res =await axios.get(url)
                setMembers(res.data.data);

        }catch(err){
            alert(err.message)
        }
    }

    return (
        <div>
            {members.map((member, i)=>{
               return (
                   <div key={i}>
                   <TeamMemberHero member={member} />
                   <TeamMember member={member}/>
                   </div>
               )
            })}
        </div>
    );
};

export default TeamMemberPage;
