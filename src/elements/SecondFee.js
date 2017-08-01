'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

export default function SecondFee (props) {

    let {edit} = props
    let handleChange = props.handleChange()

    return (
      <fieldset disabled={!edit}>
        <legend>Second Installment</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semester1'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semester1 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                />
              First Semester
            </label>
              <label>
                <input name='semester1'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semester1 === 'Second Semester'}
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
                <input name='installment1'
                  value={'First Installment'}
                  type='radio'
                  checked={props.installment1 === 'First Installment'}
                  key={1}
                  onChange={handleChange}
           />
         First Installment
           </label>
              <label>
                <input name='installment1'
                  value={'Second Installment'}
                  type='radio'
                  checked={props.installment1 === 'Second Installment'}
                  key={2}
                  onChange={handleChange}
           />
         Second Installment
           </label>
              <label>
                <input name='installment1'
                  value={'Third Installment'}
                  type='radio'
                  checked={props.installment1 === 'Third Installment'}
                  key={3}
                  onChange={handleChange}
           />
         Third Installment
           </label>
              <label>
                <input name='installment1'
                  value={'Fourth Installment'}
                  type='radio'
                  checked={props.installment1 === 'Fourth Installment'}
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
        <input name='class1'
          readOnly
          required
          value={props.currentClass}
          />
          </label>
          <label className='bat'>Amount
                <input name='amount1'
                  value={props['amount1']}
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
