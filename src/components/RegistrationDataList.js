'use strict'

import React from 'react'
import classnames from 'classnames'

export default class RegistrationDataList extends React.Component {
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
    const classes = classnames(this.props.className, 'table-list')
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
      ? <em>No cases</em>
      : (
        <table className={classes}>
          <thead>
            <tr>
              <th>Registration Type</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Registration ID</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc) => <DataRow key={doc._id} doc={doc} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function DataRow (props) {
  let {doc, viewDoc, selectedCase} = props

  return (
    <tr onClick={viewDoc(doc)} className={selectedCase._id === doc._id ? 'selected' : ''}>
      <td className='reporting-date'>{doc.schoolInfo.registrationtype}</td>
      <td className='health-facility'>{doc.schoolInfo.firstname}</td>
      <td className='patient-name'>{doc.schoolInfo.middlename}</td>
      <td className='disease'>{doc.schoolInfo.lastname}</td>
      <td className='case-id'>{doc.schoolInfo.studentID}</td>
    </tr>
  )
}
