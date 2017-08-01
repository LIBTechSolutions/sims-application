'use strict'
import React from 'react'
import classnames from 'classnames'
import GradeOne from './GradeOne'
import GradeTwo from './GradeTwo'
import GradeThree from './GradeThree'
import GradeFour from './GradeFour'
import GradeFive from './GradeFive'
import GradeSix from './GradeSix'
import GradeSeven from './GradeSeven'
import GradeEight from './GradeEight'
import GradeNine from './GradeNine'
import GradeTen from './GradeTen'
import GradeEleven from './GradeEleven'
import GradeTwelve from './GradeTwelve'

export default class AppHome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      view: 'full-view'
    }
    this.handleFirstGrade = this.handleFirstGrade.bind(this)
    this.handleSecondGrade = this.handleSecondGrade.bind(this)
    this.handleThirdGrade = this.handleThirdGrade.bind(this)
    this.handleFourthGrade = this.handleFourthGrade.bind(this)
    this.handleFifthGrade = this.handleFifthGrade.bind(this)
    this.handleSixthGrade = this.handleSixthGrade.bind(this)
    this.handleSevenGrade = this.handleSevenGrade.bind(this)
    this.handleEightGrade = this.handleEightGrade.bind(this)
    this.handleNineGrade = this.handleNineGrade.bind(this)
    this.handleTenGrade = this.handleTenGrade.bind(this)
    this.handleElevenGrade = this.handleElevenGrade.bind(this)
    this.handleTwelveGrade = this.handleTwelveGrade.bind(this)
    this.closeProfile = this.closeProfile.bind(this)
  }
  closeProfile () {
    this.setState({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }

  handleFirstGrade () {
    this.setState({
      view: 'split-view',
      first: true,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSecondGrade () {
    this.setState({
      view: 'split-view',
      second: true,
      first: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleThirdGrade () {
    this.setState({
      view: 'split-view',
      third: true,
      first: false,
      second: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleFourthGrade () {
    this.setState({
      view: 'split-view',
      fourth: true,
      third: false,
      first: false,
      second: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleFifthGrade () {
    this.setState({
      view: 'split-view',
      fifth: true,
      fourth: false,
      third: false,
      first: false,
      second: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSixthGrade () {
    this.setState({
      view: 'split-view',
      sixth: true,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSevenGrade () {
    this.setState({
      view: 'split-view',
      seven: true,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleEightGrade () {
    this.setState({
      view: 'split-view',
      seven: true,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleNineGrade () {
    this.setState({
      view: 'split-view',
      nine: true,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleTenGrade () {
    this.setState({
      view: 'split-view',
      ten: true,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eleven: false,
      twelve: false
    })
  }
  handleElevenGrade () {
    this.setState({
      view: 'split-view',
      eleven: true,
      ten: false,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      twelve: false
    })
  }
  handleTwelveGrade () {
    this.setState({
      view: 'split-view',
      twelve: true,
      ten: false,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eleven: false
    })
  }

    render () {
      let homepage = classnames(this.state.view)
    return (
      <div className='app-home'>
      <div className='school-name'><h1>Techsol Academy</h1></div>

        <div className='city'>
        <h2>London</h2>
        <p>London is the capital city of England.</p>
        <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </div>

        <div className='paris'>
        <h2>View student profile</h2>
        <div className='grades-btn'>
        <h3><button className='btn' type='button' onClick={this.handleFirstGrade}>First Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleSecondGrade}>Second Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleThirdGrade}>Third Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleFourthGrade}>Fourth Grade</button></h3>
        </div>
        <div className='grades-btn'>
        <h3><button className='btn' type='button' onClick={this.handleFifthGrade}>Fifth Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleSixthGrade}>Sixth Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleSevenGrade}>Seventh Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleEightGrade}>Eighth Grade</button></h3>
        </div>
        <div className='grades-btn'>
        <h3><button className='btn' type='button' onClick={this.handleNineGrade}>Nineth Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleTenGrade}>Tenth Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleElevenGrade}>Eleventh Grade</button></h3>
        <h3><button className='btn' type='button' onClick={this.handleTwelveGrade}>Twelth Grade</button></h3>
        </div>
        {this.state.first ? <div className={homepage}>
          <div className='home-page'>
          <GradeOne closeProfile={this.closeProfile} {...this.props} />
          </div>
         </div> : null}
         {this.state.second ? <div className={homepage}>
           <div className='home-page'>
           <GradeTwo closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.third ? <div className={homepage}>
           <div className='home-page'>
           <GradeThree closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.fourth ? <div className={homepage}>
           <div className='home-page'>
           <GradeFour closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.fifth ? <div className={homepage}>
           <div className='home-page'>
           <GradeFive closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.sixth ? <div className={homepage}>
           <div className='home-page'>
           <GradeSix closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.seven ? <div className={homepage}>
           <div className='home-page'>
           <GradeSeven closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.eight ? <div className={homepage}>
           <div className='home-page'>
           <GradeEight closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.nine ? <div className={homepage}>
           <div className='home-page'>
           <GradeNine closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.ten ? <div className={homepage}>
           <div className='home-page'>
           <GradeTen closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.eleven ? <div className={homepage}>
           <div className='home-page'>
           <GradeEleven closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
         {this.state.twelve ? <div className={homepage}>
           <div className='home-page'>
           <GradeTwelve closeProfile={this.closeProfile} {...this.props} />
           </div>
         </div> : null}
        </div>

        <div className='newyork'>
        <h2>New York</h2>
        <p>The City of New York is the most populous city in the United States.</p>
        <p>New York is an important center for international diplomacy and has been described as the cultural and financial capital of the world.</p>
        </div>

      </div>
    )
  }
}
