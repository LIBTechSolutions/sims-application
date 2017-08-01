'use strict'

import React from 'react'
import update from 'immutability-helper'
import classnames from 'classnames'
import RegistrationDataPage from './RegistrationDataPage'
import RegistrationForm from './RegistrationForm'
import {completeCase, getIDSRCase} from '../idsrCase'

export default class RegistrationDashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      doc: getIDSRCase(this.props),
      edit: false,
      savedStatusVisible: false,
      confirmCloseDialogVisible: false,
      view: 'full-view',
      viewForm: 'hide'
    }

    this.viewDoc = this.viewDoc.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.createCase = this.createCase.bind(this)
    this.confirmClose = this.confirmClose.bind(this)
    this.cancelClose = this.cancelClose.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.saveCase = this.saveCase.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.showForm = this.showForm.bind(this)
  }

  showForm () {
    this.setState({viewForm: 'show'})
  }
  hideForm () {
    this.setState({viewForm: 'hide'})
  }

  viewDoc (doc) {
    return (e) => {
      this.setState({
        doc,
        isNewCase: false,
        edit: false,
        hasChanged: false,
        savedStatusVisible: false,
        view: 'split-view'
      })
    }
  }

  toggleEdit () {
    this.setState((prevState, props) => {
      return {edit: !prevState.edit}
    })
  }

  confirmClose (e) {

    if (this.state.hasChanged) {
      e.preventDefault()
      this.setState({
        confirmCloseDialogVisible: true,
        viewForm: 'hide'
      })
    } else {
      return this.closeForm(e)
    }
  }

  cancelClose (e) {
    e.preventDefault()

    this.setState({
      confirmCloseDialogVisible: false,
      viewForm: 'hide'
    })
  }

  closeForm (e) {
    e.preventDefault()
    this.setState({
      doc: getIDSRCase(this.props),
      hasChanged: false,
      confirmCloseDialogVisible: false,
      view: 'full-view',
      viewForm: 'hide'
    })
  }

  createCase () {
    this.setState({
      doc: getIDSRCase(this.props),
      isNewCase: true,
      hasChanged: false,
      edit: true,
      savedStatusVisible: false,
      view: 'split-view'
    })
  }

  saveCase (doc) {
    let action = this.state.isNewCase
      ? this.props.actions.insertCase
      : this.props.actions.updateCase

    action(doc)

    this.setState({
      doc,
      hasChanged: false,
      savedStatusVisible: true,
      edit: false
    })
  }

  updateDoc (dependentProps) {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let doc = {
          schoolInfo: {
            [key]: {$set: value}
          }
        }

        if (typeof dependentProps === 'function') {
          let calculatedProps = dependentProps(value)
          for (let prop in calculatedProps) {
            doc.schoolInfo[prop] = {$set: calculatedProps[prop]}
          }
        } else {
          for (let prop in dependentProps) {
            doc.schoolInfo[prop] = {$set: dependentProps[prop](value)}
          }
        }

        return update(prevState, {doc, hasChanged: {$set: true}})
      })
    }
  }

  render () {
    let dashboardClass = classnames('dashboard', this.state.view, this.state.viewForm, {
      'show-modal': this.state.confirmCloseDialogVisible
    })
    return (
      <div id='dashboard' className={dashboardClass}>
        <RegistrationDataPage
          viewDoc={this.viewDoc}
          createCase={this.createCase}
          selectedCase={this.state.doc}
          {...this.props} />
        <RegistrationForm
          showForm={this.showForm}
          hideForm={this.hideForm}
          updateDoc={this.updateDoc}
          toggleEdit={this.toggleEdit}
          confirmClose={this.confirmClose}
          cancelClose={this.cancelClose}
          closeForm={this.closeForm}
          createCase={this.createCase}
          saveCase={this.saveCase}
          completeCase={completeCase}
          isNewCase={this.state.isNewCase}
          hasChanged={this.state.hasChanged}
          {...this.state}
          {...this.props} />
      </div>
    )
  }
}
