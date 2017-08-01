'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

export default function ThirdFee (props) {

    let {edit} = props
    let handleChange = props.handleChange()

    return (
      <fieldset disabled={!edit}>
        <legend>Third Installment</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semester2'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semester2 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                />
              First Semester
            </label>
              <label>
                <input name='semester2'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semester2 === 'Second Semester'}
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
                <input name='installment2'
                  value={'First Installment'}
                  type='radio'
                  checked={props.installment2 === 'First Installment'}
                  key={1}
                  onChange={handleChange}
           />
         First Installment
           </label>
              <label>
                <input name='installment2'
                  value={'Second Installment'}
                  type='radio'
                  checked={props.installment2 === 'Second Installment'}
                  key={2}
                  onChange={handleChange}
           />
         Second Installment
           </label>
              <label>
                <input name='installment2'
                  value={'Third Installment'}
                  type='radio'
                  checked={props.installment2 === 'Third Installment'}
                  key={3}
                  onChange={handleChange}
           />
         Third Installment
           </label>
              <label>
                <input name='installment2'
                  value={'Fourth Installment'}
                  type='radio'
                  checked={props.installment2 === 'Fourth Installment'}
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
        <input name='class2'
          readOnly
          required
          value={props.currentClass}
          />
          </label>
          <label className='bat'>Amount
                <input name='amount2'
                  value={props['amount2']}
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
