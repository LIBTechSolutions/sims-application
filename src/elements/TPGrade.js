'use strict'

import React, {Component} from 'react'

export default function TPGrade (props) {

    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>Third Period Grade</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semesterg2'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semesterg2 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                  required
              />
            First Semester
          </label>
              <label>
                <input name='semesterg2'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semesterg2 === 'Second Semester'}
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
                <input name='period2'
                  value={'First Period'}
                  type='radio'
                  checked={props.period2 === 'First Period'}
                  key={1}
                  onChange={handleChange}
                  required
          />
          First Period
          </label>
              <label>
                <input name='period2'
                  value={'Second Period'}
                  type='radio'
                  checked={props.period2 === 'Second Period'}
                  key={2}
                  onChange={handleChange}
                  required
          />
          Second Period
          </label>
              <label>
                <input name='period2'
                  value={'Third Period'}
                  type='radio'
                  checked={props.period2 === 'Third Period'}
                  key={3}
                  onChange={handleChange}
                  required
          />
          Third Period
          </label>
          <label>
            <input name='period2'
              value={'First Semester Exam'}
              type='radio'
              checked={props.period2 === 'First Semester Exam'}
              key={4}
              onChange={handleChange}
              required
            />
            First Semester Exam
            </label>
              <label>
                <input name='period2'
                  value={'Fourth Period'}
                  type='radio'
                  checked={props.period2 === 'Fourth Period'}
                  key={5}
                  onChange={handleChange}
                  required
          />
          Fourth Period
          </label>
              <label>
                <input name='period2'
                  value={'Fifth Period'}
                  type='radio'
                  checked={props.period2 === 'Fifth Period'}
                  key={6}
                  onChange={handleChange}
                  required
          />
          Fifth Period
          </label>
              <label>
                <input name='period2'
                  value={'Sixth Period'}
                  type='radio'
                  checked={props.period2 === 'Sixth Period'}
                  key={7}
                  onChange={handleChange}
                  required
          />
          Sixth Period
          </label>
          <label>
            <input name='period2'
              value={'Second Semester Exam'}
              type='radio'
              checked={props.period2 === 'Second Semester Exam'}
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
          <input name='math2'
            value={props['math2']}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name='english2'
          value={props['english2']}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name='biology2'
          value={props['biology2']}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name='literature2'
          value={props['literature2']}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name='chemistry2'
          value={props['chemistry2']}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name='physics2'
          value={props['physics2']}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name='history2'
          value={props['history2']}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name='geography2'
          value={props['geography2']}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Economics
        <input name='economics2'
          value={props['economics2']}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>French
        <input name='french2'
          value={props['french2']}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name='rotc2'
          value={props['rotc2']}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Religious Education
        <input name='religious2'
          value={props['religious2']}
          type='number'
          placeholder='Religious Education Grade'
          onChange={handleChange}
          />
          </label>
        </div>
      </fieldset>
    )
}
