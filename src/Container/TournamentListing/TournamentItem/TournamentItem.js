import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TournamentItem.css';
import LinearProgress from '@material-ui/core/LinearProgress';

let TournamentItem = ({tournaments}) => {

        return (

                    tournaments ? (
                        tournaments.map((tournament, i) => (
                            <div key={i} className='card'>
                                <div className='cardHeader'>{tournament.name}</div>
                                <img style={{ height: '50px' }}
                                    src={tournament.arenaLogo}
                                />
                                <div className='cardMain'>
                                    <div style={ { float: 'left'}}>Game: {tournament.gameName}</div>
                                    <div style={{ float: 'center' }}>TotalPrice: {tournament.totalWinnings}</div>
                                    <div style={{ float: 'right' }}>Entry Fee: {tournament.entryFee}</div>
                                </div>
                                <div className='cardFooter'>
                                    <LinearProgress style={{ flexGrow: 1 }} color="secondary" variant="determinate" value={(tournament.currentPlayers / tournament.totalPlayers) * 100} />
                                </div>

                    
                            </div>
                        ))
                    ) : ''

        )
}

const mapStateToProps = (state) => ({
    tournaments: state.tournaments,
})

TournamentItem = connect(
    mapStateToProps,
    null
)(TournamentItem)

export default TournamentItem;