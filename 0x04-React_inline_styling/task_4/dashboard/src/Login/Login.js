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

export default function Login() {
    return (
        <>
            <div className={css(styles.login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email'>Email</label>
                <input className={css(styles.input)} type='email' name='email' id='email' />
                <label htmlFor='password'>Password</label>
                <input className={css(styles.input)} type='password' name='password' id='password' />
                <button className={css(styles.okButton)}>OK</button>
            </div>
        </>
    )
}