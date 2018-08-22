import React, { Component } from 'react';
import { cards, days } from './cards';
import './App.css';

class App extends Component {

    state = cards();

    isToday = (day) => {
        const today = new Date();
        return day === today.toDateString()
    };

    checkImage = () => {
        
    };

    toggleCard = (i) => {
       this.setState({['showCard' + i]: !this.state['showCard' + i], showCard: i})
        console.log(this.state)
    };

    render() {
        const chooseClass = (day) => {
            let name;
            let full;

            if (day.date > 12) {
                name = 'july'
            } else {
                name = 'august'
            }

            if (day.full === true) {
                full = 'full'
            } else {
                full = 'free'
            }

            return 'button ' + name + ' ' + full
        };

        return (
            <div className="App">
                <header className="App-header" style={{  backgroundImage: `url(${this.checkImage})`}}>
                  <img src={'http://www.clker.com/cliparts/a/Q/s/J/Y/C/yellow-sun-swirl.svg.med.png'} className="App-logo" alt="logo" />
                  <h1 className="App-title">Mik & Luc go to Italia</h1><img src={'https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif'} alt="parrot" className="parrot"/>
                  <div className="dates">
                      {days.map((day, i) => (
                          <button
                              key={'showCard' + i}
                              className={chooseClass(day)}
                              onClick={() => this.toggleCard(i)}
                          >
                              <p>{day.day}</p>
                              <p>{day.date}</p>
                          </button>
                      ))}
                  </div>
                </header>
                <div>
                    {days.map((day, i) => (
                        <div key={i} className={(this.state.showCard === i || this.isToday(day.fullDate)) ? '' : 'hidden'}>
                            {day.location && <p className="today text">Today we are in {day.location} </p>}
                            {day.itinerary && (
                                <div style={{backgroundImage: `url(${day.image})`}} className="content">
                                    <div className="button-links">
                                        <a className="button-link" href={day.itinerary.map} target="_blank">Go to map</a>
                                        {day.itinerary.transportation && <a className="button-link" href={day.itinerary.transportation}>How to get there</a> }
                                    </div>
                                    <div className="lists">
                                        <ul className="text list">Things to do:
                                            {day.itinerary.thingsToDo.map(thing => <li key={thing}>{thing}</li>)}
                                        </ul>
                                        <ul className="text list">Useful Links:
                                            {day.usefulLinks ? day.usefulLinks.map(thing => <li key={thing}><a href={thing.url}>{thing.name}</a></li>) : ''}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
