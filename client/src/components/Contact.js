import React from 'react'
import Welcome from './Welcome'
import "./contact.css"
const Contact = () => {
  return (
    <div className='welcome'>
      <div style={{ height: 100 }}><Welcome />

        {<div className="demo-container">
          <div className="form-group">
            <label htmlFor="input1">Name</label>
            <input
              type="text"
              id="input1"
              placeholder="Placeholder text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="input2">Mail</label>
            <input
              type="text"
              id="input2"
              placeholder="Placeholder text"
              className="form-control"
            />
          </div>
          <div className="form-group form-group-select">
            <label htmlFor="select">Select Label</label>
            <div className="select">
              <select className="form-control" name="" id="select">
                <option value="select option 1">Select option 1</option>
                <option value="select option 2">Select option 2</option>
              </select>
              <span className="chevron" />
            </div>
          </div>
          <div className="form-group form-group-textarea">
            <label htmlFor="textarea">Message</label>
            <textarea
              className="form-control"
              placeholder="Placeholder text"
              name=""
              id="textarea"
              defaultValue={""}
            />
          </div>
          <div className="form-group form-group-submit">
            <input
              className="btn btn-primary"
              type="submit"
              defaultValue="Send Message"
            />
          </div>
        </div>
        }
        <div>
        </div>
      </div>
    </div>
  )
}

export default Contact