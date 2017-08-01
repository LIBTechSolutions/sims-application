'use strict'

import React, {Component} from 'react'

export default function FOPGrade (props) {

    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>Fourth Period Grade</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semesterg4'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semesterg4 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                  required
              />
            First Semester
          </label>
              <label>
                <input name='semesterg4'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semesterg4 === 'Second Semester'}
                  key={2}
                  onChange={handleChange}
                  required
              />
            Second Semester
           </label>
            </div>
          </div>
        </div>
        <div>
          <div className='form-row'>
            <label>Period</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='period4'
                  value={'First Period'}
                  type='radio'
                  checked={props.period4 === 'First Period'}
                  key={1}
                  onChange={handleChange}
                  required
          />
          First Period
          </label>
              <label>
                <input name='period4'
                  value={'Second Period'}
                  type='radio'
                  checked={props.period4 === 'Second Period'}
                  key={2}
                  onChange={handleChange}
                  required
          />
          Second Period
          </label>
              <label>
                <input name='period4'
                  value={'Third Period'}
                  type='radio'
                  checked={props.period4 === 'Third Period'}
                  key={3}
                  onChange={handleChange}
                  required
          />
          Third Period
          </label>
          <label>
            <input name='period4'
              value={'First Semester Exam'}
              type='radio'
              checked={props.period4 === 'First Semester Exam'}
              key={4}
              onChange={handleChange}
              required
            />
            First Semester Exam
            </label>
              <label>
                <input name='period4'
                  value={'Fourth Period'}
                  type='radio'
                  checked={props.period4 === 'Fourth Period'}
                  key={5}
                  onChange={handleChange}
                  required
          />
          Fourth Period
          </label>
              <label>
                <input name='period4'
                  value={'Fifth Period'}
                  type='radio'
                  checked={props.period4 === 'Fifth Period'}
                  key={6}
                  onChange={handleChange}
                  required
          />
          Fifth Period
          </label>
              <label>
                <input name='period4'
                  value={'Sixth Period'}
                  type='radio'
                  checked={props.period4 === 'Sixth Period'}
                  key={7}
                  onChange={handleChange}
                  required
          />
          Sixth Period
          </label>
          <label>
            <input name='period4'
              value={'Second Semester Exam'}
              type='radio'
              checked={props.period4 === 'Second Semester Exam'}
              key={8}
              onChange={handleChange}
              required
            />
          Second Semester Exam
            </label>
            </div>
          </div>
        </div>
        <div className='form-row'>
          <label className='bat'>Math
          <input name='math4'
            value={props['math4']}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name='english4'
          value={props['english4']}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name='biology4'
          value={props['biology4']}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name='literature4'
          value={props['literature4']}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name='chemistry4'
          value={props['chemistry4']}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name='physics4'
          value={props['physics4']}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name='history4'
          value={props['history4']}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name='geography4'
          value={props['geography4']}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Economics
        <input name='economics4'
          value={props['economics4']}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>French
        <input name='french4'
          value={props['french4']}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name='rotc4'
          value={props['rotc4']}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Religious Education
        <input name='religious4'
          value={props['religious4']}
          type='number'
          placeholder='Religious Education Grade'
          onChange={handleChange}
          />
          </label>
        </div>
      </fieldset>
    )
}
