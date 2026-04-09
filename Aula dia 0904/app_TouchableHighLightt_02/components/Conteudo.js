import React, {useState} from "react";
import {View, Text, TouchableHighlight} from 'react-native';
import { estilos } from "../styleSheet/estilo";

export default function Conteudo() {
    const [enunciado, setEnunciado] = useState("Clique no Botão para trocar a cor do fundo da tela!");
    const [descricao, setDescricao] = useState("");
    const [corFundo, setCorFundo] = useState("white");

    function alteraState() {
        if (corFundo === 'white') {
            setEnunciado("A cor do fundo do Componente Conteudo foi trocada para cinza. Clique novamente para voltar ao estado inicial.");
            setDescricao("Texto inserido em tempo real!");
            setCorFundo("gray");
        } else {
            setEnunciado("Clique no Botão para trocar a cor do fundo da tela!");
            setDescricao("");
            setCorFundo('white');
        }
    }

    return(
        <View style={[estilos.conteudo, {backgroundColor: corFundo}]}>
            <Text style={estilos.titulo}>useState</Text>
            <Text>{enunciado}</Text>
            <TouchableHighlight onPress={alteraState} style={estilos.botao}>
                <Text style={estilos.textoBotao}>CLIQUE AQUI</Text>
            </TouchableHighlight>
            <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    );
}
