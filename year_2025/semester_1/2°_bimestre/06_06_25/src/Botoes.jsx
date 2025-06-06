import './Botoes.css'


function Botoes({ onIncrement, onDecrement }){
    return(
        <div className='botoes'>
            <button onClick={onDecrement} className='menos'>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Botoes;