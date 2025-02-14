import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    login: {
        margin: '2.5em', 
        fontSize: '2.5vmin',
        height: '30vh',
    },
    input: {
        margin: '0.7em',
        "@media (max-width: 900px)": {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    okButton: {
        backgroundColor: 'white',
        border: 'none',
        width: '3em',
        height: '3em',
        padding: '0.5em',
        fontSize: '0.8em',
        cursor: 'pointer',
        ":hover": {
            border: '2px solid gold',
            boxShadow: '0 0 10px gold'
        }
    }
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(e){
        e.preventDefault();
        this.setState({isLoggedIn: true});
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value});
        (this.state.email.length > 0 && this.state.password.length > 0) ? this.setState({enableSubmit: true}) : this.setState({enableSubmit: false});
    }

    handleChangePassword(e){
        this.setState({password: e.target.value});
        (this.state.email !== '' && this.state.password !== '') ? this.setState({enableSubmit: true}) : this.setState({enableSubmit: false});
    }

    render() {
        return (
            <>
                <div className={css(styles.login)}>
                    <p>Login to access the full dashboard</p>
                    <form onSubmit={this.handleLoginSubmit}>
                        <label htmlFor='email'>Email</label>
                        <input className={css(styles.input)} type='email' name='email' id='email' value={this.state.email} onChange={this.handleChangeEmail} />
                        <label htmlFor='password'>Password</label>
                        <input className={css(styles.input)} type='password' name='password' id='password' value={this.state.password} onChange={this.handleChangePassword} />
                        <input className={css(styles.okButton)} type='submit' value='OK' disabled={!this.state.enableSubmit}  />
                    </form>
                </div>
            </>
        )
    }
}

export default Login;