
'use strict'

import React from 'react'
import classnames from 'classnames'
import ProfileTool from './ProfileTool'

export default function GradeOne (props) {
  let {closeProfile} = props
  const complete = props.idsrCases.filter(idsrCase => !!idsrCase.schoolInfo && !!idsrCase.complete && idsrCase.schoolInfo.currentClass === 'Grade One')

  return (
    <div className='student-profile'>
      <div className='student-data'>
        <ProfileTool closeProfile={closeProfile} />
        <h4>Student Profile</h4>
        <GradeStudents limit={1} docs={complete} {...props} />
      </div>
    </div>
  )
}


export class GradeStudents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startIndex: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  getEndIndex () {
    return this.state.startIndex + this.props.limit
  }

  nextPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.min(props.docs.length - 1, prevState.startIndex + props.limit)}
    })
  }

  previousPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.max(0, prevState.startIndex - props.limit)}
    })
  }

  hasPreviousPage () {
    return this.state.startIndex > 0
  }

  hasNextPage () {
    return this.state.startIndex + this.props.limit < this.props.docs.length
  }

  render () {
    const docs = this.props.limit
      ? this.props.docs.slice(this.state.startIndex, this.getEndIndex())
      : this.props.docs
    const pagination = this.props.limit
      ? (
        <tfoot>
          <tr>
            <td colSpan='2'><button className='btn' type='button' onClick={this.previousPage} disabled={!this.hasPreviousPage()}>Previous</button></td>
            <td colSpan='3' style={{textAlign: 'right'}}><button className='btn' type='button' onClick={this.nextPage} disabled={!this.hasNextPage()}>Next</button></td>
          </tr>
        </tfoot>
        )
      : null

    return docs.length === 0
      ? <em>No Info</em>
      : (
        <table className='profile'>
          <tbody>
            {docs.map((doc) => <PicDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <NameDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <IdDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <GradeDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <GenderDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <InstallmentOneDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <InstallmentTwoDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <InstallmentThreeDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <InstallmentFourDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <TotalInstallmentDataRow key={doc._id} doc={doc} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function PicDataRow (props) {
  let {doc} = props

  return (
    <tr>
    <td className='picture'><img src='../static/images/techsol-new-logo.jpg' alt='No picture' /></td>
    </tr>
  )
}
function NameDataRow (props) {
  let {doc} = props

  return (
    <tr>
    <td className='name'>{doc.schoolInfo.firstname}&nbsp;{doc.schoolInfo.middlename}&nbsp;{doc.schoolInfo.lastname}</td>
    </tr>
  )
}

function IdDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Student ID:</td>
    <td>{doc.schoolInfo.studentID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Class:</td>
    <td>{doc.schoolInfo.currentClass}</td>
    </tr>
  )
}

function GenderDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Gender:</td>
    <td>{doc.schoolInfo.sex}</td>
    </tr>
  )
}

function InstallmentOneDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>First Installment:</td>
    <td>{'$' + doc.schoolInfo.amount + '.00'}</td>
    </tr>
  )
}

function InstallmentTwoDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Second Installment:</td>
    <td>{'$' + doc.schoolInfo.amount1 + '.00'}</td>
    </tr>
  )
}

function InstallmentThreeDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Third Installment:</td>
    <td>{'$' + doc.schoolInfo.amount2 + '.00'}</td>
    </tr>
  )
}

function InstallmentFourDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
    <td className='title-padding'>Fourth Installment:</td>
    <td>{'$' + doc.schoolInfo.amount3 + '.00'}</td>
    </tr>
  )
}

function TotalInstallmentDataRow (props) {
  let {doc} = props
  let totalFee = [doc.schoolInfo.amount2, doc.schoolInfo.amount1, doc.schoolInfo.amount, doc.schoolInfo.amount3].reduce((a, b) => a + b)
  console.log(totalFee)

  return (
    <tr className='separate'>
    <td className='title-padding'>Total Paid:</td>
    <td>{'$' + '.00'}</td>
    </tr>
  )
}
