import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [quebrado, setQuebrado] = useState(false);

  const frases = [
    "Grandes oportunidades estão a caminho.",
    "Você terá um dia incrível.",
    "Algo especial vai acontecer em breve.",
    "A sorte está ao seu lado hoje.",
    "Seja paciente, coisas boas virão."
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('./assets/biscoito_aberto.png'));
    setQuebrado(true);
  }

  function resetar() {
    setTextoFrase('');
    setImg(require('./assets/biscoito.png'));
    setQuebrado(false);
  }

  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>
        {textoFrase}
      </Text>

      {/* Só aparece quando NÃO foi quebrado */}
      {!quebrado && (
        <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
          <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
        </TouchableOpacity>
      )}

      {/* Só aparece quando FOI quebrado */}
      {quebrado && (
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#999' }]}
          onPress={resetar}
        >
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  img: {
    width: 250,
    height: 250,
    marginBottom: 20
  },

  textoFrase: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    margin: 20,
    fontStyle: 'italic'
  },

  botao: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16
  }
});