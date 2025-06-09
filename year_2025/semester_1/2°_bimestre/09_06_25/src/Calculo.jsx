// import Calcular from "./Calcular";
import './Calculo.css'


export default function Contador() {
    const [peso] = parseFloat(<input type="number" name="" id="" placeholder="peso"/>) ;
    const [altura] = parseFloat(<input type="number" name="" id="" placeholder="altura"/>) ;

    return (
        <>
            <main>
                <div className="box">
                    <h2>Contador</h2>
                    <div>
                        <div>{peso}</div>
                        <div>{altura}</div>
                    </div>
                    {/* <Calcular/> */}
                </div>
            </main>
        </>
    );
}