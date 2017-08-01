'use strict'

import React, {Component} from 'react'

export default function FIPGrade (props) {

    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>Fifth Period Grade</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semesterg5'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semesterg5 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                  required
              />
            First Semester
          </label>
              <label>
                <input name='semesterg5'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semesterg5 === 'Second Semester'}
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
                <input name='period5'
                  value={'First Period'}
                  type='radio'
                  checked={props.period5 === 'First Period'}
                  key={1}
                  onChange={handleChange}
                  required
          />
          First Period
          </label>
              <label>
                <input name='period5'
                  value={'Second Period'}
                  type='radio'
                  checked={props.period5 === 'Second Period'}
                  key={2}
                  onChange={handleChange}
                  required
          />
          Second Period
          </label>
              <label>
                <input name='period5'
                  value={'Third Period'}
                  type='radio'
                  checked={props.period5 === 'Third Period'}
                  key={3}
                  onChange={handleChange}
                  required
          />
          Third Period
          </label>
          <label>
            <input name='period5'
              value={'First Semester Exam'}
              type='radio'
              checked={props.period5 === 'First Semester Exam'}
              key={4}
              onChange={handleChange}
              required
            />
            First Semester Exam
            </label>
              <label>
                <input name='period5'
                  value={'Fourth Period'}
                  type='radio'
                  checked={props.period5 === 'Fourth Period'}
                  key={5}
                  onChange={handleChange}
                  required
          />
          Fourth Period
          </label>
              <label>
                <input name='period5'
                  value={'Fifth Period'}
                  type='radio'
                  checked={props.period5 === 'Fifth Period'}
                  key={6}
                  onChange={handleChange}
                  required
          />
          Fifth Period
          </label>
              <label>
                <input name='period5'
                  value={'Sixth Period'}
                  type='radio'
                  checked={props.period5 === 'Sixth Period'}
                  key={7}
                  onChange={handleChange}
                  required
          />
          Sixth Period
          </label>
          <label>
            <input name='period5'
              value={'Second Semester Exam'}
              type='radio'
              checked={props.period5 === 'Second Semester Exam'}
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
          <input name='math5'
            value={props['math5']}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name='english5'
          value={props['english5']}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name='biology5'
          value={props['biology5']}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name='literature5'
          value={props['literature5']}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name='chemistry5'
          value={props['chemistry5']}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name='physics5'
          value={props['physics5']}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name='history5'
          value={props['history5']}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name='geography5'
          value={props['geography5']}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Economics
        <input name='economics5'
          value={props['economics5']}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>French
        <input name='french5'
          value={props['french5']}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name='rotc5'
          value={props['rotc5']}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Religious Education
        <input name='religious5'
          value={props['religious5']}
          type='number'
          placeholder='Religious Education Grade'
          onChange={handleChange}
          />
          </label>
        </div>
      </fieldset>
    )
}
