import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import BtnSubmitFinalForm from '../../../components/Buttons/BtnSubmitFinalForm';
import BtnResetFinalForm from '../../../components/Buttons/BtnResetFinalForm';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
};

const onSubmit = values => {
  console.log(values);
};

export default function InputFinalForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmployed, setIsEmployed] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [expertise, setExpertise] = useState([]);
  const [preferredTech, setPreferredTech] = useState('');
  const [notes, setNotes] = useState('')

  const handleEmployedChange = (e) => {
    setIsEmployed(e.target.checked);
  }

  const handleEducationChange = (e) => {
    setSelectedEducation(e.target.value);
  };

  const handleExpertiseChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setExpertise([...expertise, value]);
    } else {
      setExpertise(expertise.filter((item) => item !== value));
    }
  };

  const handlePreferredTechChange = (e) => {
    setPreferredTech(e.target.value);
  };

  return (
    <>
    <div className='flex flex-col font-GabaritoReguler font-normal text-sm'>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
            <div className='mt-5'>
              <label>First Name</label>
              <Field name="firstName" component="input" placeholder="First Name">
              {({ input }) => {
                setFirstName(input.value); // Set state with input value
                return <input {...input} type="text" placeholder='First Name' className="input input-bordered input-primary input-sm max-w-xs ml-8" />;
              }}
              </Field>
              <div className='flex mb-4 mt-2'>
                <span className='text-sm text-gray-400'>your first name : {firstName}</span>
              </div>
            </div>

          <div className='mt-2'>
            <label>Last Name</label>
            <Field name="lastName" component="input" placeholder="Last Name">
            {({ input }) => {
              setLastName(input.value); // Set state with input value
                return <input {...input} type="text" placeholder='First Name' className="input input-bordered input-primary input-sm max-w-xs ml-8" />;
              }}
            </Field>
            <div className='flex mb-4 mt-2'>
                <span className='text-sm text-gray-400'>your last name : {lastName}</span>
              </div>
          </div>

          <div className='mt-2'>
            <label>Employed</label>
            <Field
              name="employed"
              component="input"
              type="checkbox"
              className="ml-8"
              checked={isEmployed}
              onChange={handleEmployedChange}
            /> {' '}
            <div className='flex mb-4 mt-2'>
                <span className='text-sm text-gray-400'>{isEmployed ? 'true' : 'false'}</span>
              </div>
          </div>

          <div className='mt-2'>
            <label>Education</label>
            <Field
              name="education"
              component="select"
              className="select select-bordered select-sm select-primary ml-8"
              onChange={handleEducationChange}
            >
              <option />
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </Field>
            <div className='flex mb-4 mt-2'>
              <span className='text-sm text-gray-400'>Selected education : {selectedEducation}</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <label className="mr-4">Expertise</label>
              <div className="flex flex-wrap ml-4">
                <label className="flex items-center mr-4">
                  <Field name="expertise" component="input" type="checkbox" value="HTML" className="mr-2" onChange={handleExpertiseChange} /> {''} HTML
                </label>
                <label className="flex items-center mr-4">
                  <Field name="expertise" component="input" type="checkbox" value="CSS" className="mr-2" onChange={handleExpertiseChange} /> {''} CSS
                </label>
                <label className="flex items-center mr-4">
                  <Field name="expertise" component="input" type="checkbox" value="JavaScript" className="mr-2" onChange={handleExpertiseChange} /> {''} JavaScript
                </label>
                <label className="flex items-center mr-4">
                  <Field name="expertise" component="input" type="checkbox" value="NodeJS" className="mr-2" onChange={handleExpertiseChange} /> {''} NodeJS
                </label>
                <label className="flex items-center mr-4">
                  <Field name="expertise" component="input" type="checkbox" value="ReactJS" className="mr-2" onChange={handleExpertiseChange} /> {''} ReactJS
                </label>
              </div>
            </div>
            <div className='flex mb-4 mt-2'>
                <span className='text-sm text-gray-400'>
                  Selected expertise : {expertise.join(', ')}
                </span>
              </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <label className="mr-4">Preferred <br /> Technology</label>
              <div className="flex items-center">
                <label className="flex items-center mr-4">
                  <Field name="preferredTech" component="input" type="radio" value="frontend" className="mr-2" onChange={handlePreferredTechChange} /> {''} Frontend
                </label>
                <label className="flex items-center mr-4">
                  <Field name="preferredTech" component="input" type="radio" value="backend" className="mr-2" onChange={handlePreferredTechChange} /> {''} Backend
                </label>
                <label className="flex items-center mr-4">
                  <Field name="preferredTech" component="input" type="radio" value="fullstack" className="mr-2" onChange={handlePreferredTechChange} /> {''} Fullstack
                </label>
              </div>
            </div>
            <div className='flex mb-4 mt-2'>
              <span className='text-sm text-gray-400'>Selected PT : {preferredTech}</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <label className="mr-4">Notes</label>
              <Field
                name="notes"
                component="textarea"
              >
              {({ input }) => {
                setNotes(input.value); // Set state with input value
                return <textarea {...input} type="text" className="input input-bordered input-primary input-sm max-w-xs ml-8" />;
              }}
              </Field>
            </div>
            <div className='flex mb-4 mt-2'>
              <span className='text-sm text-gray-400'>Notes : {notes}</span>
            </div>
          </div>

          <div className="buttons mt-2 font-GabaritoReguler">
            <BtnSubmitFinalForm />
            <BtnResetFinalForm />
          </div>
        </form>
      )}
    />
    </div>
    </>
  )
}