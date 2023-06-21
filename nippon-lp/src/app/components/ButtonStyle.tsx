
type ButtonProps = {
    platformImg: string,
    system: string | null,
    platform: string,
    href: string
}


export default function ButtonStyle(props: ButtonProps) {
    function openForm(platform: string): void {
        console.log(platform)
    }

    return (
        <a href={props.href} download>
            <button className="button-download" onClick={() => openForm(props.platform)}>
                <img src={props.platformImg} alt="donwload" />
                <p>{props.system}</p>
            </button>
        </a>

    )
} 