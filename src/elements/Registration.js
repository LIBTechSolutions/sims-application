'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

const PhoneNumberPattern = '^(?:\\+\\d{1,3})?\\d{4}[ -]?\\d{3}[ -]?\\d{3}$'

export default class Registration extends Component {

  getPositions () {
    let positions = config.staff_positions
    return Object.keys(positions.staffs)
  }

  getClasses () {
    let grade = config.staff_positions
    return Object.keys(grade.grades)
  }

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>Registration Form</legend>
        <div>
          <div className='form-row'>
            <label>Registration Type</label> <br />
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='registrationtype'
                  value={'Student'}
                  type='radio'
                  checked={props.registrationtype === 'Student'}
                  key={1}
                  onChange={handleChange}
                  required
                    />
                  Student
                </label>
              <label>
                <input name='registrationtype'
                  value={'Faculty'}
                  type='radio'
                  checked={props.registrationtype === 'Faculty'}
                  key={2}
                  onChange={handleChange}
                  required
                    />
                  Faculty
                 </label>
            </div>
          </div>
        </div>
        <h3>General Information</h3>
        <hr />
        <fieldset disabled={props.registrationtype === ''}>
          <div className='form-row'>
            <label className='pot'>First Name
              <input name='firstname'
                value={props['firstname']}
                type='text'
                placeholder='First Name'
                onChange={handleChange}
              />
            </label>
            <label className='pot'>Middle Name
            <input name='middlename'
              value={props['middlename']}
              type='text'
              placeholder='Middle Name'
              onChange={handleChange}
              />
            </label>
            <label className='pot'>Last Name
            <input name='lastname'
              value={props['lastname']}
              type='text'
              placeholder='Last Name'
              onChange={handleChange}
              />
            </label>
          </div>
          <div className='form-row'>
            <label className='bat'>Date of Birth
            <input name='dob'
              value={props['dob']}
              type='date'
              placeholder='Date of Birth'
              onChange={handleChange}
              />
            </label>
            <label className='bat'>Nationality
            <input name='nationality'
              value={props['nationality']}
              type='text'
              placeholder='Nationality'
              onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <div className='form-row'>
              <label>Gender</label> <br />
            </div>
            <div className='form-row'>
              <div className='gender'>
                <label>
                  <input name='sex'
                    value={'Male'}
                    type='radio'
                    checked={props.sex === 'Male'}
                    key={1}
                    onChange={handleChange}
                    required
              />
              Male
          </label>
                <label>
                  <input name='sex'
                    value={'Female'}
                    type='radio'
                    checked={props.sex === 'Female'}
                    key={2}
                    onChange={handleChange}
                    required
              />
             Female
           </label>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <label className='bat'>Contact Email
          <input name='email'
            value={props['email']}
            type='email'
            placeholder='Email'
            onChange={handleChange}
            />
            </label>
            <label className='bat'>Phone Number
          <input name='phone'
            value={props['phone']}
            type='tel'
            pattern={PhoneNumberPattern}
            placeholder='Phone Number'
            onChange={handleChange}
            />
            </label>
            <label className='bat'>Emergency Contact
           <input name='emcontactname'
             value={props['emcontactname']}
             type='text'
             placeholder='Emergency contact name'
             onChange={handleChange}
            />
            </label>
            <label className='bat'>Contact Number
           <input name='emcontactnum'
             value={props['emcontactnum']}
             type='tel'
             pattern={PhoneNumberPattern}
             placeholder='Emergency contact number'
             onChange={handleChange}
            />
            </label>
            <label className='bat'>Picture
           <input name='picture'
             type='file'
             onChange={handleChange}
            />
            </label>
          </div>
          <h3>Student Information</h3>
          <hr />
          <fieldset disabled={props.registrationtype === 'Faculty'}>
            <div className='form-row'>
              <label className='bat'>Previous School Attended
          <input name='prevschool'
            value={props['prevschool']}
            type='text'
            placeholder='Previous School'
            onChange={handleChange}
            />
              </label>
              <label className='bat'>Class
          <Select name='currentClass'
            onChange={handleChange}
            value={props['currentClass']}
            options={this.getClasses()}
            required />
              </label>
              <label className='bat'>Parent/Guardian Name
            <input name='parentguardian'
              value={props['parentguardian']}
              type='text'
              placeholder='Parent / Guardian Name'
              onChange={handleChange}
             />
              </label>
              <label className='bat'>Parent/Guardian Contact
            <input name='parentguardianphone'
              value={props['parentguardianphone']}
              type='tel'
              placeholder='Parent / Guardian Phone'
              pattern={PhoneNumberPattern}
              onChange={handleChange}
              />
              </label>
            </div>
          </fieldset>
          <h3>Staff/Faculty Information</h3>
          <hr />
          <fieldset disabled={props.registrationtype === 'Student'}>
            <div className='form-row'>
              <label className='bat'>Staff Position
             <Select name='Position'
               onChange={handleChange}
               value={props['Position']}
               options={this.getPositions()}
               required />
              </label>
              <label className='bat'>Staff Qualification
              <input name='qualification'
                value={props['qualification']}
                type='text'
                placeholder='Qualification'
                onChange={handleChange}
               />
              </label>
              <label className='bat'>Staff Experience
              <input name='experience'
                value={props['experience']}
                type='number'
                placeholder='Years of Experience'
                onChange={handleChange}
               />
              </label>
              <label className='bat'>Staff License
              <input name='license'
                value={props['license']}
                type='text'
                placeholder='Teacher License'
                onChange={handleChange}
               />
              </label>
            </div>
          </fieldset>
        </fieldset>
      </fieldset>

    )
  }

}
