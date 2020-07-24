import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    flex: 1,
    height: 160,
    resizeMode: 'contain',
  },
  footer: {
    padding: 25,
    paddingTop: 5,
    paddingBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.6,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
