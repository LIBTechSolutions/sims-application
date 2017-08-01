'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

export default function FourthFee (props) {

    let {edit} = props
    let handleChange = props.handleChange()

    return (
      <fieldset disabled={!edit}>
        <legend>Fourth Installment</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semester3'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semester3 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                />
              First Semester
            </label>
              <label>
                <input name='semester3'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semester3 === 'Second Semester'}
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
                <input name='installment3'
                  value={'First Installment'}
                  type='radio'
                  checked={props.installment3 === 'First Installment'}
                  key={1}
                  onChange={handleChange}
           />
         First Installment
           </label>
              <label>
                <input name='installment3'
                  value={'Second Installment'}
                  type='radio'
                  checked={props.installment3 === 'Second Installment'}
                  key={2}
                  onChange={handleChange}
           />
         Second Installment
           </label>
              <label>
                <input name='installment3'
                  value={'Third Installment'}
                  type='radio'
                  checked={props.installment3 === 'Third Installment'}
                  key={3}
                  onChange={handleChange}
           />
         Third Installment
           </label>
              <label>
                <input name='installment3'
                  value={'Fourth Installment'}
                  type='radio'
                  checked={props.installment3 === 'Fourth Installment'}
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
        <input name='class3'
          readOnly
          required
          value={props.currentClass}
          />
          </label>
          <label className='bat'>Amount
                <input name='amount3'
                  value={props['amount3']}
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
