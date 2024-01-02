import { IoLogIn } from "react-icons/io5";

export default function Login() {


    const active = () => {
        localStorage.setItem('userSocialId', 'AAA')
        window.location.href = '/'
    }

    return (
        <>
            <div className="container">
                <div className="container-content">
                    <p>Bem-vindo ao</p>
                    <h1>Nippon <img src="/logo.png" alt="" /></h1>
                    <p>Faça login e comece a documentar seus estudos</p>
                    <div className="social-buttons-container">
                        <div className="input-area">
                            <input type="text" name="" id="" />
                            <input type="password" name="" id="" />
                            <span className="social-btn">
                                <b>Entrar</b>
                                <IoLogIn className="" onClick={active} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
