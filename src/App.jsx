import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'

import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'

export default (propos) =>
    <div className="App">

        <Card titulo="#05 - Condicional">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>José</li>
                </ul>
            </Repeticao>
        </Card>

        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>José</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>