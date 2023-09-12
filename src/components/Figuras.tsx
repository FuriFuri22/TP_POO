
import { useState } from 'react';
import  FormaGeometrica from '../middlewares/figuras/FormaGeometrica.tsx';
import { Circulo } from '../middlewares/figuras/Circulo.tsx';
import { Rectangulo } from '../middlewares/figuras/Rectangulo.tsx';
import { Triangulo } from '../middlewares/figuras/Triangulo.tsx';

export const Figuras = ()=>{
    const [tipoFigura, setTipoFigura] = useState<string>('circulo');
    const [valor1, setValor1] = useState<number>(0);
    const [valor2, setValor2] = useState<number>(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const calcular = () => {
        let forma: FormaGeometrica | null = null;

        if (tipoFigura === 'circulo') {
        forma = new Circulo(valor1);
        } else if (tipoFigura === 'rectangulo') {
        forma = new Rectangulo(valor1, valor2);
        } else if (tipoFigura === 'triangulo') {
        forma = new Triangulo(valor1, valor2);
        }

        if (forma) {
        setResultado(forma.calcularArea());
        }
    };

    return(

        <div>
            <h1>Calculadora de Geometría</h1>
            <select onChange={(e) => setTipoFigura(e.target.value)}>
                <option value="circulo">Círculo</option>
                <option value="rectangulo">Rectángulo</option>
                <option value="triangulo">Triángulo</option>
            </select>
            {tipoFigura === 'circulo' && (
                <input
                type="number"
                placeholder="Valor 1"
                value={valor1}
                onChange={(e) => setValor1(Number(e.target.value))}
                />
            )}
            {tipoFigura === 'rectangulo' && (
                <div>
                    <input
                    type="number"
                    placeholder="Valor 1"
                    value={valor1}
                    onChange={(e) => setValor1(Number(e.target.value))}
                    />

                    <input
                    type="number"
                    placeholder="Valor 2"
                    value={valor2}
                    onChange={(e) => setValor2(Number(e.target.value))}
                    />

                </div>
            )}
            {tipoFigura === 'triangulo' && (
                <div>
                    <input
                    type="number"
                    placeholder="Valor 1"
                    value={valor1}
                    onChange={(e) => setValor1(Number(e.target.value))}
                    />
                    <input
                    type="number"
                    placeholder="Valor 2"
                    value={valor2}
                    onChange={(e) => setValor2(Number(e.target.value))}
                    />
                </div>
            )}
            <button onClick={calcular}>Calcular Área</button>
            {resultado !== null && <p>Área: {resultado}</p>}
        </div>
    )
}