import Link from 'next/link'
import styled from './login.module.css'

export default function Login() {
    return(
        <div className={styled.login}>
            <h1>Entrar</h1>
            <form className={styled.form}>
                <div className={styled.formLogin}>
                <p>Você tem uma conta Diego Max?</p>
                <input type="text" placeholder='Endereço de e-mail' />
                <input type="password" placeholder='Senha' />
                <div className={styled.contentBtn}>
                    <button>Entrar</button>
                    <Link href={"/"}>Esqueceu a senha?</Link>
                </div>
                </div>
            </form>
        </div>
    )
}