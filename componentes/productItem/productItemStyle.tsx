import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    content: {
    flex: 1,
    paddingTop: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listaContainer: {
    paddingHorizontal: 16,
  },
 
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    width: '100%',
   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imagemProduto: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPreco: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00b300',
    marginVertical: 4,
  },
  itemDescricao: {
    fontSize: 14,
    color: '#666',
  }
});