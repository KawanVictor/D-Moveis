import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "darkred",
    padding: 20,
    borderRadius: 25,
    marginTop: 15,
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
  descricao: {
    marginTop: 15,
    fontSize: 16,
  },
  cabecalho: {
    padding: 20,
    backgroundColor: "lightblue",
  },
  rodape: {
    padding: 20,
    backgroundColor: "lightgray",
  }
});
