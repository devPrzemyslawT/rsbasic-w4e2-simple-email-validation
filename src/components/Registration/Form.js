import React from "react";
import { useState } from "react";

const Form = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		bloodGroup: "Group 0",
		Sex: "Male",
		formState: true,
	});

	const [policyState, setPolicyState] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		// validatiom
		if (
			formState.name !== "" &&
			formState.name !== "" &&
			formState.email !== "" &&
			formState.bloodGroup !== "" &&
			formState.Sex !== "" &&
			policyState === true
		) {
			//send
			setFormState({
				formState: false,
			});
		}
	};

	const handlePolicyOnChange = e => {
		setPolicyState(!policyState);
	};

	const handleOnFormChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnReturnButton = e => {
		setFormState({
			name: "",
			email: "",
			bloodGroup: "Group 0",
			Sex: "Male",
			formState: true,
		});
		setPolicyState(false);
	};

	const FormClear = (
		<form onSubmit={handleSubmit} onChange={handleOnFormChange}>
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
				<input
					type='checkbox'
					id='Policy'
					name='Policy'
					onChange={handlePolicyOnChange}></input>
				<label htmlFor='Policy'>
					acceptance of the regulations and privacy policy
				</label>
			</div>
			<button onClick={handleSubmit}>Send</button>
		</form>
	);

	const FormCompleted = (
		<div>
			<h2>Registration completed!</h2>
			<button onClick={handleOnReturnButton}>Return</button>
		</div>
	);

	return <div>{formState.formState ? FormClear : FormCompleted}</div>;
};

export default Form;
