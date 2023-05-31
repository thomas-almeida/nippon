
type ButtonProps = {
    platformImg: string,
    system: string | null,
    platform: string
}


export default function ButtonStyle(props: ButtonProps) {
    function openForm(platform: string): void {
        console.log(platform)
    }

    return (
        <a href="/nippon.exe" download>
            <button className="button-download" onClick={() => openForm(props.platform)}>
                <img src={props.platformImg} alt="donwload" />
                <p>{props.system}</p>
            </button>
        </a>

    )
} 