export default function Accordion (props) {
    const { titolo, descrizione } = props
    return (
        <div className="content-box">
            <h3>{titolo}</h3>
            <p>{descrizione}</p>
        </div>
    );
}