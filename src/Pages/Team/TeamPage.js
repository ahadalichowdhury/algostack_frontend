import React, { Component } from 'react'
import Team from "../Team/Team";
import TeamHero from "../Team/TeamHero";

class TeamPage extends Component {

    render() {
        return (
           <div>
               <TeamHero></TeamHero>
               <Team />
           </div>
        );
    }
}
export default TeamPage;