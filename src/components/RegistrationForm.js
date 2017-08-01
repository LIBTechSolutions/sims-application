'use strict'
import React from 'react'
import FormToolbar from '../elements/FormToolbar'
import Registration from '../elements/Registration'
import FirstFee from '../elements/FirstFee'
import SecondFee from '../elements/SecondFee'
import ThirdFee from '../elements/ThirdFee'
import FourthFee from '../elements/FourthFee'
import FPGrade from '../elements/FPGrade'
import SPGrade from '../elements/SPGrade'
import TPGrade from '../elements/TPGrade'
import EGrade from '../elements/EGrade'
import FOPGrade from '../elements/FOPGrade'
import FIPGrade from '../elements/FIPGrade'
import SIPGrade from '../elements/SIPGrade'
import FEPGrade from '../elements/FEPGrade'
import YesNoDialog from '../elements/YesNoDialog'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      canSubmit: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fouthFee: false,
      gradeForm: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: true

    }
    this.cancelForm = this.cancelForm.bind(this)
    this.handleFirstFee = this.handleFirstFee.bind(this)
    this.handleSecondFee = this.handleSecondFee.bind(this)
    this.handleThirdFee = this.handleThirdFee.bind(this)
    this.handleFourthFee = this.handleFourthFee.bind(this)
    this.handleFPGrade = this.handleFPGrade.bind(this)
    this.handleSPGrade = this.handleSPGrade.bind(this)
    this.handleTPGrade = this.handleTPGrade.bind(this)
    this.handleEGrade = this.handleEGrade.bind(this)
    this.handleFOPGrade = this.handleFOPGrade.bind(this)
    this.handleFIPGrade = this.handleFIPGrade.bind(this)
    this.handleSIPGrade = this.handleSIPGrade.bind(this)
    this.handleFEPGrade = this.handleFEPGrade.bind(this)
    this.submitCase = this.submitCase.bind(this)
    this.db = this.props.db
  }
  handleFirstFee () {
    this.setState({
      firstFee: true,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      gradeForm: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: false
    })
  }
  handleSecondFee () {
    this.setState({
      secondFee: true,
      firstFee: false,
      thirdFee: false,
      fourthFee: false,
      gradeForm: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: false
    })
  }
  handleThirdFee () {
    this.setState({
      thirdFee: true,
      secondFee: false,
      firstFee: false,
      fourthFee: false,
      gradeForm: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: false
    })
  }
  handleFourthFee () {
    this.setState({
      fourthFee: true,
      thirdFee: false,
      secondFee: false,
      firstFee: false,
      gradeForm: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: false
    })
  }
  handleFPGrade () {
    this.setState({
      gradeForm: true,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleSPGrade () {
    this.setState({
      gradeForm1: true,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleTPGrade () {
    this.setState({
      gradeForm2: true,
      gradeForm1: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleEGrade () {
    this.setState({
      gradeForm3: true,
      gradeForm2: false,
      gradeForm1: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleFOPGrade () {
    this.setState({
      gradeForm4: true,
      gradeForm3: false,
      gradeForm2: false,
      gradeForm1: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleFIPGrade () {
    this.setState({
      gradeForm5: true,
      gradeForm4: false,
      gradeForm3: false,
      gradeForm2: false,
      gradeForm1: false,
      gradeForm6: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleSIPGrade () {
    this.setState({
      gradeForm6: true,
      gradeForm5: false,
      gradeForm4: false,
      gradeForm3: false,
      gradeForm2: false,
      gradeForm1: false,
      gradeForm7: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  handleFEPGrade () {
    this.setState({
      gradeForm7: true,
      gradeForm6: false,
      gradeForm5: false,
      gradeForm4: false,
      gradeForm3: false,
      gradeForm2: false,
      gradeForm1: false,
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      registerForm: false
    })
  }
  cancelForm () {
    this.setState({
      gradeForm: false,
      firstFee: false,
      secondFee: false,
      thirdFee: false,
      fourthFee: false,
      gradeForm1: false,
      gradeForm2: false,
      gradeForm3: false,
      gradeForm4: false,
      gradeForm5: false,
      gradeForm6: false,
      gradeForm7: false,
      registerForm: true
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const canSubmit = this.canSubmit()
    if (prevState.canSubmit !== canSubmit) {
      this.setState({canSubmit})
    }
  }

  submitCase (event) {
    event.preventDefault()

    let idsrCase = Object.assign({}, this.props.doc)
    this.props.completeCase(idsrCase)
    this.props.saveCase(idsrCase)
  }

  // A form is submittable if it's in edit mode, has changes and is valid
  canSubmit () {
    return this.form
      ? this.props.edit && this.props.hasChanged && this.form.checkValidity()
      : false
  }

  render () {
    let props = this.props
    let {
      doc,
      user,
      updateDoc,
      toggleEdit,
      confirmClose,
      isNewCase,
      edit,
      savedStatusVisible,
      confirmCloseDialogVisible
    } = props

    return (
      <div className='student'>
        <div className='student-form'>
          <div className='eidsr-form'>
            <form action='' onSubmit={this.submitCase} ref={form => { this.form = form }}>
              <FormToolbar
                isNewCase={isNewCase}
                canSubmit={this.state.canSubmit}
                edit={edit}
                toggleEdit={toggleEdit}
                confirmClose={confirmClose}
                {...doc.schoolInfo} />
              <div className='eidsr-form__container' ref={container => { this.container = container }}>
                {savedStatusVisible && this.savedStatus()}
                {confirmCloseDialogVisible && this.confirmCloseDialog()}
                { this.state.registerForm ?
                 <div>
                <Registration
                  edit={edit}
                  handleChange={updateDoc}
                  user={user}
                  {...doc.schoolInfo} />
                <div className='fee-grade-btn'>
                  <h3><button className='btn' type='button' onClick={this.handleFirstFee} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Fee</button></h3>
                  <h3><button className='btn' type='button' onClick={this.handleFPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                  <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                </div>
                </div>  : null }
                 { this.state.firstFee ?
                  <div>
                  <FirstFee
                  edit={edit}
                  handleChange={updateDoc}
                  {...doc.schoolInfo} />
                  <div className='fee-grade-btn'>
                    <h3><button className='btn' type='button' onClick={this.handleSecondFee} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Fee</button></h3>
                    <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                  </div>
                  </div>  : null }
                  { this.state.secondFee ?
                   <div>
                   <SecondFee
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleThirdFee} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Fee</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.thirdFee ?
                    <div>
                    <ThirdFee
                    edit={edit}
                    handleChange={updateDoc}
                    {...doc.schoolInfo} />
                    <div className='fee-grade-btn'>
                      <h3><button className='btn' type='button' onClick={this.handleFourthFee} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Fee</button></h3>
                      <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                    </div>
                    </div>  : null }
                    { this.state.fourthFee ?
                     <div>
                     <FourthFee
                     edit={edit}
                     handleChange={updateDoc}
                     {...doc.schoolInfo} />
                     <div className='fee-grade-btn'>
                       <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                     </div>
                     </div>  : null }
                  { this.state.gradeForm ?
                   <div>
                   <FPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleSPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm1 ?
                   <div>
                   <SPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleTPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm2 ?
                   <div>
                   <TPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleEGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm3 ?
                   <div>
                   <EGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleFOPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm4 ?
                   <div>
                   <FOPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleFIPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm5 ?
                   <div>
                   <FIPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleSIPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm6 ?
                   <div>
                   <SIPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.handleFEPGrade} disabled={doc.schoolInfo.registrationtype === ''}><i className='icon-add' />Add Grade</button></h3>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
                   { this.state.gradeForm7 ?
                   <div>
                   <FEPGrade
                   edit={edit}
                   handleChange={updateDoc}
                   {...doc.schoolInfo} />
                   <div className='fee-grade-btn'>
                     <h3><button className='btn' type='button' onClick={this.cancelForm} disabled={doc.schoolInfo.registrationtype === ''}>Cancel</button></h3>
                   </div>
                   </div>  : null }
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  confirmCloseDialog () {
    const {regID} = this.props.doc
    console.log(regID)
    const title = <span>You didn't save your changes. Do you want to keep editing {!!regID && <em>ID {regID}</em>}?</span>

    return (
      <YesNoDialog title={title}
        confirm={this.props.cancelClose}
        abort={this.props.closeForm}
        confirmText='I want to keep editing.'
        abortText='All my changes on this case will be lost.' />
    )
  }

  savedStatus () {
    return this.props.isNewCase
      ? (<div className='alert-success'>Info saved.<button onClick={this.props.createCase} className='btn btn--flat'><i className='icon-add' />Add another Info</button></div>)
      : (<div className='alert-success'>Info updated.</div>)
  }

}
