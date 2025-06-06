
function Botoes({ onIncrement, onDecrement }){
    return(
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Botoes;