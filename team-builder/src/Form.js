import React from 'react';
import { v4 as uuid } from 'uuid'

function Form(props) {
const onFormSubmit = props.onFormSubmit;
    return (
        <div>
            <h3>Add a team member</h3>
            <form onSubmit={onFormSubmit}>
        <label>
            Name:
        <input
            type='text'
            name='name'
        />
        </label>

          <label>
              Email:
          <input
              type='text'
              name='email'
          />
          </label>

            <label>
                Role:
            <input
                type='text'
                name='role'
            />
            </label>
            <input type='submit'/>
            </form>
            
            </div>

    );
}

export default Form;