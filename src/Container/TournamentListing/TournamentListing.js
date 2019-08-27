import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTournaments } from '../../Modules/actions';
import TournamentItem from './TournamentItem/TournamentItem';

class TournamentListing extends Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.getTournaments();
    }
 
    render() {
        return (
            <div>
                <TournamentItem />
            </div>
        )
    }
}


const mapDispatchToProps = {
    getTournaments: getTournaments
};

TournamentListing = connect(
    null,
    mapDispatchToProps,
)(TournamentListing);

export default TournamentListing;
