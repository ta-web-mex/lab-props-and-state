import React from 'react'

export default ({props}) => {
  return (
    <div>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name={"name"} onChange={props.handleFieldChange("name")}/>
      </div>


      <div>
        <label htmlFor="surname">surname</label>
        <input type="text" name={"surname"} onChange={props.handleFieldChange("surname")}/>
      </div>


      <div>
        <label htmlFor="age">age</label>
        <input type="text" name={"age"} onChange={props.handleFieldChange("age")}/>
      </div>

      <div className={'center valuesWrapper flex-col'}>
        <div className={'values'}>
          <div>
            Name:
          </div>
          <span>{props.form.name}</span>
        </div>

        <div className={'values'}>
          <div>
            Surname:
          </div>
          <span>{props.form.surname}</span>
        </div>

        <div className={'values'}>
          <div>
            Age:
          </div>
          <span>{props.form.age}</span>
        </div>

      </div>
    </div>
  )
}
