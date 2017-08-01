'use strict'

import React, {Component} from 'react'

export default function SIPGrade (props) {

    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>Six Period Grade</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semesterg6'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semesterg6 === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                  required
              />
            First Semester
          </label>
              <label>
                <input name='semesterg6'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semesterg6 === 'Second Semester'}
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
                <input name='period6'
                  value={'First Period'}
                  type='radio'
                  checked={props.period6 === 'First Period'}
                  key={1}
                  onChange={handleChange}
                  required
          />
          First Period
          </label>
              <label>
                <input name='period6'
                  value={'Second Period'}
                  type='radio'
                  checked={props.period6 === 'Second Period'}
                  key={2}
                  onChange={handleChange}
                  required
          />
          Second Period
          </label>
              <label>
                <input name='period6'
                  value={'Third Period'}
                  type='radio'
                  checked={props.period6 === 'Third Period'}
                  key={3}
                  onChange={handleChange}
                  required
          />
          Third Period
          </label>
          <label>
            <input name='period6'
              value={'First Semester Exam'}
              type='radio'
              checked={props.period6 === 'First Semester Exam'}
              key={4}
              onChange={handleChange}
              required
            />
            First Semester Exam
            </label>
              <label>
                <input name='period6'
                  value={'Fourth Period'}
                  type='radio'
                  checked={props.period6 === 'Fourth Period'}
                  key={5}
                  onChange={handleChange}
                  required
          />
          Fourth Period
          </label>
              <label>
                <input name='period6'
                  value={'Fifth Period'}
                  type='radio'
                  checked={props.period6 === 'Fifth Period'}
                  key={6}
                  onChange={handleChange}
                  required
          />
          Fifth Period
          </label>
              <label>
                <input name='period6'
                  value={'Sixth Period'}
                  type='radio'
                  checked={props.period6 === 'Sixth Period'}
                  key={7}
                  onChange={handleChange}
                  required
          />
          Sixth Period
          </label>
          <label>
            <input name='period6'
              value={'Second Semester Exam'}
              type='radio'
              checked={props.period6 === 'Second Semester Exam'}
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
          <input name='math6'
            value={props['math6']}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name='english6'
          value={props['english6']}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name='biology6'
          value={props['biology6']}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name='literature6'
          value={props['literature6']}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name='chemistry6'
          value={props['chemistry6']}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name='physics6'
          value={props['physics6']}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name='history6'
          value={props['history6']}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name='geography6'
          value={props['geography6']}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Economics
        <input name='economics6'
          value={props['economics6']}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>French
        <input name='french6'
          value={props['french6']}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name='rotc6'
          value={props['rotc6']}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Religious Education
        <input name='religious6'
          value={props['religious6']}
          type='number'
          placeholder='Religious Education Grade'
          onChange={handleChange}
          />
          </label>
        </div>
      </fieldset>
    )
}
