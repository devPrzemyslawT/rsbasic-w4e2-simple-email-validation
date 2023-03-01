import React from "react";
import { useState } from "react";

const Form = () => {
	const [formState, setFormState] = useState(true);

	const handleSubmit = e => {
		e.preventDefault();
		setFormState(false);
	};
    

	const FormClear = (
		<form onSubmit={handleSubmit}>
			<div className='elemContainer'>
				<label htmlFor='name'> Name: </label>
				<input
					id='name'
					name='name'
					type='textarea'
					placeholder='Enter name...'></input>
			</div>
			<div className='elemContainer'>
				<label htmlFor='email'> E-mail: </label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Enter e-mail...'></input>
			</div>
			<div className='elemContainer'>
				<fieldset>
					<legend>Select a blood group:</legend>

					<div>
						<label htmlFor='Group0'>Group 0</label>
						<input
							type='radio'
							id='Group0'
							name='bloodGroup'
							value='Group 0'
							defaultChecked></input>
					</div>

					<div>
						<label htmlFor='GroupA'>Group A</label>
						<input
							type='radio'
							id='GroupA'
							name='bloodGroup'
							value='Group A'></input>
					</div>

					<div>
						<label htmlFor='GroupB'>Group B</label>
						<input
							type='radio'
							id='GroupB'
							name='bloodGroup'
							value='Group B'></input>
					</div>
					<div>
						<label htmlFor='GroupAB'>Group AB</label>
						<input
							type='radio'
							id='GroupAB'
							name='bloodGroup'
							value='Group AB'></input>
					</div>
				</fieldset>
			</div>

			<div className='elemContainer'>
				<fieldset>
					<legend>Sex:</legend>

					<div>
						<label htmlFor='Male'>Male</label>
						<input
							type='radio'
							id='Male'
							name='Sex'
							value='Male'
							defaultChecked></input>
					</div>

					<div>
						<label htmlFor='Famale'>Famale</label>
						<input type='radio' id='Famale' name='Sex' value='Famale'></input>
					</div>
				</fieldset>
			</div>

			<div className='elemContainer'>
				<input type='checkbox' id='Policy' name='Policy'></input>
				<label htmlFor='Policy'>
					acceptance of the regulations and privacy policy
				</label>
			</div>
			<button type='submit'>Send</button>
		</form>
	);

	const FormCompleted = (
		<div>
			<h2>Registration completed!</h2>
			<button>Return</button>
		</div>
	);

	return <div>{formState ? FormClear : FormCompleted}</div>;
};

export default Form;
