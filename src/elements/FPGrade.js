'use strict'

import React, {Component} from 'react'

export default function FPGrade (props) {

    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
        <legend>First Period Grade</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='semesterg'
                  value={'First Semester'}
                  type='radio'
                  checked={props.semesterg === 'First Semester'}
                  key={1}
                  onChange={handleChange}
                  required
              />
            First Semester
          </label>
              <label>
                <input name='semesterg'
                  value={'Second Semester'}
                  type='radio'
                  checked={props.semesterg === 'Second Semester'}
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
                <input name='period'
                  value={'First Period'}
                  type='radio'
                  checked={props.period === 'First Period'}
                  key={1}
                  onChange={handleChange}
                  required
          />
          First Period
          </label>
              <label>
                <input name='period'
                  value={'Second Period'}
                  type='radio'
                  checked={props.period === 'Second Period'}
                  key={2}
                  onChange={handleChange}
                  required
          />
          Second Period
          </label>
              <label>
                <input name='period'
                  value={'Third Period'}
                  type='radio'
                  checked={props.period === 'Third Period'}
                  key={3}
                  onChange={handleChange}
                  required
          />
          Third Period
          </label>
          <label>
            <input name='period'
              value={'First Semester Exam'}
              type='radio'
              checked={props.period === 'First Semester Exam'}
              key={4}
              onChange={handleChange}
              required
            />
            First Semester Exam
            </label>
              <label>
                <input name='period'
                  value={'Fourth Period'}
                  type='radio'
                  checked={props.period === 'Fourth Period'}
                  key={5}
                  onChange={handleChange}
                  required
          />
          Fourth Period
          </label>
              <label>
                <input name='period'
                  value={'Fifth Period'}
                  type='radio'
                  checked={props.period === 'Fifth Period'}
                  key={6}
                  onChange={handleChange}
                  required
          />
          Fifth Period
          </label>
              <label>
                <input name='period'
                  value={'Sixth Period'}
                  type='radio'
                  checked={props.period === 'Sixth Period'}
                  key={7}
                  onChange={handleChange}
                  required
          />
          Sixth Period
          </label>
          <label>
            <input name='period'
              value={'Second Semester Exam'}
              type='radio'
              checked={props.period === 'Second Semester Exam'}
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
          <input name='math'
            value={props['math']}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name='english'
          value={props['english']}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name='biology'
          value={props['biology']}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name='literature'
          value={props['literature']}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name='chemistry'
          value={props['chemistry']}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name='physics'
          value={props['physics']}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name='history'
          value={props['history']}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name='geography'
          value={props['geography']}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Economics
        <input name='economics'
          value={props['economics']}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>French
        <input name='french'
          value={props['french']}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name='rotc'
          value={props['rotc']}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Religious Education
        <input name='religious'
          value={props['religious']}
          type='number'
          placeholder='Religious Education Grade'
          onChange={handleChange}
          />
          </label>
        </div>
      </fieldset>
    )
}
