import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';
import useSignUp from '../../hooks/useSignUp.js';

const SignUp = () => {

    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const {loading, signup} = useSignUp();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-[#3F403F] bg-clip-padding'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					S'inscrire
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Nom et Prénom</span>
						</label>
						<input
							type='text'
							placeholder='Entrez votre nom...'
							className='w-full input input-bordered  h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Nom d'utilisateur</span>
						</label>
						<input
							type='text'
							placeholder="Saisissez votre nom d'utilisateur..."
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Mot de passe</span>
						</label>
						<input
							type='password'
							placeholder='Entrer le mot de passe...'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirmez le mot de passe</span>
						</label>
						<input
							type='password'
							placeholder='Confirmez le mot de passe...'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Vous avez déjà un compte?
					</Link>

					<div>
                    	<button 
							type='submit' 
							className='btn glass btn-block btn-sm mt-2'
							disabled={loading}>
								{loading? <span className='loading loading-spinner'></span> : "S'inscrire"}
						</button>
                	</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp
