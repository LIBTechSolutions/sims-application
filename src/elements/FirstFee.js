'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

export default function FirstFee (props) {

    let {edit} = props
    let handleChange = props.handleChange()

    return (
      <fieldset disabled={!edit}>
        <legend>First Installment</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semester'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semester === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                />
              First Semester
            </label>
              <label>
                <input name='semester'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semester === 'Second Semester'}
                  key={2}
                  onChange={handleChange}
                />
              Second Semester
             </label>
            </div>
          </div>
        </div>
        <div>
        <div>
          <div className='form-row'>
            <label>Installment</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='installment'
                  value={'First Installment'}
                  type='radio'
                  checked={props.installment === 'First Installment'}
                  key={1}
                  onChange={handleChange}
           />
         First Installment
           </label>
              <label>
                <input name='installment'
                  value={'Second Installment'}
                  type='radio'
                  checked={props.installment === 'Second Installment'}
                  key={2}
                  onChange={handleChange}
           />
         Second Installment
           </label>
              <label>
                <input name='installment'
                  value={'Third Installment'}
                  type='radio'
                  checked={props.installment === 'Third Installment'}
                  key={3}
                  onChange={handleChange}
           />
         Third Installment
           </label>
              <label>
                <input name='installment'
                  value={'Fourth Installment'}
                  type='radio'
                  checked={props.installment === 'Fourth Installment'}
                  key={4}
                  onChange={handleChange}
           />
         Fourth Installment
           </label>
            </div>
          </div>
        </div>
        <div className='form-row'>
          <label className='bat'>Class
        <input name='class'
          readOnly
          required
          value={props.currentClass}
          />
          </label>
          <label className='bat'>Amount
                <input name='amount'
                  value={props['amount']}
                  type='number'
                  placeholder='Amount paid'
                  onChange={handleChange}
                />
          </label>
        </div>
      </div>
      </fieldset>

    )
}

function getClasses () {
  let grade = config.staff_positions
  return Object.keys(grade.grades)
}
