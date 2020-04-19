import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import {auth, createUserProfileDocument} from '../../firebase/FirbaseUtils';
import './SignUp.scss';

class SignUp extends React.Component {
    
    constructor () {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword}= this.state;

        if(password !== confirmPassword) {
            alert("passwords dont match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument (user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
           console.error(error);
        }
        

    }

    handleChange = event => {
        const {name, value}= event.target
        this.setState({[name]:value})
    }


    render () {
        const {displayName, email, password, confirmPassword}= this.state;
        // this is deconstructed to ripoff properties from this.state
        return (
            <div className='sign-up'>
                <h2 className='title'> I do no have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit' > SIGN UP </CustomButton>

                </form>

            </div>
        );
    }
}

export default SignUp;